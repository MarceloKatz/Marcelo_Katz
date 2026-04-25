"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/content";
// Si usas lucide-react para los iconos, si no, abajo puse los SVG directos
import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={160}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* DESKTOP NAV + SOCIALS */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-bold tracking-[0.15em] text-black hover:text-accent transition-colors uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 ml-4 border-l border-gray-200 pl-6">
              <a href="#" className="text-black hover:opacity-70 transition-opacity">
                <Instagram size={18} strokeWidth={2.5} />
              </a>
              <a href="#" className="text-black hover:opacity-70 transition-opacity">
                <Facebook size={18} fill="currentColor" />
              </a>
              <a href="#" className="text-black hover:opacity-70 transition-opacity">
                <Linkedin size={18} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="lg:hidden p-2"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-black transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* MOBILE NAV */}
        {open && (
          <nav className="lg:hidden pb-8 flex flex-col gap-4 border-t border-gray-50 pt-6">
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
            <div className="flex gap-6 pt-4 border-t border-gray-50">
                <Instagram size={20} />
                <Facebook size={20} />
                <Linkedin size={20} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
