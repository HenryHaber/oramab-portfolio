"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "success" | "error";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? profile.email;

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ??
  `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setError("Please fill in your name, email, and message.");
      return;
    }

    setStatus("sending");

    const body = new URLSearchParams({
      _subject: `[Portfolio Contact] ${subject || "New message"}`,
      _captcha: "false",
      _replyto: email.trim(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || data?.success !== "true") {
        throw new Error(
          data?.error ?? "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  const inputClass =
    "w-full rounded-sm border border-secondary/30 bg-white px-3 py-2 text-[12px] text-ink outline-none transition-colors placeholder:text-muted focus:border-primary";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold text-ink">
            Name
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold text-ink">
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-[11px] font-semibold text-ink">
          Subject
        </span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Project inquiry, collaboration, opportunity…"
          className={inputClass}
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-[11px] font-semibold text-ink">
          Message
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or opportunity."
          rows={5}
          className={`${inputClass} resize-y`}
        />
      </label>

      {status === "success" && (
        <p className="text-[11.5px] font-medium text-green-700">
          Message sent. I&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-[11.5px] font-medium text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm bg-primary px-5 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="text-[10px] text-muted">
        Prefer email directly?{" "}
        <a
          href={`mailto:${profile.email}`}
          className="underline decoration-muted/60 hover:text-primary"
        >
          {profile.email}
        </a>
      </p>
    </form>
  );
}