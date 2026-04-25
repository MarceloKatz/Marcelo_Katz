import Image from "next/image";
import { HOME, SITE } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={HOME.heroImage}
            alt="Marcelo Katz"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-display leading-tight">
            <strong className="text-accent">KATZ:</strong> Empatía · Clown · Máscaras · Bufón · Oratoria · Teatro · Coaching.
          </h1>

          <p className="text-lg text-ink/80 leading-relaxed font-display italic">
            {HOME.intro}
          </p>

          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-paper px-8 py-3 text-sm font-medium tracking-wider hover:bg-ink transition-colors"
          >
            ESCRIBIME
          </a>

          <div className="prose-mk pt-6 border-t border-ink/10">
            {HOME.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="text-xs sm:text-sm font-medium tracking-widest text-ink/60 leading-loose pt-6 border-t border-ink/10">
            {HOME.keywords}
          </p>
        </div>
      </div>
    </div>
  );
}
