import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const WHATSAPP_LINK = "https://wa.me/5491136317717?text=Hola!%20Me%20interesa%20obtener%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20Clown,%20Buf%C3%B3n%20y%20M%C3%A1scaras";

export const metadata = {
  title: "Cursos de Clown, Bufón y Máscaras — Marcelo Katz",
  description: "Entrenamientos intensivos y anuales de Clown, Bufón y Máscaras para amateurs y profesionales dirigidos por Marcelo Katz.",
};

export default function LandingClownPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO BANNER 2 COLUMNAS: TEXTO IZQUIERDA | FORMULARIO DERECHA */}
      <section className="relative bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="https://marcelokatz.com.ar/wp-content/uploads/2021/10/FOTO_2-DOCENCIA.jpg"
            alt="Clown y Bufón Marcelo Katz"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* COLUMNA IZQUIERDA: TEXTO Y BOTÓN WHATSAPP */}
          <div className="space-y-6 text-left">
            <span className="inline-block bg-[#7B61FF] text-white text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-lg">
              Entrenamientos Escénicos 2026
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight uppercase">
              TALLERES DE CLOWN, BUFÓN Y MÁSCARAS
            </h1>
            <p className="text-base sm:text-xl text-gray-200 font-light leading-relaxed">
              Presenciales y online para amateurs y profesionales. Descubrí la potencia del juego, el humor físico y la presencia escénica.
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold tracking-wider px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105"
              >
                💬 Consultar Fechas por WhatsApp
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO DIRECTO */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* TRES DISCIPLINAS PRINCIPALES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase text-gray-900">
            Nuestros Entrenamientos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Herramientas teatrales investigadas durante más de 40 años de trayectoria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CLOWN */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 space-y-6 hover:shadow-xl transition-all">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="https://marcelokatz.com.ar/wp-content/uploads/2021/10/FOTO_2-DOCENCIA.jpg"
                alt="Entrenamiento de Clown"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 uppercase">Clown</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Una experiencia apasionante e intensa que nos reencuentra con la potencia del juego. Vulnerabilidad, empatía, impulso, presencia escénica y contacto con la risa del público.
            </p>
          </div>

          {/* BUFÓN */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 space-y-6 hover:shadow-xl transition-all">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="https://marcelokatz.com.ar/wp-content/uploads/2021/10/FOTO_3-DOCENCIA.jpg"
                alt="Entrenamiento de Bufón"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 uppercase">Bufón</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              El placer de transgredir y denunciar indagando en la monstruosidad y bestialidad que habita en nosotros. Búsqueda del cuerpo-bufón, parodia, sátira y agilidad cómica.
            </p>
          </div>

          {/* MÁSCARAS */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 space-y-6 hover:shadow-xl transition-all">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="https://marcelokatz.com.ar/wp-content/uploads/2021/10/FOTO-4-DOCENCIA.jpg"
                alt="Entrenamiento de Máscaras"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 uppercase">Máscaras</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Un viaje sorprendente para descubrir otros cuerpos y personajes. Entrenamiento meticuloso para encontrar la unidad de ese nuevo rostro con el movimiento y la voz.
            </p>
          </div>
        </div>
      </section>

      {/* QUIÉN ES MARCELO KATZ */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <Image
              src="https://marcelokatz.com.ar/wp-content/uploads/2021/10/BIO.jpg"
              alt="Marcelo Katz Director"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] text-[#7B61FF] uppercase">
              Dirección Pedagógica
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase">Marcelo Katz</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              Director, actor y docente con más de 40 años de trayectoria. Fundador de Espacio Aguirre (centro de formación en clown, bufón y máscaras de Latinoamérica) por donde pasaron más de 4.500 alumnos de todo el mundo.
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-lg"
              >
                Inscribirme / Consultar Información ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER FINAL DE CONVERSIÓN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-gray-900">
            ¿Querés sumarte al próximo taller?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Escribinos por WhatsApp y recibí el cronograma completo de horarios y aranceles.
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
