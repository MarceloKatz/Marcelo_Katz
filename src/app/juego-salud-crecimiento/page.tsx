import Image from "next/image";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/5491136317717?text=Hola!%20Me%20interesa%20obtener%20informaci%C3%B3n%20sobre%20el%20taller%20de%20Juego,%20Salud%20y%20Crecimiento";

export const metadata = {
  title: "Juego, Salud y Crecimiento — Marcelo Katz",
  description: "Desarrollo Humano, Expresividad y Empatía a través del juego. Una propuesta vivencial creada y coordinada por Marcelo Katz.",
};

export default function LandingJuegoPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO BANNER DE ALTO IMPACTO */}
      <section className="relative bg-gray-950 text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/coach/coach-1.jpg"
            alt="Juego Salud y Crecimiento Marcelo Katz"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block bg-[#7B61FF] text-white text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-lg">
            Desarrollo Humano & Expresividad
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight uppercase">
            JUEGO, SALUD Y CRECIMIENTO
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-light max-w-3xl mx-auto">
            Una propuesta vivencial que traslada al desarrollo humano las herramientas creativas y expresivas investigadas durante más de 40 años en el teatro.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold tracking-wider px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              💬 Consultar por WhatsApp
            </a>
            <Link
              href="/coach"
              className="bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wider px-8 py-4 rounded-xl border border-white/20 transition-all w-full sm:w-auto text-center"
            >
              Conocer Solapa Oficial
            </Link>
          </div>
        </div>
      </section>

      {/* LAS DOS GRANDES HEBRAS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase text-gray-900">
            Estructura del Programa
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            En esta estructura conviven dos grandes actividades orientadas al crecimiento personal e institucional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* HEBRA 1 */}
          <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-200 space-y-6 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7B61FF] flex items-center justify-center text-2xl font-bold">
                🌱
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase">
                Juego, Salud y Crecimiento
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Herramientas del teatro aplicadas a la salud emocional, al bienestar personal y al reencuentro con el juego. Talleres grupales diseñados para liberar la creatividad, disminuir el estrés y fortalecer el trabajo en equipo.
              </p>
            </div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm pt-4">
              <Image
                src="/images/coach/coach-1.jpg"
                alt="Juego Salud Crecimiento Taller"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* HEBRA 2 */}
          <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-200 space-y-6 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase">
                Expresividad y Empatía
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Entrenamiento intensivo en comunicación, presencia escénica y empatía. Dirigido a profesionales, empresarios y destacados científicos como Martín Lousteau y Marco Lavagna, entre otros.
              </p>
            </div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm pt-4">
              <Image
                src="/images/coach/coach-2.jpg"
                alt="Expresividad y Empatía Taller"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS Y DINÁMICAS */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#7B61FF] uppercase">
              Resultados Prácticos
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase">
              ¿Qué logramos en cada encuentro?
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-800 space-y-3">
              <span className="text-2xl">✨</span>
              <h3 className="text-base font-bold uppercase text-white">Desinhibición</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Superar bloqueos expresivos y ganar seguridad al comunicarse frente a grupos o público.
              </p>
            </div>

            <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-800 space-y-3">
              <span className="text-2xl">🎭</span>
              <h3 className="text-base font-bold uppercase text-white">Creatividad Vivencial</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Reconectar con la potencia del juego como motor de salud mental y laboral.
              </p>
            </div>

            <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-800 space-y-3">
              <span className="text-2xl">💡</span>
              <h3 className="text-base font-bold uppercase text-white">Empatía Real</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Construir vínculos más auténticos y humanos en equipos de trabajo y organizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER FINAL DE LLAMADO A LA ACCIÓN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-gray-900">
            Coordiná un taller para vos o tu organización
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Escribinos por WhatsApp y te brindamos asesoramiento personalizado.
          </p>
          <div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7B61FF] hover:bg-[#684ee3] text-white text-sm font-bold tracking-wider px-10 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
            >
              💬 Contactar por WhatsApp Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
