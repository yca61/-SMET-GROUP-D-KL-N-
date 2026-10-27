import Split from "./Split";

const steps = [
  { n: "01", t: "İletişime Geçin", d: "Bizimle iletişim kurarak randevu talebinizi iletin." },
  { n: "02", t: "Muayene", d: "Hekim değerlendirmesi ile ağız ve diş sağlığınız incelenir." },
  { n: "03", t: "Tedavi Planlaması", d: "İhtiyaçlarınıza yönelik tedavi seçenekleri değerlendirilir." },
  { n: "04", t: "Tedavi ve Takip", d: "Planlanan tedavi süreci ve gerekli kontroller gerçekleştirilir." },
];

export default function TreatmentTimeline() {
  return (
    <section id="surec" className="section-y bg-warm">
      <div className="container-x">
        <div className="mb-20 max-w-3xl">
          <p data-reveal className="eyebrow mb-6">TEDAVİ SÜRECİ</p>
          <Split text="Gülüşünüz İçin İlk Adım *Çok Kolay.*" className="h-display text-[clamp(2.2rem,5vw,4.5rem)]" />
        </div>

        <div data-timeline className="relative">
          {/* dikey (mobil) / yatay (masaüstü) çizgi */}
          <div aria-hidden className="absolute bottom-0 left-[27px] top-0 w-px bg-ink/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[27px] lg:h-px lg:w-auto" />
          <div aria-hidden data-timeline-fill className="absolute bottom-0 left-[27px] top-0 w-px origin-top bg-gold lg:bottom-auto lg:left-0 lg:right-0 lg:top-[27px] lg:h-px lg:w-auto lg:origin-left" />
          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((s) => (
              <li key={s.n} data-step className="step flex gap-6 lg:block">
                <span className="step-dot relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-gold bg-warm font-display text-[14px] font-bold text-gold">
                  {s.n}
                </span>
                <div className="step-body lg:mt-8">
                  <h3 className="font-display text-[22px] font-bold">{s.t}</h3>
                  <p className="mt-3 max-w-[32ch] leading-relaxed text-charcoal/70">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
