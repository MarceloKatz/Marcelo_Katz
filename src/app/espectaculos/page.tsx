import Image from "next/image";
import Link from "next/link";
import { ESPECTACULOS } from "@/lib/content";

export const metadata = { title: "Espectáculos" };

export default function EspectaculosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="text-center">
        <h1 className="text-4xl mb-2">ESPECTÁCULOS</h1>
      </header>

      <section className="bg-gray-50/50 py-10 px-8 rounded-md border border-gray-100 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto text-left">
        <div className="relative w-full md:w-1/3 aspect-[4/3] shrink-0 overflow-hidden rounded-sm shadow-md">
          <Image
            src="/images/vaca-muerta/vaca-muerta-4.jpg"
            alt="VACA MUERTA en cartel"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <span className="inline-block bg-[#7461e8] text-white px-3 py-1 text-[9px] font-bold tracking-widest uppercase rounded-full">
            EN CARTEL
          </span>
          <h2 className="text-2xl font-bold tracking-wide font-display">VACA MUERTA</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Una maquinaria cómica, salvaje y desafiante sobre una sociedad que festeja mientras se derrumba. Un espectáculo de bufón de Marcelo Katz y Checho Castrillón.
          </p>
          <p className="text-xs text-gray-500">
            <strong>Estreno:</strong> Sábado 20 de junio a las 19h<br/>
            <strong>Funciones:</strong> Sábados a las 19h en Teatro Del Pueblo (Lavalle 3636)
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/vaca-muerta"
              className="inline-block border border-[#7461e8] text-[#7461e8] px-5 py-2.5 text-[10px] font-bold tracking-wider rounded-sm hover:bg-[#7461e8] hover:text-white transition-all uppercase"
            >
              Ver Ficha y Galería
            </Link>
            <a
              href="https://publico.alternativateatral.com/entradas101150-vaca-muerta?o=14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7461e8] text-white px-5 py-2.5 text-[10px] font-bold tracking-wider rounded-sm hover:bg-[#624edb] transition-all uppercase"
            >
              Comprar Entradas
            </a>
          </div>
        </div>
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
