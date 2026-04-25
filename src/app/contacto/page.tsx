import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/content";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl">CONTACTO</h1>
        <a
          href={`mailto:${SITE.email}`}
          className="text-accent hover:text-ink underline underline-offset-4"
        >
          {SITE.email}
        </a>
        <p>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-ink/70 hover:text-accent"
          >
            WhatsApp ↗
          </a>
        </p>
      </header>

      <ContactForm />
    </div>
  );
}
