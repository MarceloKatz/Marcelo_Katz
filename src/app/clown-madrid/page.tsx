import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const WA_MADRID = "https://wa.me/5491136317717?text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Curso%20de%20Clown%20de%20Marcelo%20Katz%20en%20Madrid%20(Octubre)";

export const metadata = {
  title: "Curso de Clown en Madrid — Marcelo Katz (Octubre)",
  description: "Taller e intensivo de Clown en Madrid impartido por Marcelo Katz. Entrenamiento escénico para actores, performers y apasionados del juego. Octubre 2026.",
};

export default function LandingClownMadridPage() {
  return (
    <div className="bg-[#051124] min-h-screen text-white font-sans selection:bg-[#4F46E5] selection:text-white">
      {/* HERO SECTION */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#132748]">
        {/* Fondo decorativo con gradiente moderno */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1D3D] via-[#051124] to-[#051124] opacity-90" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#4F46E5]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y ACCIONES */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0F2954] border border-[#4F46E5]/40 text-[#818CF8] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-inner">
              <span>📍 Madrid, España — Entrenamiento Intensivo</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-white uppercase drop-shadow-md">
              CURSO DE <span className="text-[#818CF8]">CLOWN</span> EN MADRID
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#E2A747] text-gray-950 font-extrabold text-sm sm:text-base uppercase tracking-widest px-4 py-1 rounded-md shadow-md">
                OCTUBRE
              </span>
              <span className="text-gray-300 text-sm sm:text-base font-medium">
                Profesor Marcelo Katz <span className="text-[#818CF8] font-semibold">(Argentina)</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
              Descubrí tu universo cómico y la libertad del juego escénico en este intensivo de Clown dirigido por el maestro Marcelo Katz en Madrid.
            </p>

            {/* BOTÓN PRINCIPAL DE WHATSAPP */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={WA_MADRID}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eb857] text-white text-sm font-bold tracking-wider px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105"
              >
                <span>💬 Consultar Horarios y Lugar por WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-gray-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Plazas limitadas — Reserva Abierta para Octubre</span>
            </div>
          </div>

          {/* COLUMNA DERECHA: FOTO DE IMPACTO */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md bg-[#0A1F42] p-3 rounded-2xl border border-[#4F46E5]/30 shadow-2xl transition-all duration-300 hover:border-[#4F46E5]/60">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/site_assets/FOTO_2-DOCENCIA.jpg"
                  alt="Curso de Clown en Madrid — Marcelo Katz"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <div className="p-3 text-center bg-[#071630] rounded-b-xl border-t border-[#4F46E5]/20 mt-2">
                <p className="text-xs font-semibold text-[#818CF8] tracking-wider uppercase">
                  Madrid — Octubre 2026
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Docencia: Marcelo Katz (Espacio Aguirre)
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN SOBRE EL WORKSHOP */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#818CF8] uppercase bg-[#0B234A] px-4 py-1.5 rounded-full border border-[#4F46E5]/30">
            Contenidos del Taller
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            Ejes de Formación en Clown
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Herramientas teatrales desarrolladas en más de 40 años de trayectoria pedagógica en América y Europa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* TARJETA 1 */}
          <div className="bg-[#091833] p-8 rounded-2xl border border-[#132B54] hover:border-[#4F46E5]/50 transition-all space-y-4 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#0F2954] text-[#818CF8] flex items-center justify-center text-2xl font-black">
              🎭
            </div>
            <h3 className="text-xl font-bold uppercase text-white">El Propio Clown</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Búsqueda de la propia absurdidad, la risa sincera, el fracaso festivo y la singularidad de cada participante en escena.
            </p>
          </div>

          {/* TARJETA 2 */}
          <div className="bg-[#091833] p-8 rounded-2xl border border-[#132B54] hover:border-[#4F46E5]/50 transition-all space-y-4 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#0F2954] text-[#818CF8] flex items-center justify-center text-2xl font-black">
              ⚡
            </div>
            <h3 className="text-xl font-bold uppercase text-white">Humor Físico y Ritmo</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Manejo del tiempo cómico, las pausas, la mirada fija al público y el cuerpo expresivo para generar carcajadas sin necesidad de palabras recargadas.
            </p>
          </div>

          {/* TARJETA 3 */}
          <div className="bg-[#091833] p-8 rounded-2xl border border-[#132B54] hover:border-[#4F46E5]/50 transition-all space-y-4 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#0F2954] text-[#818CF8] flex items-center justify-center text-2xl font-black">
              🎪
            </div>
            <h3 className="text-xl font-bold uppercase text-white">Improvisación y Mirada</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              El arte de reaccionar en el presente absoluto a todo lo que sucede en la sala, convirtiendo la mirada del espectador en el motor del juego.
            </p>
          </div>
        </div>
      </section>

      {/* QUIÉN ES MARCELO KATZ */}
      <section className="bg-[#030C1C] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#132748]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#4F46E5]/30">
            <Image
              src="/images/site_assets/BIO.jpg"
              alt="Marcelo Katz Director"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold tracking-[0.25em] text-[#818CF8] uppercase bg-[#091B3A] px-3 py-1 rounded-md">
              Maestro Internacional
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
              Marcelo Katz
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              Director teatral, actor y pedagogo argentino. Fundador y director de <strong>Espacio Aguirre</strong> (Teatro, Escuela de Clown, Bufón y Máscaras en Buenos Aires), por donde pasaron más de 4.500 alumnos en sus cuatro décadas de historia.
            </p>
            <p className="text-sm text-gray-400 font-light">
              Reconocido internacionalmente por sus puestas en escena y por su labor docente impartiendo seminarios intensivos en toda España y América Latina.
            </p>
            <div className="pt-2">
              <a
                href={WA_MADRID}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb857] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-lg"
              >
                💬 Consultar por WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO E INFORMACIÓN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            Reservá tu vacante para Madrid
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Envianos tu consulta directa por WhatsApp o completá el formulario para recibir el dossier de aranceles y dirección exacta del taller en <strong>Madrid (Octubre)</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* TARJETA DE INFORMACIÓN Y WHATSAPP */}
          <div className="bg-[#091833] p-8 rounded-3xl border border-[#132B54] space-y-6">
            <h3 className="text-xl font-bold uppercase text-white">
              Atención Directa
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Escribinos directamente para solicitar detalles de aranceles, ubicación exacta en Madrid y proceso de inscripción.
            </p>

            <a
              href={WA_MADRID}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-[#0F2954] hover:bg-[#163973] border border-[#4F46E5]/40 transition-all group text-center"
            >
              <div className="text-xs font-bold text-[#818CF8] uppercase tracking-wider mb-1">
                Consultar por WhatsApp
              </div>
              <div className="text-base font-extrabold text-white group-hover:text-[#25D366] transition-colors flex items-center justify-center gap-2">
                <span>💬 Escribir al Equipo de Marcelo Katz</span>
              </div>
            </a>

            <div className="p-4 bg-[#071733] rounded-2xl border border-[#132B54] text-xs text-gray-300 space-y-1">
              <span className="font-semibold text-white block">📍 Sede:</span>
              <span>Madrid, España (Modalidad Presencial).</span>
              <span className="font-semibold text-white block pt-1">📅 Período:</span>
              <span>Edición Especial Octubre 2026.</span>
            </div>
          </div>

          {/* FORMULARIO WEB */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-8 bg-[#020A17] border-t border-[#132748] text-center text-xs text-gray-400">
        <p>© 2026 Marcelo Katz — Curso de Clown en Madrid (Octubre)</p>
      </footer>
    </div>
  );
}
