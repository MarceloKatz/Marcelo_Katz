import { ContactForm } from "@/components/ContactForm";

const SITE = {
  name: "Marcelo Katz",
  email: "mkatz6951@gmail.com",
  whatsapp: "+54 9 11 3631-7717",
  whatsappLink: "https://wa.me/5491136317717",
  address: "Espacio Aguirre — Aguirre 1270, Villa Crespo, Buenos Aires, Argentina",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/marcelokatzclown/", icon: "📸" },
    { label: "Facebook", href: "https://www.facebook.com/marcelo.katz.50", icon: "📘" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marcelokatz/", icon: "💼" },
  ],
};

export const metadata = { title: "Contacto — Marcelo Katz" };

export default function ContactoPage() {
  return (
    <div className="bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* HEADING PRINCIPAL */}
        <header className="text-center space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-[#7B61FF] uppercase">
            Hablemos
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wider text-gray-900 uppercase">
            CONTACTO
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Estamos disponibles para responder tus dudas sobre talleres, espectáculos, entrenamientos y coaching.
          </p>
        </header>

        {/* GRID DE DOS COLUMNAS */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          {/* COLUMNA IZQUIERDA: TARJETAS DE CONTACTO DIRECTO */}
          <div className="space-y-6">
            {/* WHATSAPP CARD */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                  💬
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    WhatsApp Directo
                  </h3>
                  <p className="text-lg font-bold text-gray-900">{SITE.whatsapp}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Respuesta rápida por mensaje directo para consultas urgentes o inscripciones.
              </p>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md w-full justify-center"
              >
                Escribir por WhatsApp ↗
              </a>
            </div>

            {/* EMAIL CARD */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7B61FF] flex items-center justify-center text-2xl font-bold">
                  ✉️
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Correo Electrónico
                  </h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-base font-bold text-gray-900 hover:text-[#7B61FF] transition-colors truncate block"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>


            {/* REDES SOCIALES */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Redes Sociales
              </h3>
              <div className="flex flex-wrap gap-3">
                {SITE.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO MODERNO */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
