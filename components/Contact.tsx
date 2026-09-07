"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { contactEmail, socialLinks } from "@/constants/constant";
import { CONTACT_LIMITS } from "@/app/libs/contact";
import SectionTitle from "./SectionTitle";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const sending = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sending.current = true;
    setStatus("sending");
    setErrorMessage("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: data.get("user_name"),
          email: data.get("user_email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const result: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const detail = result && typeof result === "object" && "error" in result && typeof result.error === "string" ? result.error : "";
        throw new Error(detail || "The form is unavailable. Please use the email link below.");
      }
      if (!result || typeof result !== "object" || !("success" in result) || result.success !== true) {
        throw new Error("We couldn't confirm your message was sent. Please use the email link below.");
      }
      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error && error.name === "AbortError"
        ? "The request timed out. Delivery couldn't be confirmed; please contact me by email."
        : error instanceof Error ? error.message : "Something went wrong. Please contact me by email.");
    } finally {
      window.clearTimeout(timeout);
      sending.current = false;
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-shell">
      <SectionTitle id="contact-title" title="Let's work together"
        description="I'm open to full-time, part-time, contract, and freelance opportunities in DevOps and cloud engineering." />
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-5 leading-relaxed text-textDark">
          <p>Have a role or project in mind? Send a message with a little context and the best way to reach you.</p>
          <a className="block break-words text-textGreen underline underline-offset-4" href={"mailto:" + contactEmail}>{contactEmail}</a>
          <a className="inline-flex min-h-11 items-center text-textGreen underline underline-offset-4" href={socialLinks[1].href}
            target="_blank" rel="noopener noreferrer">Connect on LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <form onSubmit={handleSubmit} aria-busy={status === "sending"} className="surface">
          <fieldset disabled={status === "sending"} className="min-w-0 space-y-5">
            <legend className="sr-only">Send Ahmed a message</legend>
            <div className="grid gap-5 mdl:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">Your name (required)</label>
                <input id="name" name="user_name" type="text" autoComplete="name" required maxLength={CONTACT_LIMITS.name} className="contactInput" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">Your email (required)</label>
                <input id="email" name="user_email" type="email" autoComplete="email" required maxLength={CONTACT_LIMITS.email} className="contactInput" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject (required)</label>
              <input id="subject" name="subject" type="text" required maxLength={CONTACT_LIMITS.subject} className="contactInput" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">Message (required)</label>
              <textarea id="message" name="message" rows={6} required maxLength={CONTACT_LIMITS.message}
                aria-describedby="message-help" className="contactInput resize-y" />
              <p id="message-help" className="mt-2 text-sm text-textDark">Up to 5,000 characters.</p>
            </div>
            <div hidden>
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" className="button-primary w-full disabled:cursor-wait disabled:opacity-60 mdl:w-auto">
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </fieldset>
          <div role="status" aria-live="polite" aria-atomic="true" className="mt-4 text-sm">
            {status === "success" && <p className="text-textGreen">Message sent successfully. Thank you for getting in touch!</p>}
            {status === "sending" && <p className="text-textDark">Your message is being sent.</p>}
          </div>
          {status === "error" && <p role="alert" className="mt-4 text-sm text-red-300">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}
