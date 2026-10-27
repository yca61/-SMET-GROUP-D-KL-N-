import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/lib/treatments";
import Split from "./Split";

// Asimetrik 12 sütunlu yerleşim
const layout = [
  "lg:col-span-7 lg:aspect-[16/11]",
  "lg:col-span-5 lg:aspect-auto",
  "lg:col-span-4 lg:aspect-[4/5]",
  "lg:col-span-4 lg:aspect-[4/5]",
  "lg:col-span-4 lg:aspect-[4/5]",
  "lg:col-span-5 lg:aspect-[16/11]",
  "lg:col-span-7 lg:aspect-[16/11]",
];

export default function ServicesGrid() {
  return (
    <section id="tedaviler" className="section-y bg-ink text-white">
      <div className="container-x">
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p data-reveal className="eyebrow mb-6">TEDAVİLERİMİZ</p>
            <Split text="Her Gülüş, *Özenli* Bir Yaklaşımı Hak Eder." className="h-display text-[clamp(2.2rem,5vw,4.5rem)]" />
          </div>
          <p data-reveal className="text-[16px] leading-relaxed text-white/60 lg:col-span-4">
            Ağız ve diş sağlığınıza yönelik tedavi hizmetlerimizi keşfedin.
          </p>
        </div>

        <div data-stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {treatments.map((t, i) => (
            <Link
              key={t.slug}
              href={`/tedaviler/${t.slug}`}
              className={`t-card group block aspect-[4/5] sm:aspect-[4/3] ${layout[i]}`}
              aria-label={`${t.title} – incele`}
            >
              <Image
                src={t.image}
                alt={t.alt}
                fill
                sizes="(min-width:1024px) 40vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="t-shade absolute inset-0 z-[1]" />
              <div className="t-body absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <span className="mb-3 block text-[11px] font-semibold tracking-[0.2em] text-gold">0{i + 1}</span>
                  <h3 className="font-display text-[22px] font-bold leading-tight md:text-[26px]">{t.title}</h3>
                  <p className="mt-2 max-w-[38ch] text-[14px] leading-relaxed text-white/70">{t.short}</p>
                  <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne">İncele</span>
                </div>
                <span className="t-arrow flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
