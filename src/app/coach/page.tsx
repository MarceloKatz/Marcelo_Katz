import Image from "next/image";
import { COACH } from "@/lib/content";

export const metadata = { title: "Coach" };

export default function CoachPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="text-center max-w-prose mx-auto">
        <h1 className="text-3xl sm:text-4xl mb-6">{COACH.title}</h1>
      </header>

      <section className="prose-mk max-w-prose mx-auto">
        <p>{COACH.intro}</p>
        <p>{COACH.clients}</p>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        {COACH.images.map((src, i) => (
          <div key={i} className="relative aspect-[4/3]">
            <Image src={src} alt={`Entrenamiento ${i + 1}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
          </div>
        ))}
      </section>

      <section className="max-w-prose mx-auto">
        <h2 className="text-2xl mb-6 text-center">{COACH.benefits.title}</h2>
        <ul className="space-y-4">
          {COACH.benefits.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-ink/85 leading-relaxed">
              <span className="text-accent shrink-0 mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl text-center mb-8">Algunas opiniones sobre el entrenamiento</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {COACH.testimonials.map((t) => (
            <blockquote key={t.author} className="bg-ink/5 p-6 space-y-4">
              <p className="text-sm italic text-ink/85 leading-relaxed">“{t.quote}”</p>
              <footer className="text-xs">
                <p className="font-medium text-ink">{t.author}</p>
                <p className="text-ink/60">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
