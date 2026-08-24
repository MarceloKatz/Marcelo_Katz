import Image from "next/image";
import Link from "next/link";

const SITE = {
  name: "Marcelo Katz",
  email: "marcelokatz@marcelokatz.com.ar",
  whatsapp: "5491136317717",
  whatsappLink: "https://wa.me/5491136317717",
  logo: "https://marcelokatz.com.ar/wp-content/uploads/2018/09/cropped-web-MK-template2-03.png",
  logoFooter: "https://marcelokatz.com.ar/wp-content/uploads/2019/07/logoFooter-300x208.png",
};

const HOME = {
  heroImage: "https://marcelokatz.com.ar/wp-content/uploads/2021/10/FOTO_HOME.jpeg",
  headline: "KATZ: Empatía-Clown-Máscaras-Bufón-Oratoria-Teatro-Coaching.",
  intro:
    "Puentes invisibles que unen a las personas consigo mismas y con los demás. El placer de compartir y contactar. Convocar a la risa y al juego.",
  paragraphs: [
    "Estoy ligado a las artes escénicas como actor, director, guionista y profesor.",
    "Trabajo sobre el humor, la espontaneidad, la empatía y el lenguaje verbal y no verbal.",
    "En teatro dirijo mis propias producciones y las de otras compañías.",
    "Como docente trabajo con amateurs y profesionales en Argentina, Latinoamérica y Europa.",
    "Diseño y dirijo eventos artísticos para empresas, instituciones y organismos públicos.",
    "Como coach trabajo con profesionales, políticos y empresarios sobre escuchatoria, contacto, oratoria, eficiencia en las relaciones y felicidad laboral y personal.",
  ],
  keywords:
    "EMPATÍA-CONTACTO-EMOCIÓN-CUERPO-PASIÓN-RISA-IMPULSO-DISPONIBILIDAD-PRESENTE-VACÍO-ESCUCHA-INTENSIDAD-URGENCIA-CALMA",
};

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
