import Image from "next/image";

const BIO = {
  heroImage: "/images/site_assets/BIO.jpg",
  title: "BIO",
  paragraphs: [
    "Desde 1985 desarrollo un recorrido como director, actor, docente y creador escénico. Mi trabajo cruza el humor, el teatro físico y una fuerte búsqueda visual para crear experiencias que divierten, conmueven e invitan a mirar la realidad desde otra perspectiva. A lo largo de los años investigué especialmente el clown, el bufón y las máscaras, lenguajes que siguen siendo una parte fundamental de mi trabajo.",
    "Fui actor del Elenco del Teatro Municipal General San Martín de Buenos Aires entre 1987 y 1992.",
    "Bailé con la compañía de danza de Teresa Duggan.",
    "En 1993 fundé *La Trup*, una de las primeras compañías de Nuevo Circo de la Argentina.",
    "En 1999 creé Espacio Aguirre, primer teatro y centro de formación especializado en clown, bufón y máscaras de Latinoamérica. Allí se formaron más de *4.500 alumnos* de distintos países.",
    "Como director estrené espectáculos en teatros emblemáticos de Buenos Aires, entre ellos el Teatro Municipal General San Martín, el Teatro Nacional Cervantes, el Teatro Ópera, el Metropolitan, el Broadway, La Trastienda, Konex, el Centro Cultural de la Cooperación, el Teatro Regina, el Teatro del Pueblo, El Camarín de las Musas, Timbre 4, entre otros.",
    "Recibí diversos premios y nominaciones del medio teatral, entre ellos los Premios *ACE*, *María Guerrero*, *Teatros del Mundo* (Universidad de Buenos Aires), *Teatro XXI* (GETEA), *Pregonero* (Fundación El Libro), *ATINA* y otros.",
    "Fui docente en la Universidad del Salvador, en la Escuela de Danza de Julio Bocca y en el Teatro Municipal General San Martín. Actualmente integro el equipo docente del *CELCIT (Centro Latinoamericano de Creación e Investigación Teatral)*.",
    "Dicté cursos y presenté espectáculos en numerosos países de América y Europa, entre ellos España, Francia, Italia, Portugal, Suiza, Dinamarca, Estados Unidos, Uruguay, Paraguay, México, Costa Rica y Chile, además de distintas ciudades de la Argentina.",
    "Fui jurado de los Premios Nacionales de Teatro, designado por el Ministerio de Cultura de la Nación.",
    "Recibí la Medalla al Fair Play otorgada por el Comité Olímpico Internacional y el Comité Olímpico Argentino.",
    "Desde 2005 entreno a científicos, empresarios, profesionales y organizaciones en expresividad y empatía.",
    "Coordino grupos de *Juego, Salud y Crecimiento*, una propuesta que traslada al desarrollo humano las herramientas creativas y expresivas que investigo desde hace más de cuarenta años en el teatro.",
  ],
};

export const metadata = { title: "Bio — Marcelo Katz" };

// Helper para formatear texto con énfasis (*texto*)
function FormattedParagraph({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <p>
      {parts.map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i} className="font-semibold italic text-gray-900">{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </p>
  );
}

export default function BioPage() {
  return (
    <div className="bg-white">
      {/* IMAGEN HERO A ANCHO COMPLETO (PANTALLA COMPLETA COMO EN DOCENCIA) */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] max-h-[70vh] overflow-hidden">
        <Image
          src={BIO.heroImage}
          alt="Marcelo Katz — Bio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* CONTENIDO DE LA PÁGINA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.2em] text-gray-900 uppercase">
            {BIO.title}
          </h1>
        </header>

        <article className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed font-light">
          {BIO.paragraphs.map((p, i) => (
            <FormattedParagraph key={i} text={p} />
          ))}
        </article>
      </div>
    </div>
  );
}
