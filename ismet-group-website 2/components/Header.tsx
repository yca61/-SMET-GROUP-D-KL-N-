"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE, WHATSAPP_URL } from "@/lib/site";
import ToothIcon from "./ToothIcon";
import Magnetic from "./Magnetic";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const lenis = (window as unknown as { __lenis?: { stop(): void; start(): void } }).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          solid ? "h-[68px] border-white/10 bg-ink/85 backdrop-blur-xl" : "h-[92px] border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-full items-center justify-between">
          <Link href="/" aria-label={`${SITE.name} ana sayfa`} className="flex items-center gap-3 leading-none text-white">
            <ToothIcon className="h-8 w-8 shrink-0 text-gold" />
            <span>
              <span className="block font-display text-[20px] font-extrabold tracking-[0.12em]">
                İSMET <span className="text-gold">GROUP</span>
              </span>
              <span className="mt-1 hidden text-[10px] uppercase tracking-[0.24em] text-white/70 sm:block">{SITE.tagline}</span>
            </span>
          </Link>

          <nav aria-label="Ana menü" className="hidden items-center gap-7 xl:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="group relative py-2 text-[13px] font-medium text-white/80 transition-colors hover:text-white"
              >
                {n.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Magnetic>
                <Link href="/#randevu" className="btn btn-gold !min-h-[48px] !px-7 !text-[13px]">
                  <span className="btn-text">Randevu Al</span> <span className="btn-arrow btn-text">→</span>
                </Link>
              </Magnetic>
            </div>
            <button
              type="button"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className={`relative flex h-11 w-11 items-center justify-center border border-white/25 text-white xl:hidden ${open ? "invisible" : ""}`}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        data-open={open}
        aria-hidden={!open}
        className="menu-sheet fixed inset-0 z-[65] flex flex-col bg-ink px-6 pb-8 pt-28 xl:hidden"
      >
        <div className="absolute inset-x-0 top-0 flex h-[76px] items-center justify-between px-5">
          <span className="flex items-center gap-3 font-display text-[18px] font-extrabold tracking-[0.12em] text-white">
            <ToothIcon className="h-7 w-7 text-gold" /> İSMET <span className="-ml-1.5 text-gold">GROUP</span>
          </span>
          <button
            type="button"
            aria-label="Menüyü kapat"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="flex h-12 w-12 items-center justify-center border border-gold/70 text-gold transition-colors hover:bg-gold hover:text-white"
          >
            <X size={22} />
          </button>
        </div>
        <nav aria-label="Mobil menü" className="flex flex-1 flex-col justify-center gap-1">
          {NAV.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${250 + i * 60}ms` : "0ms" }}
              tabIndex={open ? 0 : -1}
              className="flex items-baseline gap-4 border-b border-white/10 py-3.5 font-display text-[28px] font-bold text-white"
            >
              <span className="text-xs font-semibold tracking-widest text-gold">0{i + 1}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="grid gap-3">
          <a href={SITE.phoneHref} tabIndex={open ? 0 : -1} className="btn btn-line">
            <Phone size={16} /> {SITE.phone}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="btn btn-gold">
            WhatsApp&apos;tan Randevu Al
          </a>
        </div>
      </div>
    </>
  );
}
