import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <Image
            src={SITE.logoFooter}
            alt={SITE.name}
            width={150}
            height={104}
            className="h-20 w-auto opacity-90"
          />

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-wider text-ink/60 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-ink/50">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
