import Image from "next/image";
import Link from "next/link";

const DOCENCIA = {
  title: "Entrenamientos para amateurs y profesionales",
  disciplines: [
    {
      label: "CLOWN",
      image: "/images/site_assets/FOTO_2-DOCENCIA.jpg",
      targetId: "entrenamiento-clown",
    },
    {
      label: "BUFÓN",
      image: "/images/site_assets/FOTO_3-DOCENCIA.jpg",
      targetId: "entrenamiento-bufon",
    },
    {
      label: "MÁSCARAS",
      image: "/images/site_assets/FOTO-4-DOCENCIA.jpg",
      targetId: "entrenamiento-mascaras",
    },
  ],
  schedules: [],
  trainings: [
    {
      id: "entrenamiento-clown",
      title: "Entrenamiento de Clown",
      body: "Una experiencia apasionante, vigorizante, intensa, transformadora y divertida. Nos reencuentra con la potencia del juego y nos permite compartirlo con el público y los compañeros de escena. Nos anima a mostrar quiénes somos y a generar un vínculo profundo con el público. Cuerpo, presente, ritmo, vulnerabilidad, empatía, impulso, contacto, emoción, risa, autenticidad.",
    },
    {
      id: "entrenamiento-bufon",
      title: "Entrenamiento de Bufón",
      body: "El placer de transgredir y denunciar indagando en la monstruosidad y bestialidad que habita en nosotros. Los bufones se burlan de todo y de todos, poniendo de manifiesto la absurdidad de las instituciones y las relaciones humanas. Todo esto, buscando al mismo tiempo la comicidad. Un entrenamiento intenso sobre la búsqueda del cuerpo-bufón (monstruos, deformes, bestias, personajes fantásticos). El ritmo, la urgencia (y supervivencia escénica), los quiebres y el contacto con el público. Una indagación profunda y divertida de las temáticas de conflictiva de lo humano, que tocan a cada alumno.",
      link: { label: "Video de entrenamiento de bufón", url: "https://www.youtube.com/watch?v=UuPba0ybilw" },
    },
    {
      id: "entrenamiento-mascaras",
      title: "Entrenamiento de Máscaras",
      body: "Un viaje sorprendente para descubrir otros personajes y otros cuerpos que habitan en uno. Un entrenamiento meticuloso para encontrar el cuerpo adecuado para cada máscara que se utiliza. Implica encontrar la unidad de ese nuevo rostro (la máscara) con el cuerpo, las dinámicas de movimiento y la personalidad que de ahí resulta y da vida al nuevo personaje.",
    },
  ],
  interview: { label: "Entrevista a M. Katz", url: "https://www.youtube.com/watch?v=hYzYAIZSAio" },
  gallery: [
    { image: "/images/site_assets/FOTO-N5-docencia.-Paris.-2016.jpg", caption: "Paris 2016" },
    { image: "/images/site_assets/FOTO-N6-docencia.-Barcelona-2018-1.jpg", caption: "Barcelona 2018" },
    { image: "/images/site_assets/FOTO-N7-docencia.-Clase-Magistral-en-Espacio-Aguirre.jpg", caption: "Clase Magistral en Espacio Aguirre 2013" },
    { image: "/images/site_assets/FOTO-N8-docencia.-Mar-del-Plata-2019.jpg", caption: "Mar del Plata 2019" },
    { image: "/images/site_assets/FOTO-N9-docencia.-Arrigorriaga-Espana-2014.jpg", caption: "Arrigorriaga, España 2014" },
    { image: "/images/site_assets/FOTO-N10-docencia.-Durango-Espana-2008.jpg", caption: "Durango, España 2008" },
    { image: "/images/site_assets/FOTO-N11-docencia.-Pamplona-2016.jpg", caption: "Pamplona 2016" },
    { image: "/images/site_assets/FOTO-N12-docencia.-Logrono-Espana-2013.jpg", caption: "Logroño, España 2013" },
    { image: "/images/site_assets/FOTO-N13-docencia.-Vitoria-Espana-2018.jpeg", caption: "Vitoria, España 2018" },
    { image: "/images/site_assets/FOTO-N14-docencia.-Santiago-de-Chile-2019.jpg", caption: "Santiago de Chile 2019" },
    { image: "/images/site_assets/CELCIT-2016.jpeg", caption: "CELCIT 2016" },
    { image: "/images/site_assets/FOTO-N16-docencia.-Parma-Italia-2016.jpg", caption: "Parma, Italia 2016" },
    { image: "/images/site_assets/FOTO-N17-docencia.-Zaragoza-2015.jpg", caption: "Zaragoza 2015" },
    { image: "/images/site_assets/bariloche-2017.jpeg", caption: "Bariloche 2017" },
    { image: "/images/site_assets/Cordoba-2011.jpeg", caption: "Córdoba 2011" },
    { image: "/images/site_assets/Universidad-de-Buenos-Aires-2012.jpg", caption: "Universidad de Buenos Aires 2012" },
  ],
};

export const metadata = { title: "Docencia" };

export default function DocenciaPage() {
  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] max-h-[70vh] overflow-hidden">
        <Image
          src="/images/docencia-hero.jpg"
          alt="Docencia Marcelo Katz"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {/* Header Section */}
        <header className="text-center space-y-10 group">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl tracking-[0.2em] font-medium uppercase text-ink">
              {DOCENCIA.title}
            </h1>
          </div>
          <Link 
            href="/agenda" 
            className="inline-block bg-accent text-white px-10 py-4 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Consultar fechas en “Agenda”
          </Link>
        </header>

        {/* Disciplines Section */}
        <section className="grid sm:grid-cols-3 gap-12 sm:gap-16 pt-10">
          {DOCENCIA.disciplines.map((d) => (
            <a 
              key={d.label} 
              href={`#${d.targetId}`}
              className="flex flex-col items-center space-y-8 group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden shadow-sm rounded-lg">
                <Image 
                  src={d.image} 
                  alt={d.label} 
                  fill 
                  sizes="(max-width: 640px) 100vw, 33vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-lg sm:text-xl tracking-[0.2em] font-medium uppercase text-ink/90 group-hover:text-accent transition-colors">
                {d.label}
              </h3>
            </a>
          ))}
        </section>

        {/* Interview Action */}
        <div className="text-center py-6">
          <a
            href={DOCENCIA.interview.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-10 py-4 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent/90 transition-all shadow-lg"
          >
            {DOCENCIA.interview.label}
          </a>
        </div>

        {/* Trainings Detail Section */}
        <section className="space-y-32 py-20 max-w-4xl mx-auto border-t border-ink/5">
          {DOCENCIA.trainings.map((t) => (
            <article key={t.title} id={t.id} className="text-center space-y-10 group scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                {t.title}
              </h2>
              <div className="space-y-8">
                <p className="text-sm sm:text-lg leading-[1.8] text-ink/80 max-w-3xl mx-auto font-light whitespace-pre-line px-4">
                  {t.body}
                </p>
                {t.link && (
                  <div className="pt-4">
                    <a 
                      href={t.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-accent text-white px-10 py-4 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent/90 transition-all shadow-md"
                    >
                      {t.link.label}
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* World Gallery Section */}
        <section className="pt-24 space-y-20 border-t border-ink/5">
          <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-ink">
            Talleres por el mundo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {DOCENCIA.gallery.map((g) => (
              <figure key={g.image} className="space-y-4 group">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink/5 shadow-sm">
                  <Image 
                    src={g.image} 
                    alt={g.caption} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
                </div>
                <figcaption className="text-sm font-medium text-ink/70 text-center tracking-wide group-hover:text-accent transition-colors">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
