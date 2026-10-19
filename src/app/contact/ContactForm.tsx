"use client";
import { useState } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const field =
    "mt-2 w-full rounded-xl border border-forest-900/25 bg-white px-4 py-3 text-base focus:border-leaf";
  return sent ? (
    <p role="status" className="rounded-2xl bg-mist p-6 text-forest-900">
      Thanks. Your email app should have opened with your message. If it did
      not, write to {site.contact.email}.
    </p>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const body = `Name: ${d.get("name")}\nPhone: ${d.get("phone")}\n\n${d.get("message")}`;
        window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(String(d.get("subject") || "Enquiry"))}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
      className="space-y-5"
    >
      <label className="block font-medium">
        Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block font-medium">
        Phone
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="block font-medium">
        Subject
        <input name="subject" className={field} />
      </label>
      <label className="block font-medium">
        Message
        <textarea name="message" required rows={5} className={field} />
      </label>
      <button className="min-h-12 w-full rounded-full bg-forest-900 px-8 font-semibold text-paper transition-colors hover:bg-forest-700 sm:w-auto">
        Send message
      </button>
    </form>
  );
}
