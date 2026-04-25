import Image from "next/image";
import { ESPECTACULOS } from "@/lib/content";

export const metadata = { title: "Espectáculos" };

export default function EspectaculosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="text-center">
        <h1 className="text-4xl mb-2">ESPECTÁCULOS</h1>
      </header>

      <section className="text-center bg-ink/5 py-8 px-6">
        <h2 className="text-xl tracking-wider mb-2">{ESPECTACULOS.enCartel.title}</h2>
        <p className="text-ink/80">{ESPECTACULOS.enCartel.body}</p>
      </section>

      <section className="max-w-prose mx-auto prose-mk">
        <h2 className="text-2xl mb-4">{ESPECTACULOS.intro.title}</h2>
        <p>{ESPECTACULOS.intro.body}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl text-center">CRÍTICAS</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ESPECTACULOS.reviews.map((r, i) => (
            <blockquote
              key={i}
              className="border-l-2 border-accent pl-5 py-2 italic text-ink/85 text-sm leading-relaxed"
            >
              <p>“{r.quote}”</p>
              <footer className="mt-3 not-italic text-xs text-ink/60 tracking-wider">
                — {r.source}
                {r.author ? ` · ${r.author}` : ""}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-6">
        {ESPECTACULOS.images.map((img) => (
          <figure key={img.src} className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image src={img.src} alt={img.caption} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
            </div>
            <figcaption className="text-xs text-ink/60 text-center italic">{img.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="max-w-prose mx-auto text-center">
        <h2 className="text-2xl mb-4">{ESPECTACULOS.awards.title}</h2>
        <ul className="space-y-2 text-ink/80">
          {ESPECTACULOS.awards.items.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="prose-mk">
          <h2 className="text-2xl mb-4">{ESPECTACULOS.actor.title}</h2>
          <p>{ESPECTACULOS.actor.body}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {ESPECTACULOS.actor.images.map((img) => (
            <figure key={img.src} className="space-y-2">
              <div className="relative aspect-[3/4]">
                <Image src={img.src} alt={img.caption} fill sizes="25vw" className="object-cover" />
              </div>
              <figcaption className="text-xs text-ink/60 text-center italic">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="prose-mk max-w-prose mx-auto">
        <h2 className="text-2xl mb-4">{ESPECTACULOS.director.title}</h2>
        <p>{ESPECTACULOS.director.body}</p>
      </section>
    </div>
  );
}
