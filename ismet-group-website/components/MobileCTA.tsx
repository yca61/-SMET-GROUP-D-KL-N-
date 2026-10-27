"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export default function MobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/30 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg transition-transform duration-500 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href={SITE.phoneHref} className="flex min-h-[54px] items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
        <Phone size={16} className="text-gold" /> Ara
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-[54px] items-center justify-center gap-2 bg-gold text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  );
}
