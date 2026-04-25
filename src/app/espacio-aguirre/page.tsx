import Image from "next/image";
import { ESPACIO_AGUIRRE } from "@/lib/content";

export const metadata = { title: "Espacio Aguirre" };

export default function EspacioAguirrePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={ESPACIO_AGUIRRE.heroImage}
          alt="Espacio Aguirre"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <article className="prose-mk max-w-prose mx-auto">
        {ESPACIO_AGUIRRE.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="flex flex-col items-center gap-6 pt-6 border-t border-ink/10">
        <p className="text-sm text-ink/70">Si querés conocer Espacio Aguirre:</p>
        <a
          href={ESPACIO_AGUIRRE.external.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <Image
            src={ESPACIO_AGUIRRE.external.logo}
            alt={ESPACIO_AGUIRRE.external.label}
            width={300}
            height={120}
            className="h-auto w-auto"
          />
        </a>
      </div>
    </div>
  );
}
