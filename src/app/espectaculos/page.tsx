import Image from "next/image";
import Link from "next/link";
import EspectaculosCarousel from "@/components/EspectaculosCarousel";

const ESPECTACULOS = {
  introParagraphs: [
    "La impronta de mis espectáculos nace del cruce entre el humor, el teatro físico y una fuerte búsqueda visual.",
    "A veces ese universo es poético y onírico; otras, feroz, desmesurado y satírico.",
    "Me interesa que la risa no sea un fin en sí mismo, sino una forma de mirar la realidad, abrir preguntas y generar una experiencia que permanezca en el espectador.",
    "Recibí diversos premios y nominaciones del medio teatral: Premios ACE (Críticos de Espectáculos), María Guerrero, Getea, Atina, Pregonero, Teatro XXI, entre otros.",
    "Estrené como director en reconocidos teatros de Buenos Aires: Teatro Municipal General San Martín, Teatro Nacional Cervantes, C.C. Konex, Centro Cultural de la Cooperación, Teatro Metropolitan, Teatro Regina, La Trastienda y Centro Cultural Recoleta, entre otros.",
    "Mis espectáculos se presentaron en Argentina, Uruguay, Chile, Perú, Colombia, España, Estados Unidos, Dinamarca y Francia.",
  ],
  reviews: [
    { source: "La Nación", author: "Jazmín Carbonell", quote: "Marcelo Katz nos sorprende gratamente. En “Top, top, top” está impecable y hace honor a su sobresaliente trayectoria, con una ternura que emociona. Humor sano e inteligente." },
    { source: "El Diario de Ibiza", quote: "Descomunal actuación de Marcelo Katz. Ha llevado a la platea de la risa al llanto con sutileza y maestría." },
    { source: "Radio América", author: "Romina Pomponio", quote: "Una obra entrañable, alegre y emotiva. Un personaje compuesto exquisitamente por Marcelo Katz. Una sucesión ininterrumpida de momentos realmente mágicos." },
    { source: "Clarín", author: "Laura Falcoff", quote: "Aguas es un espectáculo delicioso, construido desde la simplicidad." },
    { source: "Página 12", author: "Silvina Friera", quote: "Con un encantador arsenal de efectos cómicos y oníricos, la dirección de Katz transforma la solemnidad de la ópera “Guillermo Tell” en una aventura moderna y fascinante." },
    { source: "Mirada y Sentido", author: "Patricia Lanatta", quote: "Nuevamente el director Marcelo Katz nos asombra con su talento para enlazar lo cómico y lo onírico y genera cuadros fantásticos. Consigue que el espectador se espeje en ese sueño a través de escenas hilvanadas por la puntada del humor, seguida de la imagen poderosa. Hay belleza." },
  ],
  awards: {
    title: "PREMIOS Y NOMINACIONES",
    items: [
      "Premio ACE (Asociación de Críticos de Espectáculos)",
      "Premio Teatro XXI (del grupo de investigación teatral Getea)",
      "Premio Teatros del Mundo (de la Universidad de Buenos Aires)",
      "Premio María Guerrero",
      "Premio Pregonero (de la Fundación El Libro)",
      "Premio CTBA a la Creación y Producción de Artes Escénicas en Salas del Circuito Independiente 2021",
      "Entre otros.",
    ],
  },
  actor: {
    title: "ACTOR",
    body: "Mi primera actuación profesional fue a los 18 años, en un espectáculo en homenaje a Kafka producido por la embajada de Austria en Argentina. A los 23 años fui seleccionado para integrar los elencos del Teatro Municipal General San Martín de Buenos Aires. Integré la compañía de Danza de Teresa Duggan y actué en espectáculos de circo, teatro y clown en Argentina y en varios países de América y Europa.",
    image: {
      src: "/images/site_assets/FOTO-N°10-Espectáculos.-Elemental-2006.jpg",
      caption: "Elemental (2006)",
    },
  },
  director: {
    title: "DIRECTOR",
    body: "En 1993 fundé La Trup, primera compañía de nuevo circo de Argentina. A cargo de este grupo, que expandió el arte circense en Argentina, monté espectáculos durante 7 años. Desde el 97 dirigí más de 50 espectáculos de teatro, clown, máscaras, música y circo. Tanto producciones propias como de otras compañías.",
    image: {
      src: "/images/site_assets/FOTO-N°-8-espectáculos.-Aguas-2008.jpg",
      caption: "Aguas (2008)",
    },
  },
};

export const metadata = { title: "Espectáculos" };

export default function EspectaculosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="text-center">
        <h1 className="text-4xl mb-2 font-bold tracking-wider text-gray-900">ESPECTÁCULOS</h1>
      </header>

      {/* SECCIÓN PRINCIPAL: Texto (Izquierda) + Carrousel (Derecha) */}
      <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Columna Texto */}
        <div className="lg:col-span-6 space-y-5 text-gray-800 text-base sm:text-lg leading-relaxed font-light">
          {ESPECTACULOS.introParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Columna Imagen / Carrousel espectáculos actuales */}
        <div className="lg:col-span-6 w-full">
          <div className="mb-2 text-center lg:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-[#7B61FF] uppercase">
              Espectáculos Actuales
            </span>
          </div>
          <EspectaculosCarousel />
        </div>
      </section>

      {/* SECCIÓN CRÍTICAS (Preservada) */}
      <section className="space-y-8 pt-6 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-center tracking-wide text-gray-900">CRÍTICAS</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ESPECTACULOS.reviews.map((r, i) => (
            <blockquote
              key={i}
              className="border-l-2 border-[#7B61FF] pl-5 py-2 italic text-gray-700 text-sm leading-relaxed bg-gray-50/50 rounded-r-md p-4"
            >
              <p>“{r.quote}”</p>
              <footer className="mt-3 not-italic text-xs text-gray-500 tracking-wider font-semibold">
                — {r.source}
                {r.author ? ` · ${r.author}` : ""}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* PREMIOS Y NOMINACIONES */}
      <section className="max-w-prose mx-auto text-center space-y-4 pt-6 border-t border-gray-100">
        <h2 className="text-2xl font-bold tracking-wide text-gray-900">{ESPECTACULOS.awards.title}</h2>
        <ul className="space-y-2 text-gray-700 text-sm sm:text-base font-light">
          {ESPECTACULOS.awards.items.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      {/* SECCIÓN ACTOR Y DIRECTOR (1 Imagen cada uno, equilibrado) */}
      <section className="grid md:grid-cols-2 gap-8 items-stretch pt-6 border-t border-gray-100">
        {/* Bloque Actor */}
        <div className="flex flex-col justify-between space-y-6 bg-gray-50/60 p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-wide text-gray-900">{ESPECTACULOS.actor.title}</h2>
            <p className="leading-relaxed font-light text-gray-800 text-sm sm:text-base">{ESPECTACULOS.actor.body}</p>
          </div>
          <figure className="space-y-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src={ESPECTACULOS.actor.image.src}
                alt={ESPECTACULOS.actor.image.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center italic">{ESPECTACULOS.actor.image.caption}</figcaption>
          </figure>
        </div>

        {/* Bloque Director */}
        <div className="flex flex-col justify-between space-y-6 bg-gray-50/60 p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-wide text-gray-900">{ESPECTACULOS.director.title}</h2>
            <p className="leading-relaxed font-light text-gray-800 text-sm sm:text-base">{ESPECTACULOS.director.body}</p>
          </div>
          <figure className="space-y-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src={ESPECTACULOS.director.image.src}
                alt={ESPECTACULOS.director.image.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-xs text-gray-500 text-center italic">{ESPECTACULOS.director.image.caption}</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}


