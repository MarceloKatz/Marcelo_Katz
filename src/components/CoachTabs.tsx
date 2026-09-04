"use client";

import { useState } from "react";
import Image from "next/image";

interface CoachTabsProps {
  expresividadData: {
    intro: string;
    clients: string;
    images: string[];
    benefits: { title: string; items: string[] };
    testimonials: { author: string; role: string; quote: string }[];
  };
}

export default function CoachTabs({ expresividadData }: CoachTabsProps) {
  const [activeTab, setActiveTab] = useState<"juego" | "expresividad">("juego");

  return (
    <div className="space-y-12">
      {/* SECTOR SOLAPAS / TABS */}
      <div className="flex justify-center border-b border-gray-200">
        <div className="flex gap-4 sm:gap-8">
          <button
            onClick={() => setActiveTab("juego")}
            className={`pb-4 px-2 sm:px-4 text-sm sm:text-base font-bold tracking-wider transition-all border-b-2 uppercase ${
              activeTab === "juego"
                ? "border-[#7B61FF] text-[#7B61FF]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            Juego, salud y crecimiento
          </button>
          <button
            onClick={() => setActiveTab("expresividad")}
            className={`pb-4 px-2 sm:px-4 text-sm sm:text-base font-bold tracking-wider transition-all border-b-2 uppercase ${
              activeTab === "expresividad"
                ? "border-[#7B61FF] text-[#7B61FF]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            Expresividad y empatía
          </button>
        </div>
      </div>

      {/* CONTENIDO SOLAPA 1: JUEGO, SALUD Y CRECIMIENTO */}
      {activeTab === "juego" && (
        <div className="space-y-16 animate-in fade-in duration-300">
          {/* Fila Texto + Imagen Principal Grandes (50 / 50) */}
          <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto (Izquierda) */}
            <div className="lg:col-span-6 space-y-6 text-gray-800 font-light leading-relaxed text-base sm:text-lg">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Un espacio para jugar, compartir, conocernos y crecer
                </h2>
              </div>

              <p>
                A través de juegos y ejercicios escénicos, este taller propone una{" "}
                <strong className="font-semibold text-gray-900">experiencia intensa, divertida y transformadora</strong>.
                Descubriremos nuevas maneras de relacionarnos con nosotros mismos, con los demás y con el mundo que nos rodea.
              </p>

              <p>
                Son <strong className="font-semibold text-gray-900">encuentros sin fines escénicos</strong>, destinados a personas
                con ganas de conocerse un poco más, conectar con su cuerpo, divertirse y dar un pasito más en el camino de la
                aceptación, la comunicación y la empatía.
              </p>
            </div>

            {/* Imagen 1 (Derecha) - MUCHO MÁS GRANDE */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full h-[320px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/coach/coach-1.jpg"
                  alt="Taller Juego, salud y crecimiento - Ronda de entrenamiento"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Dinámicas Posibles & Hebras del entrenamiento */}
          <section className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-100">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 tracking-wide uppercase text-xs sm:text-sm text-[#7B61FF]">
                Dinámicas Posibles
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#7B61FF] font-bold">•</span>
                  <span><strong>4 encuentros de 2.30 hs. cada uno</strong> — Frecuencia semanal — Duración: 1 mes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7B61FF] font-bold">•</span>
                  <span><strong>2 encuentros de 6 hs. cada uno</strong> — Intensivo — Duración: 1 fin de semana.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7B61FF] font-bold">•</span>
                  <span><strong>1 encuentro de 8 hs.</strong> — Super intensivo — Duración: 1 día.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 tracking-wide uppercase text-xs sm:text-sm text-[#7B61FF]">
                Dos Grandes Hebras
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 font-light">
                <p>
                  <strong className="font-semibold text-gray-900">1. Lúdica y escénica:</strong> A través del cuerpo y del juego, los participantes viven experiencias expresivas, desafiantes y disfrutables.
                </p>
                <p>
                  <strong className="font-semibold text-gray-900">2. Compartir y reflexionar:</strong> Espacios de conversación para poner en palabras lo vivido, descubrir nuevas miradas y enriquecer la experiencia colectiva.
                </p>
              </div>
            </div>
          </section>

          {/* Fila Texto + Imagen Secundaria Grandes (50 / 50) */}
          <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Imagen 2 (Izquierda) - MUCHO MÁS GRANDE */}
            <div className="lg:col-span-6 order-2 lg:order-1 w-full">
              <div className="relative w-full h-[320px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/coach/coach-2.jpg"
                  alt="Taller Juego, salud y crecimiento - Participantes sonriendo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Texto (Derecha) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-gray-800 font-light leading-relaxed text-base sm:text-lg">
              <p>
                Cuando el cuerpo entra en acción, aparecen percepciones, emociones e intuiciones a las que muchas veces no accedemos sólo desde la reflexión. El intercambio posterior permite reconocer, comprender en integrar esas vivencias.
              </p>
              <blockquote className="italic font-medium text-gray-900 border-l-4 border-[#7B61FF] pl-5 py-2 text-lg sm:text-xl bg-purple-50/50 rounded-r-lg">
                “El objetivo es ampliar la mirada sobre uno mismo, sobre los otros y sobre la manera en que habitamos el mundo.”
              </blockquote>
              <p>
                El entrenamiento puede realizarse tanto con equipos de organizaciones y corporaciones como con particulares.
              </p>
            </div>
          </section>

          {/* GALERÍA DESTACADA A PANTALLA ANCHA (IMÁGENES GIGANTES) */}
          <section className="space-y-6 pt-4">
            <h3 className="text-center text-xs font-bold tracking-[0.25em] text-[#7B61FF] uppercase">
              Galería de Talleres y Encuentros
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/coach/talleres-encuentros-1.jpg"
                  alt="Galería Taller Juego, Salud y Crecimiento 1"
                  fill
                  sizes="50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/coach/talleres-encuentros-2.jpg"
                  alt="Galería Taller Juego, Salud y Crecimiento 2"
                  fill
                  sizes="50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </section>

          {/* Trayectoria del facilitador */}
          <section className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-gray-900 tracking-wide">Trayectoria y Experiencia</h3>
            <ul className="space-y-3 text-gray-700 text-base font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#7B61FF] font-bold text-lg">•</span>
                <span>Hace 20 años que entrena a profesionales, científicos, políticos y equipos de corporaciones y organizaciones, en expresividad y empatía.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7B61FF] font-bold text-lg">•</span>
                <span>Se desempeña como entrenador de grupos de líderes y empresarios en Vistage Argentina, acompañando procesos de desarrollo, comunicación y liderazgo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7B61FF] font-bold text-lg">•</span>
                <span>Participó durante 18 años en los talleres de ayuda mutua del Programa de Salud Mental Barrial del Hospital Pirovano.</span>
              </li>
            </ul>
          </section>
        </div>
      )}

      {/* CONTENIDO SOLAPA 2: EXPRESIVIDAD Y EMPATÍA */}
      {activeTab === "expresividad" && (
        <div className="space-y-16 animate-in fade-in duration-300">
          {/* Fila Texto + Imágenes (50 / 50) */}
          <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Columna Texto */}
            <div className="lg:col-span-6 space-y-6 text-gray-800 font-light leading-relaxed text-base sm:text-lg">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Entrenamiento de Oratoria, Expresividad y Empatía
              </h2>
              <p>{expresividadData.intro}</p>
              <p className="font-medium text-gray-900 bg-purple-50/60 p-5 rounded-xl border-l-4 border-[#7B61FF]">
                {expresividadData.clients}
              </p>
            </div>

            {/* Columna Imagen Principal */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full h-[320px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/coach/coach-2.jpg"
                  alt="Entrenamiento de Oratoria y Empatía"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </section>

          {/* GALERÍA DEL ENTRENAMIENTO (2 FOTOS LADO A LADO) */}
          <section className="space-y-6 pt-4">
            <h3 className="text-center text-xs font-bold tracking-[0.25em] text-[#7B61FF] uppercase">
              Galería del Entrenamiento
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/coach/entrenamiento-1.jpg"
                  alt="Galería del Entrenamiento 1"
                  fill
                  sizes="50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/coach/entrenamiento-2.jpg"
                  alt="Galería del Entrenamiento 2"
                  fill
                  sizes="50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </section>


          {/* Beneficios */}
          <section className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-100 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              {expresividadData.benefits.title}
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {expresividadData.benefits.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm sm:text-base font-light leading-relaxed">
                  <span className="text-[#7B61FF] font-bold shrink-0 mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Testimonios */}
          <section className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-gray-900">
              Algunas opiniones sobre el entrenamiento
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {expresividadData.testimonials.map((t) => (
                <blockquote key={t.author} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <p className="text-sm italic text-gray-700 leading-relaxed">“{t.quote}”</p>
                  <footer className="text-xs pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-900">{t.author}</p>
                    <p className="text-gray-500">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function ExpresividadCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[320px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        sizes="100vw"
        className="object-cover transition-all duration-500"
        priority
      />

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 shadow-md text-lg"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 shadow-md text-lg"
      >
        ❯
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


