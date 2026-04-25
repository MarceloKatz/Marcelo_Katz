"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    const honeypot = formData.get("website");
    if (honeypot) {
      setStatus("ok");
      return;
    }

    try {
      // TODO: conectar a /api/contact (Resend, etc.)
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-sm text-ink/70 mb-1.5">
          Nombre y apellido <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-ink/20 bg-white px-4 py-2.5 focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-ink/70 mb-1.5">
          Tu email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-ink/20 bg-white px-4 py-2.5 focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-ink/70 mb-1.5">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full border border-ink/20 bg-white px-4 py-2.5 focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-ink/70 mb-1.5">
          Mensaje <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-ink/20 bg-white px-4 py-2.5 focus:outline-none focus:border-accent resize-y"
        />
      </div>

      {/* honeypot anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label>
          Si eres humano, deja este campo en blanco.
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink text-paper px-8 py-3 text-sm font-medium tracking-wider hover:bg-accent transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "ENVIANDO..." : "ENVIAR"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-green-700">¡Gracias! Tu mensaje fue enviado.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">
          Hubo un error al enviar. Probá de nuevo o escribime por WhatsApp.
        </p>
      )}
    </form>
  );
}
