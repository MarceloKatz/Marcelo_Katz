"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={140}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-wider text-ink/70 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="lg:hidden p-2 -mr-2"
          >
            <span className="block w-6 h-0.5 bg-ink mb-1.5" />
            <span className="block w-6 h-0.5 bg-ink mb-1.5" />
            <span className="block w-6 h-0.5 bg-ink" />
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-6 flex flex-col gap-3 border-t border-ink/10 pt-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-wider text-ink/80 hover:text-accent"
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
