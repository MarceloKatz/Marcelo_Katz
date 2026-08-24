"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export type PrensaItem = {
  title: string;
  image: string;
  href?: string;
};

interface PrensaGalleryProps {
  items: PrensaItem[];
}

export default function PrensaGallery({ items }: PrensaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation & ESC close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? items.length - 1 : prev - 1) : null));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev === items.length - 1 ? 0 : prev + 1) : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, items.length]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedIndex]);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      {/* GRID DE NOTAS DE PRENSA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="group space-y-3 cursor-pointer select-none"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-md border border-gray-200 group-hover:shadow-xl transition-all">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title || "Nota de prensa"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-gray-900 font-bold text-xs px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
                  🔍 Ampliar Nota
                </span>
              </div>
            </div>

            <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#7B61FF] transition-colors leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* POPUP / MODAL LIGHTBOX */}
      {selectedItem && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Backdrop Click Close */}
          <div className="absolute inset-0" onClick={() => setSelectedIndex(null)} />

          {/* Modal Container */}
          <div className="relative z-10 max-w-5xl w-full max-h-[90vh] bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
            {/* Header Modal Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-800 bg-gray-900 text-white">
              <h2 className="text-base sm:text-lg font-bold tracking-wide truncate pr-4">
                {selectedItem.title}
              </h2>

              <button
                onClick={() => setSelectedIndex(null)}
                className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all shrink-0"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            {/* Image Viewer */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/60 min-h-[50vh]">
              <div className="relative w-full h-[65vh] max-h-[750px]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Footer Navigation Bar */}
            <div className="flex items-center justify-between p-4 border-t border-gray-800 bg-gray-900 text-gray-300 text-xs font-semibold">
              <button
                onClick={() => setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1)}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                ← Anterior
              </button>

              <span>
                {selectedIndex + 1} de {items.length}
              </span>

              <button
                onClick={() => setSelectedIndex(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1)}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
