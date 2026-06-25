import Image from "next/image";
import Link from "next/link";
import { DOCENCIA } from "@/lib/content";

export const metadata = { title: "Docencia" };

export default function DocenciaPage() {
  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] max-h-[70vh] overflow-hidden">
        <Image
          src="/images/docencia-hero.jpg"
          alt="Docencia Marcelo Katz"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {/* Header Section */}
        <header className="text-center space-y-10 group">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl tracking-[0.2em] font-medium uppercase text-ink">
              {DOCENCIA.title}
            </h1>
            <p className="text-lg sm:text-2xl tracking-[0.15em] font-light uppercase text-ink/80">
              {DOCENCIA.subtitle}
            </p>
          </div>
          <Link 
            href="/agenda" 
            className="inline-block bg-accent text-white px-10 py-4 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Consultar fechas en “Agenda”
          </Link>
        </header>

        {/* Disciplines Section */}
        <section className="grid sm:grid-cols-3 gap-12 sm:gap-16 pt-10">
          {DOCENCIA.disciplines.map((d) => (
            <div key={d.label} className="flex flex-col items-center space-y-8">
              <div className="relative w-full aspect-[4/3] overflow-hidden group shadow-sm">
                <Image 
                  src={d.image} 
                  alt={d.label} 
                  fill 
                  sizes="(max-width: 640px) 100vw, 33vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-lg sm:text-xl tracking-[0.2em] font-medium uppercase text-ink/90">
                {d.label}
              </h3>
            </div>
          ))}
        </section>

        {/* Schedules Section */}
        <section className="space-y-24 py-10 max-w-5xl mx-auto">
          {DOCENCIA.schedules.map((s, idx) => (
            <div key={s.title} className="text-center space-y-8">
              <h2 className="text-xl sm:text-2xl tracking-[0.05em] font-bold text-ink">
                {s.title}
              </h2>
              <div className="space-y-4 px-4 max-w-4xl mx-auto">
                {s.items.reduce((acc: string[][], curr: string, i: number) => {
                  if (i % 2 === 0) {
                    acc.push([curr]);
                  } else {
                    acc[acc.length - 1].push(curr);
                  }
                  return acc;
                }, [] as string[][]).map((pair: string[], i: number) => (
                  <p key={i} className="text-sm sm:text-[15px] leading-relaxed text-ink/80 font-normal">
                    {pair.map((item: string, j: number) => (
                      <span key={j}>
                        <span className="font-bold underline decoration-1 underline-offset-4">{item.split(":")[0]}:</span>
                        {item.split(":")[1]}
                        {j < pair.length - 1 && <span className="mx-2 text-ink/30 italic">/</span>}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Footer/Contact Info */}
        <div className="text-center space-y-12 py-10 border-t border-ink/5">
          <div className="space-y-6">
            <Link 
              href="/agenda" 
              className="text-lg font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Consultar fechas en <span className="font-bold underline">“Agenda”</span>.
            </Link>
            <p className="text-sm sm:text-lg font-bold text-ink">
              Si precisás organizar un curso presencial u online con otro esquema diferente,{" "}
              <Link href="/contacto" className="underline underline-offset-4 hover:text-accent transition-colors">
                consultame
              </Link>.
            </p>
          </div>
          
          <div className="pt-6">
            <a
              href={DOCENCIA.interview.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white px-10 py-4 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent/90 transition-all shadow-lg"
            >
              {DOCENCIA.interview.label}
            </a>
          </div>
        </div>

        {/* Trainings Detail Section */}
        <section className="space-y-32 py-20 max-w-4xl mx-auto border-t border-ink/5">
          {DOCENCIA.trainings.map((t) => (
            <article key={t.title} className="text-center space-y-10 group">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                {t.title}
              </h2>
              <div className="space-y-8">
                <p className="text-sm sm:text-lg leading-[1.8] text-ink/80 max-w-3xl mx-auto font-light whitespace-pre-line px-4">
                  {t.body}
                </p>
                {t.link && (
                  <div className="pt-4">
                    <a 
                      href={t.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-accent text-white px-10 py-4 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent/90 transition-all shadow-md"
                    >
                      {t.link.label}
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* World Gallery Section */}
        <section className="pt-24 space-y-20 border-t border-ink/5">
          <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-ink">
            Talleres por el mundo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {DOCENCIA.gallery.map((g) => (
              <figure key={g.image} className="space-y-4 group">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink/5 shadow-sm">
                  <Image 
                    src={g.image} 
                    alt={g.caption} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
                </div>
                <figcaption className="text-sm font-medium text-ink/70 text-center tracking-wide group-hover:text-accent transition-colors">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
