import CoachTabs from "@/components/CoachTabs";

const COACH = {
  title: "Personas y Organizaciones",
  intro:
    "Un método distinto para un viejo objetivo: comunicarse mejor. El cuerpo, la escucha, la palabra, el presente, el ritmo, la respiración y el uso del abanico de colores que habitan en uno. La precisión y la espontaneidad. Un método propio en el que vuelco la experiencia obtenida desde 1980, actuando y dirigiendo en escenarios nacionales e internacionales, y enseñando en Argentina, USA, Francia, España, Italia, Suiza, Dinamarca, Portugal, Chile, México, Uruguay y en mi escuela en Buenos Aires por la que han pasado más de 4000 alumnos amateurs y profesionales. Un entrenamiento sobre eficiencia en las relaciones, la oratoria, la empatía, y la felicidad laboral y personal.",
  clients:
    "Entrené a destacados científicos, empresarios y políticos como Martín Lousteau y Marco Lavagna, entre otros.",
  images: [
    "/images/coach/coach-1.jpg",
    "/images/coach/coach-2.jpg",
  ],
  benefits: {
    title: "Qué permite el entrenamiento",
    items: [
      "Aprender a captar y sostener el interés del auditorio o los interlocutores. Evitar aburrir y adaptarse a las reacciones del auditorio.",
      "Comprender la influencia del lenguaje corporal. Trabajar con el cuerpo y la mirada para tener una comunicación expresiva que modifique al auditorio y a los interlocutores.",
      "Aceptar quiénes somos y, desde nuestra esencia y personalidad, conectar con nuestros interlocutores.",
      "Aprender a planificar y preparar una presentación oral para que los conceptos a transmitir lleguen con efectividad.",
      "Aprender a armar las exposiciones, combinando partes preparadas y otras improvisadas sobre ideas preconcebidas.",
      "Trabajar el miedo escénico y la desinhibición. La respiración. Los imprevistos.",
      "Aprender a prepararse para la exposición. Los minutos previos a enfrentar al público.",
    ],
  },
  testimonials: [
    {
      author: "Matías Tombolini",
      role: "Vicepresidente del Banco Nación",
      quote:
        "Experiencia inigualable y diferente a todo lo que conocía. Me dio herramientas innovadoras para enfrentar audiencias diversas. Cada sesión fue una coctelera de emociones inesperadas que me permitieron abordar nuevas perspectivas y estrategias.",
    },
    {
      author: "Valeria Fernández",
      role: "Gerenta de Marketing de Motorola",
      quote:
        "Me sorprendió lo novedoso del enfoque. Me abrió nuevas posibilidades profesionales e incluso desbordó lo laboral. Una experiencia sumamente gratificante.",
    },
    {
      author: "Viviana Schilkrut",
      role: "Consultora en Recursos Humanos",
      quote:
        "Marcelo posee una lectura e interpretación de la corporalidad impresionantes. He visto a distintos directores y gerentes profundizar su expresividad y emocionalidad en la interacción con otras personas. Una experiencia muy enriquecedora.",
    },
  ],
};

export const metadata = { title: "Personas y Organizaciones" };

export default function CoachPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <header className="text-center max-w-prose mx-auto">
        <h1 className="text-3xl sm:text-4xl mb-4 font-bold tracking-wider text-gray-900 uppercase">
          {COACH.title}
        </h1>
      </header>

      {/* COMPONENTE CON LAS 2 SOLAPAS: Juego, salud y crecimiento / Expresividad y empatía */}
      <CoachTabs expresividadData={COACH} />
    </div>
  );
}

