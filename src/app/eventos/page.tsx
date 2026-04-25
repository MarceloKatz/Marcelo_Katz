import Image from "next/image";
import { EVENTOS } from "@/lib/content";

export const metadata = { title: "Eventos" };

export default function EventosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <header className="text-center max-w-prose mx-auto">
        <h1 className="text-3xl sm:text-4xl">{EVENTOS.title}</h1>
      </header>

      <section className="grid sm:grid-cols-3 gap-4">
        {EVENTOS.galleryTop.map((img) => (
          <figure key={img.src} className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image src={img.src} alt={img.caption} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
            <figcaption className="text-xs text-ink/60 text-center italic">{img.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="prose-mk max-w-prose mx-auto">
        <p>{EVENTOS.body}</p>
        <p className="font-medium">{EVENTOS.clients}</p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {EVENTOS.galleryBottom.map((img) => (
          <figure key={img.src} className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image src={img.src} alt={img.caption} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover" />
            </div>
            <figcaption className="text-xs text-ink/60 text-center italic">{img.caption}</figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}
