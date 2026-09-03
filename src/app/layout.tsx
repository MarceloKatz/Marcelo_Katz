import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
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

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-WR8L68F";
const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-3JZ8LX3TFD";

export const metadata: Metadata = {
  title: {
    default: "Marcelo Katz — Clown, Bufón, Máscaras, Teatro, Coaching",
    template: "%s | Marcelo Katz",
  },
  description:
    "Marcelo Katz: actor, director, docente y coach. Clown, máscaras, bufón, liderazgo, empatía, expresividad y juego. Espacio Aguirre — Buenos Aires.",
  metadataBase: new URL("https://marcelokatz.com.ar"),
  openGraph: {
    title: "Marcelo Katz",
    description:
      "CLOWN - MÁSCARAS - BUFÓN | LIDERAZGO - EMPATÍA - EXPRESIVIDAD - JUEGO. Espacio Aguirre, Buenos Aires.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <GoogleTagManager gtmId={gtmId} />
      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
