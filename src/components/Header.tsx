"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* LOGO - Izquierda */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={160}
              height={60}
              className="h-12 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* NAV + SOCIALS - Derecha (Desktop) */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-bold tracking-[0.18em] text-black hover:opacity-60 transition-opacity uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ICONOS SOCIALES - SVGs Directos (Sin librerías externas) */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a href="#" className="text-black hover:opacity-60 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-black hover:opacity-60 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-black hover:opacity-60 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* BOTÓN MÓVIL */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-black transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        {open && (
          <nav className="lg:hidden pb-10 flex flex-col gap-5 border-t border-gray-50 pt-8 animate-in fade-in slide-in-from-top-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xs font-bold tracking-widest text-black uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
