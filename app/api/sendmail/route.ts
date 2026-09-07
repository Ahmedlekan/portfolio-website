import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  ContactBodyError,
  createContactRateLimiter,
  escapeHtml,
  readContactBody,
  validateContactPayload,
} from "@/app/libs/contact";

export const runtime = "nodejs";
const rateLimit = createContactRateLimiter();

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await readContactBody(request);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof ContactBodyError ? error.message : "Please send a valid contact form." },
      { status: error instanceof ContactBodyError ? error.status : 400 },
    );
  }

  const result = validateContactPayload(payload);
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 });
  if (result.spam) return NextResponse.json({ success: true });

  const { EMAIL_USER, EMAIL_PASSWORD, EMAIL_TO, EMAIL_FROM, EMAIL_SERVICE } = process.env;
  if (!EMAIL_USER || !EMAIL_PASSWORD || !EMAIL_TO) {
    return NextResponse.json({ error: "The form is temporarily unavailable. Please contact me by email." }, { status: 503 });
  }

  const { name, email, subject, message } = result.data;
  const limit = rateLimit(email);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later or contact me by email." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  const transporter = nodemailer.createTransport({
    service: EMAIL_SERVICE || "Gmail",
    auth: { user: EMAIL_USER, pass: EMAIL_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  try {
    await transporter.sendMail({
      from: { name: "Portfolio contact", address: EMAIL_FROM || EMAIL_USER },
      replyTo: { name, address: email },
      to: EMAIL_TO,
      subject,
      text: "Name: " + name + "\nEmail: " + email + "\n\n" + message,
      html: "<h2>New portfolio message</h2><p><strong>Name:</strong> " + escapeHtml(name) +
        "</p><p><strong>Email:</strong> " + escapeHtml(email) +
        "</p><p><strong>Subject:</strong> " + escapeHtml(subject) +
        "</p><p>" + escapeHtml(message).replace(/\r?\n/g, "<br>") + "</p>",
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Your message could not be sent. Please try again or contact me by email." }, { status: 502 });
  } finally {
    transporter.close();
  }
}
