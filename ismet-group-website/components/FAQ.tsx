"use client";

import { useState } from "react";
import { Plus, Phone, MessageCircle } from "lucide-react";
import { FAQS, SITE, WHATSAPP_URL } from "@/lib/site";
import Split from "./Split";

export function FaqList({ items, dark = false }: { items: { q: string; a: string }[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`divide-y border-y ${dark ? "divide-white/10 border-white/10" : "divide-ink/10 border-ink/10"}`}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-[18px] font-semibold md:text-[20px]">{f.q}</span>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-500 ${isOpen ? "rotate-45 border-gold bg-gold text-white" : "border-gold/60 text-gold group-hover:bg-gold/10"}`}>
                  <Plus size={18} />
                </span>
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} data-open={isOpen} className="acc-panel">
              <div>
                <p className={`max-w-[62ch] pb-7 leading-[1.8] ${dark ? "text-white/65" : "text-charcoal/75"}`}>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="sss" className="section-y bg-[#E3F0F4]">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <p data-reveal className="eyebrow mb-6">SIK SORULAN SORULAR</p>
          <Split text="Merak *Ettikleriniz.*" className="h-display mb-12 text-[clamp(2.2rem,5vw,4.5rem)]" />
          <FaqList items={FAQS} />
        </div>
        <aside className="lg:col-span-5">
          <div data-reveal className="bg-ink p-8 text-white md:p-12 lg:sticky lg:top-28">
            <span className="mb-6 block h-px w-14 bg-gold" />
            <h3 className="font-display text-[28px] font-bold leading-tight">Sorunuz mu var?</h3>
            <p className="mt-4 leading-relaxed text-white/65">Ekibimiz sorularınızı yanıtlamak ve randevu planlamak için yanınızda.</p>
            <div className="mt-8 grid gap-3">
              <a href={SITE.phoneHref} className="btn btn-line"><Phone size={16} /> Telefonla Ara</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
