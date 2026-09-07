const assert = require("node:assert/strict");
const { test } = require("node:test");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { runInNewContext } = require("node:vm");
const ts = require("typescript");

function loadTypescript(relativePath, dependencies = {}, env = {}) {
  const filename = path.join(__dirname, "..", relativePath);
  const source = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText;
  const compiledModule = { exports: {} };
  runInNewContext(source, {
    module: compiledModule,
    exports: compiledModule.exports,
    require: (name) => {
      if (Object.hasOwn(dependencies, name)) return dependencies[name];
      throw new Error("Unexpected test dependency: " + name);
    },
    process: { env },
    TextDecoder,
    Uint8Array,
  }, { filename });
  return compiledModule.exports;
}

const contact = loadTypescript("app/libs/contact.ts");
const valid = { name: "Alex", email: "alex@example.com", subject: "Cloud engineering role", message: "Let's talk about the role.", website: "" };

function jsonRequest(body, headers = {}) {
  return new Request("http://localhost/api/sendmail", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

function handler({ configured = true, fail = false } = {}) {
  const sent = [];
  let closed = 0;
  const route = loadTypescript("app/api/sendmail/route.ts", {
    "next/server": { NextResponse: Response },
    "@/app/libs/contact": contact,
    nodemailer: {
      createTransport: () => ({
        sendMail: async (mail) => {
          if (fail) throw new Error("Private SMTP diagnostic");
          sent.push(mail);
        },
        close: () => { closed += 1; },
      }),
    },
  }, configured ? { EMAIL_USER: "sender@example.com", EMAIL_PASSWORD: "test-only", EMAIL_TO: "owner@example.com" } : {});
  return { post: route.POST, sent, closed: () => closed };
}

test("validates and trims fields while preserving message newlines", () => {
  const result = contact.validateContactPayload({ ...valid, name: " Alex ", message: "Hello\nWorld" });
  assert.equal(result.ok, true);
  assert.equal(result.data.name, "Alex");
  assert.equal(result.data.message, "Hello\nWorld");
});

test("rejects missing, blank, non-string, malformed email, and oversized fields", () => {
  for (const input of [null, [], "text", { ...valid, name: " " }, { ...valid, email: "invalid" },
    { ...valid, name: {} }, { ...valid, subject: "" }, { ...valid, message: "x".repeat(5001) },
    { ...valid, email: "x".repeat(255) }, { ...valid, website: {} }]) {
    assert.equal(contact.validateContactPayload(input).ok, false);
  }
});

test("rejects header injection but accepts Unicode and HTML as plain content", () => {
  assert.equal(contact.validateContactPayload({ ...valid, subject: "Hello\r\nBcc: victim@example.com" }).ok, false);
  assert.equal(contact.validateContactPayload({ ...valid, name: "Zoë", message: "<script>alert(1)</script>" }).ok, true);
});

test("escapes user-supplied HTML characters", () => {
  assert.equal(contact.escapeHtml('<img src="x">&\''), "&lt;img src=&quot;x&quot;&gt;&amp;&#39;");
});

test("limits each sender case-insensitively and resets after expiry", () => {
  const limit = contact.createContactRateLimiter({ windowMs: 1000, perEmail: 2, total: 10 });
  assert.equal(limit("A@example.com", 100).allowed, true);
  assert.equal(limit("a@example.com", 200).allowed, true);
  const denied = limit("a@example.com", 300);
  assert.equal(denied.allowed, false);
  assert.equal(denied.retryAfter, 1);
  assert.equal(limit("a@example.com", 1100).allowed, true);
});

test("global limit prevents bypass by rotating email addresses", () => {
  const limit = contact.createContactRateLimiter({ windowMs: 1000, total: 2 });
  assert.equal(limit("a@example.com", 0).allowed, true);
  assert.equal(limit("b@example.com", 1).allowed, true);
  assert.equal(limit("c@example.com", 2).allowed, false);
  assert.equal(limit("c@example.com", 1000).allowed, true);
});

test("body reader rejects wrong media type and invalid JSON", async () => {
  await assert.rejects(contact.readContactBody(new Request("http://localhost", { method: "POST", body: "text" })), { status: 415 });
  await assert.rejects(contact.readContactBody(new Request("http://localhost", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: "{",
  })), { status: 400 });
});

test("body reader enforces actual size without trusting Content-Length", async () => {
  await assert.rejects(contact.readContactBody(jsonRequest({ message: "x".repeat(contact.MAX_BODY_BYTES) })), { status: 413 });
  await assert.rejects(contact.readContactBody(jsonRequest(valid, { "Content-Length": String(contact.MAX_BODY_BYTES + 1) })), { status: 413 });
  const body = await contact.readContactBody(jsonRequest(valid));
  assert.equal(body.email, valid.email);
});

test("invalid API requests never reach the mail transport", async () => {
  const api = handler();
  assert.equal((await api.post(jsonRequest({ ...valid, message: "" }))).status, 400);
  assert.equal(api.sent.length, 0);
});

test("honeypot reports success without sending email", async () => {
  const api = handler();
  const response = await api.post(jsonRequest({ ...valid, website: "https://spam.example" }));
  assert.equal(response.status, 200);
  assert.equal(api.sent.length, 0);
});

test("missing SMTP configuration returns an actionable 503", async () => {
  const api = handler({ configured: false });
  const response = await api.post(jsonRequest(valid));
  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /email/);
  assert.equal(api.sent.length, 0);
});

test("API sends escaped HTML and plain text with a fixed sender and structured reply-to", async () => {
  const api = handler();
  const response = await api.post(jsonRequest({ ...valid, name: "<Alex>", message: "<b>Hello</b>\nNext line" }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(api.sent[0].from.address, "sender@example.com");
  assert.equal(api.sent[0].replyTo.address, valid.email);
  assert.match(api.sent[0].html, /&lt;Alex&gt;/);
  assert.match(api.sent[0].html, /&lt;b&gt;Hello&lt;\/b&gt;<br>Next line/);
  assert.match(api.sent[0].text, /<b>Hello<\/b>/);
  assert.equal(api.closed(), 1);
});

test("API returns Retry-After and does not send when rate-limited", async () => {
  const api = handler();
  for (let i = 0; i < 3; i += 1) assert.equal((await api.post(jsonRequest(valid))).status, 200);
  const response = await api.post(jsonRequest(valid));
  assert.equal(response.status, 429);
  assert.ok(Number(response.headers.get("Retry-After")) > 0);
  assert.equal(api.sent.length, 3);
});

test("SMTP failure does not expose private diagnostics and closes the transport", async () => {
  const api = handler({ fail: true });
  const response = await api.post(jsonRequest(valid));
  assert.equal(response.status, 502);
  assert.doesNotMatch(JSON.stringify(await response.json()), /Private SMTP/);
  assert.equal(api.closed(), 1);
});
