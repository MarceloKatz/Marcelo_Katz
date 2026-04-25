import Image from "next/image";
import Link from "next/link";
import { DOCENCIA } from "@/lib/content";

export const metadata = { title: "Docencia" };

export default function DocenciaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl">{DOCENCIA.title}</h1>
        <p className="text-ink/70 italic">{DOCENCIA.subtitle}</p>
        <Link href="/agenda" className="inline-block text-accent hover:text-ink underline underline-offset-4">
          Consultar fechas en “Agenda”
        </Link>
      </header>

      <section className="grid sm:grid-cols-3 gap-6">
        {DOCENCIA.disciplines.map((d) => (
          <figure key={d.label} className="space-y-3">
            <div className="relative aspect-square">
              <Image src={d.image} alt={d.label} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
            <figcaption className="text-center text-sm font-medium tracking-widest text-ink/70">
              {d.label}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {DOCENCIA.schedules.map((s) => (
          <div key={s.title} className="space-y-3">
            <h2 className="text-lg font-display">{s.title}</h2>
            <ul className="space-y-2 text-sm text-ink/80">
              {s.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <p className="text-center text-sm text-ink/70 italic">
        Si precisás organizar un curso presencial u online con otro esquema diferente,{" "}
        <Link href="/contacto" className="text-accent underline underline-offset-4">
          consultame
        </Link>
        .
      </p>

      <div className="text-center">
        <a
          href={DOCENCIA.interview.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-ink/30 px-6 py-3 text-sm tracking-wider hover:bg-ink hover:text-paper transition-colors"
        >
          ▶ {DOCENCIA.interview.label}
        </a>
      </div>

      <hr className="border-ink/10" />

      <section className="space-y-10 max-w-prose mx-auto prose-mk">
        {DOCENCIA.trainings.map((t) => (
          <article key={t.title}>
            <h2 className="text-xl mb-3">{t.title}</h2>
            <p>{t.body}</p>
            {t.link && (
              <p>
                <a href={t.link.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                  ▶ {t.link.label}
                </a>
              </p>
            )}
          </article>
        ))}
      </section>

      <section>
        <h2 className="text-2xl text-center mb-8">Talleres por el mundo</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {DOCENCIA.gallery.map((g) => (
            <figure key={g.image} className="space-y-2">
              <div className="relative aspect-[4/3]">
                <Image src={g.image} alt={g.caption} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
              </div>
              <figcaption className="text-xs text-ink/60 text-center">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
