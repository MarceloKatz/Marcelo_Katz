import Image from "next/image";
import { BIO } from "@/lib/content";

export const metadata = { title: "Bio" };

export default function BioPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={BIO.heroImage}
          alt="Marcelo Katz"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <article className="prose-mk max-w-prose mx-auto">
        <h1 className="text-3xl sm:text-4xl mb-8 text-center">{BIO.title}</h1>
        {BIO.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </div>
  );
}
