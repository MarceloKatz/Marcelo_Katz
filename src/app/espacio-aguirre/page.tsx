import Image from "next/image";

const ESPACIO_AGUIRRE = {
  heroImage: "/images/site_assets/espacioAguirre.jpg",
  paragraphs: [
    "Después de 15 años de deambular con mis clases y espectáculos, a fines de 1999 concreté el sueño de un espacio propio. Una vieja fábrica de juguetes ubicada en el barrio de Villa Crespo, en Buenos Aires, se convirtió en un teatro y una escuela de clown, bufón y máscaras.",
    "El teatro tiene capacidad para 100 espectadores. Aloja algunas de mis producciones, las de la escuela y producciones invitadas.",
    "La escuela cuenta con un staff de 10 docentes, un coordinador pedagógico y mi dirección. Con ese equipo a lo largo de más de 25 años hemos creado una línea pedagógica única. Por las 3 salas de Espacio Aguirre han pasado más de 4500 alumnos argentinos y extranjeros, amateurs y profesionales que ingresaron a destacadas compañías nacionales e internacionales.",
    "Cada año unos 350 alumnos entrenan en los cursos anuales, divididos en 5 niveles de experiencia. Además de su entrenamiento comparten producciones de muestras y espectáculos, charlas, campamentos, encuentros con alumnos de otros grupos y una serie de actividades que generan una hermosa red de humanidad y docencia. Todo esto hace del pasaje por la escuela, una experiencia vital y única.",
    "Además de los cursos anuales, durante el año hay cursos intensivos.",
    "Decenas de profesores transmiten en Argentina y en Latinoamérica lo que han aprendido en Espacio Aguirre.",
  ],
  external: {
    label: "Espacio Aguirre",
    url: "https://espacioaguirre.com.ar/",
    logo: "/images/site_assets/Espaguirre.png",
  },
};

export const metadata = { title: "Espacio Aguirre" };

export default function EspacioAguirrePage() {
  return (
    <div className="bg-white w-full">
      {/* Full-width Hero Image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[80vh] overflow-hidden">
        <Image
          src={ESPACIO_AGUIRRE.heroImage}
          alt="Espacio Aguirre"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
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
    </div>
  );
}
