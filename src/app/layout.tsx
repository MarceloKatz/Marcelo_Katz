import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marcelo Katz — Clown, Bufón, Máscaras, Teatro, Coaching",
    template: "%s | Marcelo Katz",
  },
  description:
    "Marcelo Katz: actor, director, docente y coach. Empatía, clown, máscaras, bufón, oratoria, teatro y coaching. Espacio Aguirre — Buenos Aires.",
  metadataBase: new URL("https://marcelokatz.com.ar"),
  openGraph: {
    title: "Marcelo Katz",
    description:
      "Empatía-Clown-Máscaras-Bufón-Oratoria-Teatro-Coaching. Espacio Aguirre, Buenos Aires.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
