import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const WA_ADRIAN = "https://wa.me/34617038470?text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Curso%20de%20Clown%20de%20Marcelo%20Katz%20en%20Gij%C3%B3n%20(Octubre)";
const WA_JUANPABLO = "https://wa.me/34665789442?text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Curso%20de%20Clown%20de%20Marcelo%20Katz%20en%20Gij%C3%B3n%20(Octubre)";

export const metadata = {
  title: "Curso de Clown en Gijón — Marcelo Katz (Octubre)",
  description: "Taller e intensivo de Clown en Gijón impartido por el maestro Marcelo Katz en Laboral Ciudad de la Cultura. Inscripciones abiertas para Octubre.",
};

export default function LandingClownGijonPage() {
  return (
    <div className="bg-[#041A1A] min-h-screen text-white font-sans selection:bg-[#1FB5AD] selection:text-white">
      {/* HERO SECTION */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#0f4444]">
        {/* Fondo decorativo con gradientes suaves */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#072B2B] via-[#041A1A] to-[#041A1A] opacity-90" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1FB5AD]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y ACCIONES */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0F4B4B] border border-[#1FB5AD]/40 text-[#52E3DC] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-inner">
              <span>📍 Gijón, Asturias — Laboral Ciudad de la Cultura</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-white uppercase drop-shadow-md">
              CURSO DE <span className="text-[#1FB5AD]">CLOWN</span>
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#E2A747] text-gray-950 font-extrabold text-sm sm:text-base uppercase tracking-widest px-4 py-1 rounded-md shadow-md">
                OCTUBRE
              </span>
              <span className="text-gray-300 text-sm sm:text-base font-medium">
                Profesor Marcelo Katz <span className="text-[#1FB5AD] font-semibold">(Argentina)</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
              Una experiencia intensa para conectarte con la potencia del juego, la comedia física, la vulnerabilidad y el contacto directo con el público.
            </p>

            {/* BOTONES DE CONTACTO DIRECTO POR WHATSAPP */}
            <div className="pt-4 space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href={WA_ADRIAN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eb857] text-white text-sm font-bold tracking-wider px-6 py-4 rounded-xl transition-all shadow-xl hover:scale-105"
              >
                <span>💬 Consultar a Adrián Conde</span>
                <span className="text-xs font-normal opacity-90">(617 03 8470)</span>
              </a>

              <a
                href={WA_JUANPABLO}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0F4B4B] hover:bg-[#176262] border border-[#1FB5AD]/50 text-white text-sm font-bold tracking-wider px-6 py-4 rounded-xl transition-all shadow-xl hover:scale-105"
              >
                <span>💬 Consultar a Juan Pablo</span>
                <span className="text-xs font-normal opacity-90">(665 78 9442)</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-gray-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Inscripciones abiertas para la edición de Octubre</span>
            </div>
          </div>

          {/* COLUMNA DERECHA: AFICHE OFICIAL / FLYER */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md bg-[#0A3030] p-3 rounded-2xl border border-[#1FB5AD]/30 shadow-2xl transition-all duration-300 hover:border-[#1FB5AD]/60">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/flyer-clown-gijon.jpg"
                  alt="Curso de Clown en Gijón — Marcelo Katz"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <div className="p-3 text-center bg-[#072B2B] rounded-b-xl border-t border-[#1FB5AD]/20 mt-2">
                <p className="text-xs font-semibold text-[#52E3DC] tracking-wider uppercase">
                  Laboral Ciudad de la Cultura — Gijón
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Organizan: Adrián Conde & Juan Pablo
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN SOBRE EL WORKSHOP */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#1FB5AD] uppercase bg-[#0B3838] px-4 py-1.5 rounded-full border border-[#1FB5AD]/30">
            Propuesta Pedagógica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            ¿Qué vas a entrenar en este curso?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Un recorrido práctico e intensivo diseñado para potenciar tu comicidad y descubrir tu propio clown.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* TARJETA 1 */}
          <div className="bg-[#072626] p-8 rounded-2xl border border-[#0F4444] hover:border-[#1FB5AD]/40 transition-all space-y-4 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#0F4B4B] text-[#1FB5AD] flex items-center justify-center text-2xl font-black">
              🎭
            </div>
            <h3 className="text-xl font-bold uppercase text-white">El Estado Clown</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Trabajo sobre la mirada, la presencia escénica y la honestidad emocional. Aprender a estar en escena sin máscaras sociales y disponible para el juego.
            </p>
          </div>

          {/* TARJETA 2 */}
          <div className="bg-[#072626] p-8 rounded-2xl border border-[#0F4444] hover:border-[#1FB5AD]/40 transition-all space-y-4 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#0F4B4B] text-[#1FB5AD] flex items-center justify-center text-2xl font-black">
              💥
            </div>
            <h3 className="text-xl font-bold uppercase text-white">Humor Físico e Impulso</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Exploración del ritmo, la caída, el tropiezo y la proyección del cuerpo como vehículo del humor espontáneo y la risa genuina.
            </p>
          </div>

          {/* TARJETA 3 */}
          <div className="bg-[#072626] p-8 rounded-2xl border border-[#0F4444] hover:border-[#1FB5AD]/40 transition-all space-y-4 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#0F4B4B] text-[#1FB5AD] flex items-center justify-center text-2xl font-black">
              👏
            </div>
            <h3 className="text-xl font-bold uppercase text-white">Contacto con el Público</h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Herramientas de improvisación y escucha activa para transformar el error en complicidad y generar una conexión directa e inolvidable con la audiencia.
            </p>
          </div>
        </div>
      </section>

      {/* QUIÉN ES MARCELO KATZ */}
      <section className="bg-[#021212] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#0f4444]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#1FB5AD]/30">
            <Image
              src="/images/site_assets/BIO.jpg"
              alt="Marcelo Katz Director"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold tracking-[0.25em] text-[#1FB5AD] uppercase bg-[#072B2B] px-3 py-1 rounded-md">
              Docente e Investigador Escénico
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
              Marcelo Katz
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              Director, actor y pedagogo argentino con más de 40 años de trayectoria. Fundador de <strong>Espacio Aguirre</strong> en Buenos Aires, escuela de referencia internacional en Clown, Bufón y Máscaras por la que han pasado más de 4.500 estudiantes de todo el mundo.
            </p>
            <p className="text-sm text-gray-400 font-light">
              Imparte talleres y seminarios intensivos en España, Latinoamérica y Europa, formando a profesionales de las artes escénicas y docentes.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={WA_ADRIAN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb857] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-lg"
              >
                💬 Solicitar Lugar en Gijón ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO E INFORMACIÓN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            ¿Tenés dudas o querés anotarte?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Escribinos por WhatsApp o completá tus datos en el formulario para recibir toda la información sobre el curso en <strong>Gijón (Octubre)</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* CONTACTO DIRECTO */}
          <div className="bg-[#072626] p-8 rounded-3xl border border-[#0F4444] space-y-6">
            <h3 className="text-xl font-bold uppercase text-white">
              Contacto Telefónico / WhatsApp
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Podés comunicarte directamente con los organizadores locales para reservar tu plaza:
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={WA_ADRIAN}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl bg-[#093535] hover:bg-[#0E4747] border border-[#1FB5AD]/30 transition-all group"
              >
                <div className="text-xs font-bold text-[#1FB5AD] uppercase tracking-wider">
                  Adrián Conde
                </div>
                <div className="text-lg font-extrabold text-white group-hover:text-[#25D366] transition-colors">
                  📞 +34 617 03 8470
                </div>
              </a>

              <a
                href={WA_JUANPABLO}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl bg-[#093535] hover:bg-[#0E4747] border border-[#1FB5AD]/30 transition-all group"
              >
                <div className="text-xs font-bold text-[#1FB5AD] uppercase tracking-wider">
                  Juan Pablo
                </div>
                <div className="text-lg font-extrabold text-white group-hover:text-[#25D366] transition-colors">
                  📞 +34 665 78 9442
                </div>
              </a>
            </div>

            <div className="p-4 bg-[#0A3333] rounded-2xl border border-[#0F4444] text-xs text-gray-300 space-y-1">
              <span className="font-semibold text-white block">📍 Sede en Gijón:</span>
              <span>Laboral Ciudad de la Cultura, Gijón (Asturias).</span>
            </div>
          </div>

          {/* FORMULARIO WEB */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-8 bg-[#021010] border-t border-[#0F4444] text-center text-xs text-gray-400">
        <p>© 2026 Marcelo Katz — Curso de Clown en Gijón (Laboral Ciudad de la Cultura)</p>
      </footer>
    </div>
  );
}
