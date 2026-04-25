
import Image from "next/image";
import { HOME, SITE } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* SECCIÓN SUPERIOR: Imagen y Cabecera lateral */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
        <div className="relative w-full lg:w-[55%] aspect-[4/5]">
          <Image
            src={HOME.heroImage}
            alt="Marcelo Katz"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col items-center text-center space-y-6 pt-4">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            <strong>KATZ:</strong>{" "}Empatía-Clown-Máscaras- Bufón- Oratoria-Teatro {"-"} Coaching.
          </h1>

          <p className="text-base leading-relaxed">
            {HOME.intro}
          </p>

          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-8 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition-opacity"
          >
            ESCRIBIME!!
          </a>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: Texto a ancho completo (Debajo de la foto) */}
      <div className="w-full space-y-6">
        <div className="space-y-4">
          {HOME.paragraphs.map((p, i) => (
            <p key={i} className="text-center text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <p className="text-xs sm:text-sm font-bold tracking-widest leading-loose pt-8 text-center uppercase border-t border-gray-100 mt-8">
          {HOME.keywords}
        </p>
      </div>
    </div>
  );
}
