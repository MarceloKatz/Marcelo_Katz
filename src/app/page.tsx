import Image from "next/image";
import Link from "next/link";
import { HOME, SITE } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* SECCIÓN SUPERIOR: Imagen y Cabecera */}
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-12">
        <div className="relative w-full lg:w-[50%] aspect-[4/5]">
          <Image
            src={HOME.heroImage}
            alt="Marcelo Katz"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Bloque de texto derecho ajustado a la imagen */}
        <div className="flex-1 flex flex-col items-center text-center space-y-8 pt-6">
          {/* Título: Solo KATZ en negrita, el resto normal */}
          <h1 className="text-xl sm:text-2xl font-normal leading-relaxed text-gray-900">
            <span className="font-bold">KATZ:</span> Empatía-Clown-Máscaras- Bufón- Oratoria- Teatro – Coaching.
          </h1>

          {/* Párrafo de intro: Más ligero y con buen aire */}
          <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-800 max-w-md">
            {HOME.intro}
          </p>

          {/* Botón: Color exacto y estilo */}
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7B61FF] text-white px-10 py-4 text-xs font-bold tracking-[0.2em] rounded-sm hover:bg-[#6a52e6] transition-colors uppercase"
          >
            ESCRIBIME!!
          </a>
        </div>
      </div>

      {/* BANNER PROMO: VACA MUERTA */}
      <div className="bg-[#111111] text-white rounded-md overflow-hidden my-16 flex flex-col md:flex-row items-stretch border border-gray-800 shadow-xl">
        <div className="relative w-full md:w-2/5 min-h-[300px] md:min-h-auto shrink-0">
          <Image
            src="/images/vaca-muerta/vaca-muerta-3.jpg"
            alt="Vaca Muerta - Espectáculo de Marcelo Katz"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-top"
          />
        </div>
        <div className="p-8 md:p-10 flex-1 flex flex-col justify-center space-y-4">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B61FF] uppercase">
            NUEVO ESTRENO · EN CARTEL
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide font-display">
            VACA MUERTA
          </h2>
          <p className="text-gray-400 text-xs tracking-wider uppercase font-medium">
            De Marcelo Katz y Checho Castrillón
          </p>
          <p className="text-gray-300 font-light text-sm leading-relaxed max-w-xl">
            Una maquinaria cómica, salvaje y desafiante sobre una sociedad que festeja mientras se derrumba. Un espectáculo de bufón que construye un universo deformado, feroz y profundamente humano.
          </p>
          <div className="text-xs text-gray-400 font-light space-y-1">
            <p><strong>Estreno:</strong> Sábado 20 de junio a las 19h</p>
            <p><strong>Funciones:</strong> Sábados a las 19h</p>
            <p><strong>Sala:</strong> Teatro Del Pueblo (Lavalle 3636)</p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/vaca-muerta"
              className="inline-block border border-white text-white text-center px-6 py-3 text-[10px] font-bold tracking-[0.15em] rounded-sm hover:bg-white hover:text-black transition-colors uppercase"
            >
              Ver Espectáculo
            </Link>
            <a
              href="https://publico.alternativateatral.com/entradas101150-vaca-muerta?o=14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7B61FF] text-white text-center px-6 py-3 text-[10px] font-bold tracking-[0.15em] rounded-sm hover:bg-[#6a52e6] transition-colors uppercase"
            >
              Comprar Entradas
            </a>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: Texto a ancho completo */}
      <div className="w-full space-y-8">
        <div className="space-y-6">
          {HOME.paragraphs.map((p, i) => (
            <p key={i} className="text-center text-lg font-light text-gray-800 max-w-4xl mx-auto leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Keywords finales */}
        <div className="pt-12">
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] leading-loose text-center uppercase border-t border-gray-100 pt-8 text-gray-900">
            {HOME.keywords}
          </p>
        </div>
      </div>
    </div>
  );
}
