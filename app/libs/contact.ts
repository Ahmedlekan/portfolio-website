export const CONTACT_LIMITS = { name: 100, email: 254, subject: 160, message: 5000 } as const;
export const MAX_BODY_BYTES = 24_000;

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type ValidationResult =
  | { ok: true; data: ContactPayload; spam: boolean }
  | { ok: false; error: string };

export function validateContactPayload(value: unknown): ValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, error: "Please send a valid contact form." };
  }
  const input = value as Record<string, unknown>;
  const data = {} as ContactPayload;
  for (const key of ["name", "email", "subject", "message"] as const) {
    const field = input[key];
    if (typeof field !== "string" || !field.trim() || field.length > CONTACT_LIMITS[key]) {
      return { ok: false, error: "Please provide a valid " + key + " (up to " + CONTACT_LIMITS[key] + " characters)." };
    }
    data[key] = field.trim();
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }
  if (/[\r\n\x00-\x1f\x7f]/.test(data.name + data.email + data.subject) || /\x00/.test(data.message)) {
    return { ok: false, error: "Please remove unsupported characters from the form." };
  }
  if (input.website !== undefined && typeof input.website !== "string") {
    return { ok: false, error: "Please send a valid contact form." };
  }
  return { ok: true, data, spam: typeof input.website === "string" && input.website.trim().length > 0 };
}

export function escapeHtml(value: string): string {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export class ContactBodyError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

export async function readContactBody(request: Request): Promise<unknown> {
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    throw new ContactBodyError("Please submit the contact form as JSON.", 415);
  }
  const declaredLength = request.headers.get("content-length");
  if (declaredLength && Number(declaredLength) > MAX_BODY_BYTES) {
    throw new ContactBodyError("Your message is too large.", 413);
  }
  const reader = request.body?.getReader();
  if (!reader) throw new ContactBodyError("Please send a valid contact form.", 400);
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new ContactBodyError("Your message is too large.", 413);
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch {
    throw new ContactBodyError("Please send a valid contact form.", 400);
  }
}

// A bounded, per-process guard. Multi-instance deployments need a shared limiter.
export function createContactRateLimiter({
  windowMs = 15 * 60 * 1000,
  perEmail = 3,
  total = 30,
} = {}) {
  const senders = new Map<string, { count: number; expires: number }>();
  let globalCount = 0;
  let globalExpires = 0;

  return (email: string, now = Date.now()): { allowed: boolean; retryAfter: number } => {
    if (now >= globalExpires) {
      globalCount = 0;
      globalExpires = now + windowMs;
    }
    senders.forEach((entry, key) => {
      if (now >= entry.expires) senders.delete(key);
    });
    const key = email.toLowerCase();
    const entry = senders.get(key);
    const retryUntil = Math.max(
      globalCount >= total ? globalExpires : 0,
      entry && entry.count >= perEmail ? entry.expires : 0,
    );
    if (retryUntil > now) {
      return { allowed: false, retryAfter: Math.ceil((retryUntil - now) / 1000) };
    }
    globalCount += 1;
    senders.set(key, { count: (entry?.count ?? 0) + 1, expires: entry?.expires ?? now + windowMs });
    return { allowed: true, retryAfter: 0 };
  };
}
