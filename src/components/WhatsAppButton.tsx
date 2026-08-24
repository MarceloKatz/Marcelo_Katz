"use client";

import { SITE } from "@/lib/content";

export function WhatsAppButton() {
  const numberClean = SITE.whatsapp || "5491136317717";
  const whatsappUrl = `https://wa.me/${numberClean}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp (+54 9 11 3631-7717)"
      title="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 fill-current transition-transform duration-300 group-hover:rotate-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.854 0-3.606-.49-5.132-1.343l-.368-.207-3.815.999 1.018-3.723-.227-.361C2.607 15.65 2.055 13.626 2.055 11.5c0-5.207 4.237-9.445 9.445-9.445 2.522 0 4.894.983 6.678 2.768 1.785 1.785 2.768 4.156 2.768 6.677 0 5.208-4.237 9.445-9.445 9.445m8.473-16.151C18.256 3.427 15.344 2.055 12.055 2.055 5.568 2.055.305 7.318.305 13.805c0 2.072.54 4.095 1.565 5.87L.05 24l4.475-1.173c1.713.934 3.647 1.425 5.626 1.425 6.486 0 11.75-5.263 11.75-11.75 0-3.138-1.222-6.089-3.447-8.314" />
      </svg>

      {/* Pulse Effect Ping Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
    </a>
  );
}
