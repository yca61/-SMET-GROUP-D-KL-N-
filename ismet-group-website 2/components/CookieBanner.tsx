"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const KEY = "ismet-cookie-consent";

// Çerez bilgilendirmesi. Şu an yalnızca zorunlu çerezler kullanılır; analitik/pazarlama eklenirse
// "Kabul Et" seçimi bu betiklerin yüklenmesi için kullanılmalıdır (localStorage: "all" | "necessary").
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(KEY); } catch {}
    const open = () => setShow(true);
    window.addEventListener("open-cookie-settings", open);
    if (saved) return () => window.removeEventListener("open-cookie-settings", open);
    const t = setTimeout(() => setShow(true), 3200);
    return () => { clearTimeout(t); window.removeEventListener("open-cookie-settings", open); };
  }, []);

  const choose = (v: "all" | "necessary") => {
    try { localStorage.setItem(KEY, v); } catch {}
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihleri"
      aria-hidden={!show}
      className={`fixed inset-x-3 bottom-[70px] z-[90] max-w-[420px] border border-gold/40 bg-ink/95 p-5 text-white shadow-2xl backdrop-blur-xl transition-all duration-700 md:inset-x-auto md:bottom-6 md:left-6 md:p-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center bg-gold text-white"><Cookie size={18} /></span>
        <p className="font-display text-[16px] font-bold">Çerez Tercihleri</p>
      </div>
      <p className="text-[13px] leading-relaxed text-white/70">
        Sitemizin çalışması için zorunlu çerezler kullanılır. Deneyiminizi geliştirmek için isteğe bağlı çerezlere izin verebilirsiniz. Ayrıntılar için{" "}
        <Link href="/cerez" className="text-champagne underline underline-offset-4">Çerez Politikası</Link>&apos;nı inceleyin.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button type="button" tabIndex={show ? 0 : -1} onClick={() => choose("necessary")} className="min-h-[46px] border border-white/30 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors hover:border-gold hover:bg-gold/15">
          Sadece Gerekli
        </button>
        <button type="button" tabIndex={show ? 0 : -1} onClick={() => choose("all")} className="min-h-[46px] bg-gold text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-champagne hover:text-ink">
          Kabul Et
        </button>
      </div>
    </div>
  );
}
