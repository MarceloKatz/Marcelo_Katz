"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  image: string;
  link?: string;
  linkText?: string;
}

const slides: Slide[] = [
  {
    id: "vaca-muerta",
    title: "VACA MUERTA",
    badge: "EN CARTEL",
    subtitle: "De Marcelo Katz y Checho Castrillón · Teatro Del Pueblo",
    image: "/images/vaca-muerta/vaca-muerta-carousel.jpg",
    link: "/vaca-muerta",
    linkText: "VER ESPECTÁCULO",
  },
  {
    id: "gaspet-1",
    title: "GASPET 2026",
    badge: "EN CARTEL 2026",
    subtitle: "Humor, teatro físico y búsqueda visual",
    image: "/images/gaspet/gaspet-1.jpg",
    linkText: "ESPECTÁCULO ACTUAL",
  },
  {
    id: "gaspet-2",
    title: "GASPET 2026",
    badge: "EN CARTEL 2026",
    subtitle: "Universo poético, onírico, feroz y satírico",
    image: "/images/gaspet/gaspet-2.jpg",
    linkText: "ESPECTÁCULO ACTUAL",
  },
  {
    id: "gaspet-3",
    title: "GASPET 2026",
    badge: "EN CARTEL 2026",
    subtitle: "La risa como forma de mirar la realidad",
    image: "/images/gaspet/gaspet-3.jpg",
    linkText: "ESPECTÁCULO ACTUAL",
  },
];

export default function EspectaculosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative group overflow-hidden rounded-xl bg-gray-900 shadow-xl border border-gray-800">
      {/* Container aspect ratio */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={idx === 0}
            />

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="inline-block bg-[#7B61FF] text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] px-3 py-1 rounded-sm uppercase w-fit mb-2 shadow-sm">
                {slide.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide mb-1 drop-shadow-md">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-light mb-4 line-clamp-2">
                {slide.subtitle}
              </p>

              {slide.link ? (
                <Link
                  href={slide.link}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white bg-white/20 hover:bg-white hover:text-black transition-all px-5 py-2.5 rounded-sm uppercase w-fit backdrop-blur-md border border-white/30"
                >
                  {slide.linkText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <span className="inline-block text-xs font-bold tracking-widest text-white/90 bg-black/40 px-4 py-2 rounded-sm uppercase w-fit border border-white/20">
                  {slide.linkText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controls: Prev / Next buttons */}
      <button
        onClick={prevSlide}
        aria-label="Anterior espectaculo"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-sm transition-all border border-white/20 opacity-80 group-hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente espectaculo"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-sm transition-all border border-white/20 opacity-80 group-hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 right-6 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir al espectaculo ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-[#7B61FF]" : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
