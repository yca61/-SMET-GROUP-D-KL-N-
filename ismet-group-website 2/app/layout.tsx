import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import CursorGlow from "@/components/CursorGlow";
import CookieBanner from "@/components/CookieBanner";
import MobileCTA from "@/components/MobileCTA";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const description =
  "Ağrı'da İSMET GROUP Ağız ve Diş Sağlığı Merkezi: modern diş hekimliği yaklaşımı ve hasta odaklı hizmet anlayışıyla muayene, implant, zirkonyum kaplama ve estetik gülüş tasarımı hakkında bilgi alın.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "İSMET GROUP Ağız ve Diş Sağlığı Merkezi | Ağrı | Dt. Onur Arsu", template: "%s | İSMET GROUP" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "İSMET GROUP Ağız ve Diş Sağlığı Merkezi",
    title: "İSMET GROUP Ağız ve Diş Sağlığı Merkezi",
    description,
    images: [{ url: "/images/hero.webp", width: 2400, height: 1600, alt: "İSMET GROUP klinik iç mekânı" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0B2430", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalClinic"],
  name: "İSMET GROUP Ağız ve Diş Sağlığı Merkezi",
  url: SITE.url,
  telephone: "+905452244512",
  image: `${SITE.url}/images/hero.webp`,
  address: { "@type": "PostalAddress", streetAddress: "Yeşiltepe Mahallesi, 1. Cadde No:28/A", addressRegion: "Ağrı", addressCountry: "TR" },
  employee: { "@type": "Person", name: "Dt. Onur Arsu", jobTitle: "Diş Hekimi" },
  medicalSpecialty: "Dentistry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${manrope.variable} ${cormorant.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "var h=document.documentElement;h.classList.add('js');try{if(location.pathname==='/'&&!sessionStorage.getItem('ismet-loaded')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)h.classList.add('loading')}catch(e){}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#icerik" className="sr-only z-[100] bg-gold px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          İçeriğe geç
        </a>
        <Loader />
        <ScrollProgress />
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <MobileCTA />
        <CursorGlow />
        <CookieBanner />
        <MotionRoot />
      </body>
    </html>
  );
}
