import Image from "next/image";
import { PRENSA } from "@/lib/content";

export const metadata = { title: "Prensa" };

export default function PrensaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl">PRENSA</h1>
        <p className="text-ink/60 mt-2 text-sm tracking-wider">Notas y entrevistas</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRENSA.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group space-y-3"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-ink/5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-sm font-medium text-ink/80 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
