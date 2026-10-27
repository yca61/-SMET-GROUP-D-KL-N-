"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import Split from "./Split";

// DEMO: stok görseller. Gerçek klinik fotoğrafları aynı dosya adlarıyla /public/images içine konabilir.
const photos = [
  { src: "/images/gal-1.webp", alt: "Turuncu muayene koltuklu modern diş hekimliği odası", label: "Tedavi odası", cls: "md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { src: "/images/gal-4.webp", alt: "Kavisli resepsiyon bankosu olan karşılama alanı", label: "Resepsiyon", cls: "md:col-span-5 aspect-[4/3]" },
  { src: "/images/gal-3.webp", alt: "Sade ve şık bir bekleme alanı", label: "Bekleme alanı", cls: "md:col-span-5 aspect-[4/3]" },
  { src: "/images/gal-2.webp", alt: "Palmiye bitkili aydınlık klinik girişi", label: "Giriş alanı", cls: "md:col-span-4 aspect-[3/4]" },
  { src: "/images/gal-5.webp", alt: "Cam bölmeli minimal koridor", label: "Mimari detay", cls: "md:col-span-4 aspect-[3/4]" },
  { src: "/images/gal-6.webp", alt: "Ahşap detaylı ferah iç mekân", label: "İç mekân", cls: "md:col-span-4 aspect-[3/4]" },
];

export default function ClinicGallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const step = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);

  useEffect(() => {
    if (idx === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", key);
    document.documentElement.style.overflow = "hidden";
    (window as unknown as { __lenis?: { stop(): void } }).__lenis?.stop();
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", key);
      document.documentElement.style.overflow = "";
      (window as unknown as { __lenis?: { start(): void } }).__lenis?.start();
      lastFocus.current?.focus();
    };
  }, [idx, step]);

  return (
    <section id="klinik" className="section-y bg-warm">
      <div className="container-x">
        <div className="mb-14 max-w-3xl">
          <p data-reveal className="eyebrow mb-6">KLİNİĞİMİZ</p>
          <Split text="Konforunuz İçin Tasarlanmış *Modern* Alanlar." className="h-display text-[clamp(2.2rem,5vw,4.5rem)]" />
          <p data-reveal className="mt-6 text-[13px] text-mute">Görseller demo amaçlı stok fotoğraflardır; yayın öncesi kliniğe ait gerçek fotoğraflarla değiştirilecektir.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setIdx(i);
              }}
              aria-label={`${p.label} görselini büyüt`}
              className={`group relative overflow-hidden bg-charcoal text-left ${p.cls} ${i === 0 ? "col-span-2" : ""}`}
            >
              <div data-mask className="absolute inset-0">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width:768px) 45vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
              <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                {p.label}
              </span>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/50 bg-ink/30 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <Expand size={14} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Galeri" className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm" onClick={() => setIdx(null)}>
          <button ref={closeRef} type="button" aria-label="Kapat" onClick={() => setIdx(null)} className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center border border-white/30 text-white hover:bg-gold hover:text-white">
            <X size={20} />
          </button>
          <button type="button" aria-label="Önceki" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center text-white hover:text-gold md:left-8">
            <ChevronLeft size={32} />
          </button>
          <div className="relative h-[80vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image key={photos[idx].src} src={photos[idx].src} alt={photos[idx].alt} fill sizes="100vw" className="animate-[pageIn_.6s_ease_both] object-contain" />
          </div>
          <button type="button" aria-label="Sonraki" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center text-white hover:text-gold md:right-8">
            <ChevronRight size={32} />
          </button>
          <p className="absolute bottom-5 text-[12px] uppercase tracking-[0.2em] text-white/70">{photos[idx].label} · {idx + 1}/{photos.length}</p>
        </div>
      )}
    </section>
  );
}
