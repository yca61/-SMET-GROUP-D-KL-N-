import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { DIRECTIONS_URL, LEGAL, NAV, SITE } from "@/lib/site";
import ToothIcon from "./ToothIcon";
import CookieSettingsButton from "./CookieSettingsButton";
import SocialIcons from "./SocialIcons";
import { treatments } from "@/lib/treatments";

export default function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-20 text-white/70 md:pb-10">
      <div className="container-x">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="flex items-center gap-3 font-display text-[26px] font-extrabold tracking-[0.12em] text-white"><ToothIcon className="h-10 w-10 shrink-0 text-gold" /><span>İSMET <span className="text-gold">GROUP</span></span></p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.26em] text-white/50">{SITE.tagline}</p>
            <p className="mt-6 max-w-[34ch] text-[14px] leading-relaxed">Modern diş hekimliği yaklaşımlarını, hasta odaklı hizmet anlayışıyla buluşturuyoruz.</p>
          </div>
          <nav aria-label="Alt menü" className="lg:col-span-2">
            <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Menü</h2>
            <ul className="space-y-3 text-[14px]">
              {NAV.map((n) => (<li key={n.href}><Link href={n.href} className="transition-colors hover:text-gold">{n.label}</Link></li>))}
            </ul>
          </nav>
          <nav aria-label="Tedaviler" className="lg:col-span-3">
            <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Tedaviler</h2>
            <ul className="space-y-3 text-[14px]">
              {treatments.map((t) => (<li key={t.slug}><Link href={`/tedaviler/${t.slug}`} className="transition-colors hover:text-gold">{t.title}</Link></li>))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">İletişim</h2>
            <ul className="space-y-4 text-[14px]">
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-gold" /><a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a></li>
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /><span>{SITE.address}</span></li>
              <li><a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="text-champagne underline underline-offset-4">Yol Tarifi Al</a></li>
            </ul>
            <div className="mt-8"><SocialIcons /></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-[12px] md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (<li key={l.slug}><Link href={`/${l.slug}`} className="hover:text-gold">{l.label}</Link></li>))}
            <li><CookieSettingsButton /></li>
          </ul>
          <p>© {new Date().getFullYear()} {SITE.name} {SITE.tagline}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
