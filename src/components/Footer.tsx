import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src={SITE.logoFooter}
              alt={SITE.name}
              width={180}
              height={124}
              className="h-24 w-auto opacity-100"
            />
          </div>

          {/* Nav & Info */}
          <div className="flex flex-col flex-1 items-center gap-6 w-full pt-4 md:pt-0">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] md:text-xs font-semibold tracking-wider text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <p className="text-[10px] md:text-xs text-white/50">
              © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
