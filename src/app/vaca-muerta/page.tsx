import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Vaca Muerta — Un espectáculo de bufón",
  description: "Una maquinaria cómica, salvaje y desafiante sobre una sociedad que festeja mientras se derrumba. De Marcelo Katz y Checho Castrillón.",
};

export default function VacaMuertaPage() {
  const cast = [
    "Carolina Hardoy",
    "Charly Arzulian",
    "Florencia Boasso",
    "Luciana Maquez",
    "Micaela Pane",
    "Sandra Rojas"
  ];

  const technicalCrew = [
    { role: "Autoría", names: "Marcelo Katz, Checho Castrillón" },
    { role: "Diseño de vestuario", names: "María Cecilia Ximenes" },
    { role: "Realización de vestuario", names: "Tatiana Bosco, María Cecilia Ximenes" },
    { role: "Diseño de escenografía", names: "Ariel Vaccaro" },
    { role: "Realización de escenografía", names: "Ariel Vaccaro" },
    { role: "Diseño Multimedia, Animación e Ilustraciones", names: "Gerson Fredy Moscoso Gargatte" },
    { role: "Diseño De Iluminación", names: "Ricardo Sica" },
    { role: "Selección Musical", names: "Marcelo Katz, Checho Castrillón" },
    { role: "Edición musical", names: "Ricky Antequeda" },
    { role: "Realización Audiovisual", names: "Guadalupe Javaloyes" },
    { role: "Diseño gráfico", names: "Nahuel Lamoglia" },
    { role: "Prensa", names: "Paula Simkin" },
    { role: "Redes Sociales", names: "Belisa Torres" },
    { role: "Asistencia de dirección", names: "Laura Chiron" },
    { role: "Producción ejecutiva", names: "Adriana Yasky" },
    { role: "Dirección", names: "Marcelo Katz, Checho Castrillón" }
  ];

  const galleryImages = [
    { src: "/images/vaca-muerta/vaca-muerta-2.jpg", alt: "Escena de la obra en mesa de directorio" },
    { src: "/images/vaca-muerta/vaca-muerta-3.jpg", alt: "Primer plano de los bufones y sus gestos grotescos" },
    { src: "/images/vaca-muerta/vaca-muerta-4.jpg", alt: "Detalle de los trajes y la teatralidad física" },
    { src: "/images/vaca-muerta/vaca-muerta-5.jpg", alt: "Escena grupal con torres de control al fondo" }
  ];

  return (
    <div className="bg-[#0b090a] text-[#f5f3f4] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[65vh] sm:h-[80vh] overflow-hidden flex items-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vaca-muerta/vaca-muerta-1.jpg"
            alt="VACA MUERTA - Elenco Completo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradients to blend into background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-[#0b090a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b090a]/70 via-transparent to-[#0b090a]/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-center sm:text-left">
          <span className="inline-block bg-[#7461e8] text-white px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase rounded-sm mb-4">
            NUEVO ESTRENO · EN CARTEL
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider font-display mb-4 text-white">
            VACA MUERTA
          </h1>
          <p className="text-lg sm:text-2xl font-light text-gray-300 tracking-wide mb-8 max-w-2xl leading-relaxed">
            De Marcelo Katz y Checho Castrillón
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
            <a
              href="https://publico.alternativateatral.com/entradas101150-vaca-muerta?o=14"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-[#7461e8] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] rounded-sm hover:bg-[#624edb] transition-all uppercase shadow-lg shadow-[#7461e8]/20"
            >
              Comprar Entradas
            </a>
            <Link
              href="#sinopsis"
              className="w-full sm:w-auto text-center border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] rounded-sm hover:bg-white hover:text-black transition-all uppercase"
            >
              Conocer la Obra
            </Link>
          </div>
        </div>
      </section>

      {/* DETALLES DE FUNCIÓN RÁPIDOS */}
      <section className="bg-[#161a1d] py-6 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
          <div className="py-2 md:py-0">
            <p className="text-[10px] tracking-widest text-[#7461e8] uppercase font-bold mb-1">FUNCIONES</p>
            <p className="text-sm font-medium">Sábados a las 19h</p>
          </div>
          <div className="py-4 md:py-0">
            <p className="text-[10px] tracking-widest text-[#7461e8] uppercase font-bold mb-1">TEATRO</p>
            <p className="text-sm font-medium">Teatro Del Pueblo (Lavalle 3636)</p>
          </div>
          <div className="py-2 md:py-0">
            <p className="text-[10px] tracking-widest text-[#7461e8] uppercase font-bold mb-1">ENTRADAS</p>
            <p className="text-sm font-medium">Por Alternativa Teatral o en boletería</p>
          </div>
        </div>
      </section>

      {/* SINOPSIS & DETALLES */}
      <section id="sinopsis" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Texto Principal */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold tracking-wide font-display border-b border-gray-800 pb-4 text-white">
              SINOPSIS
            </h2>
            <div className="space-y-6 text-gray-300 font-light text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-white text-lg sm:text-xl italic">
                “Una maquinaria cómica, salvaje y desafiante sobre una sociedad que festeja mientras se derrumba.”
              </p>
              <p>
                El presidente de la Nación nombra una comisión autárquica para el manejo del yacimiento Vaca Muerta. Los flamantes funcionarios, grotescos y salvajes, avanzan entre torres petroleras, negocios turbios, ambición y delirios de progreso.
              </p>
              <p>
                Con humor corrosivo, ritmo vertiginoso y una fuerte potencia visual, la obra se sumerge en las lógicas del poder, el extractivismo y la devastación contemporánea.
              </p>
              <p>
                La obra despliega una teatralidad física intensa y desfachatada, atravesada por mecanismos cómicos y un permanente estado de desborde donde la violencia, el absurdo y el humor conviven constantemente.
              </p>
              <p>
                Lejos de la solemnidad y de cualquier bajada de línea partidaria, <strong>Vaca Muerta</strong> elige la risa como campo de batalla. El espectáculo expone la violencia y el ridículo de un sistema capaz de destruirlo todo mientras continúa celebrando su propio éxito.
              </p>
              <p>
                La puesta combina teatro físico, proyecciones, música clásica, coreografías, y una fuerte construcción visual para crear una experiencia escénica rítmica, desafiante, disruptiva y profundamente cómica.
              </p>
            </div>
          </div>

          {/* Tarjeta Lateral de Info */}
          <div className="bg-[#161a1d] border border-gray-800 p-8 rounded-md space-y-6">
            <h3 className="text-lg font-bold tracking-widest text-[#7461e8] uppercase">
              FICHA TÉCNICA
            </h3>
            <div className="space-y-4 text-sm divide-y divide-gray-800/50">
              <div className="pt-2 first:pt-0">
                <span className="block text-xs text-gray-500 font-medium">Estreno</span>
                <span className="text-gray-200">Sábado 20 de junio a las 19h</span>
              </div>
              <div className="pt-3">
                <span className="block text-xs text-gray-500 font-medium">Funciones</span>
                <span className="text-gray-200">Sábados a las 19h</span>
              </div>
              <div className="pt-3">
                <span className="block text-xs text-gray-500 font-medium">Sala</span>
                <span className="text-gray-200">Teatro Del Pueblo</span>
                <span className="block text-xs text-gray-400 mt-0.5">Lavalle 3636, Almagro, CABA</span>
              </div>
              <div className="pt-3">
                <span className="block text-xs text-gray-500 font-medium">Precios / Entradas</span>
                <span className="text-gray-200">Disponibles por Alternativa Teatral o boletería</span>
              </div>
            </div>
            
            <a
              href="https://publico.alternativateatral.com/entradas101150-vaca-muerta?o=14"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-white text-black py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors rounded-sm"
            >
              Comprar en Alternativa
            </a>
          </div>

        </div>
      </section>

      {/* DESTACADO: EL BUFÓN CONTEMPORÁNEO */}
      <section className="bg-[#0f0c0d] border-y border-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="w-12 h-1 bg-[#7461e8] mx-auto rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-widest font-display text-white">
            EL TERRITORIO DEL BUFÓN
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm tracking-wider uppercase">
            Nota de Dirección sobre la estética de la obra
          </p>
          <blockquote className="text-gray-300 font-light text-base sm:text-lg leading-relaxed italic max-w-3xl mx-auto">
            “El bufón era una figura habitual en las cortes medievales y hoy comienza a revalorizarse con fuerza en el teatro contemporáneo. Es un personaje irreverente que nace de quienes estaban en los márgenes de la sociedad. Se ríe del poder, expone las contradicciones humanas y se permite decir aquello que nadie más se anima a decir. En este territorio donde la deformación, el exceso y la lucidez conviven, el bufón utiliza la sátira y una mirada mordaz para desnudar hipocresías sociales, políticas y culturales. Su humor es ácido, incómodo y provocador: hace reír, pero también obliga a pensar.”
          </blockquote>
        </div>
      </section>

      {/* GALERÍA DE IMÁGENES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold tracking-wide font-display border-b border-gray-800 pb-4 mb-10 text-white text-center">
          GALERÍA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryImages.map((img, i) => (
            <figure key={i} className="group relative aspect-[4/3] overflow-hidden rounded-md border border-gray-800 bg-[#161a1d]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <figcaption className="text-xs text-gray-200 font-light italic">
                  {img.alt}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* ELENCO Y FICHA COMPLETA */}
      <section className="bg-[#161a1d] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-wide font-display border-b border-gray-800 pb-4 mb-12 text-white text-center">
            FICHA ARTÍSTICA & TÉCNICA
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Actores */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-widest border-b border-gray-800 pb-2">
                ELENCO
              </h3>
              <ul className="space-y-4">
                {cast.map((actor, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base text-gray-300 font-light">
                    <span className="w-1.5 h-1.5 bg-[#7461e8] rounded-full" />
                    {actor}
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipo Técnico */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-widest border-b border-gray-800 pb-2">
                CRÉDITOS Y REALIZACIÓN
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                {technicalCrew.map((member, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="block text-xs text-gray-500 font-medium">{member.role}</span>
                    <span className="text-gray-300 font-light">{member.names}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm font-light italic mb-8 max-w-prose mx-auto">
              Entre ceremonias oficiales, directorios petroleros, corrupción, guerras y delirios de grandeza, Vaca Muerta avanza hacia un paisaje devastado. Un espectáculo salvaje, divertido e incómodo.
            </p>
            <a
              href="https://publico.alternativateatral.com/entradas101150-vaca-muerta?o=14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7461e8] text-white px-10 py-4 text-xs font-bold tracking-[0.2em] rounded-sm hover:bg-[#624edb] transition-all uppercase shadow-lg shadow-[#7461e8]/20"
            >
              Comprar Entradas
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
