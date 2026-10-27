import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import Split from "./Split";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section data-hero className="relative flex items-start md:min-h-[100svh] overflow-hidden bg-ink md:items-center">
      <div data-hero-bg className="absolute inset-x-0 top-0 h-[84vw] md:inset-0 md:-bottom-[10%] md:h-auto">
        <div data-hero-img className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="Aydınlık ve modern bir diş kliniği iç mekânı: iki muayene koltuğu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center] md:object-[65%_center]"
          />
        </div>
      </div>
      <div className="hero-shade absolute inset-0" />
      {/* ince altın ızgara çizgileri */}
      <span aria-hidden className="float-ring right-[12%] top-[22%] hidden h-40 w-40 lg:block" />
      <span aria-hidden className="float-ring r2 bottom-[24%] right-[34%] hidden h-24 w-24 lg:block" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-gold/20 lg:block" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-[8%] hidden w-px bg-gold/20 lg:block" />

      <div data-hero-content className="container-x relative z-10 pb-12 pt-[calc(84vw-6px)] md:pb-28 md:pt-40">
        <p data-reveal data-delay="0.2" className="eyebrow mb-4 !text-[11px] md:mb-7">
          İSMET GROUP AĞIZ VE DİŞ SAĞLIĞI MERKEZİ
        </p>
        <Split
          as="h1"
          delay={0.35}
          text="Gülüşünüze *Değer Katan* Bir Dokunuş."
          className="h-display max-w-[15ch] text-[clamp(2.4rem,8.4vw,7.5rem)] text-white [&_.ed]:text-[1.08em] [&_.ed]:leading-[0.9]"
        />
        <p data-reveal data-delay="1.1" className="mt-5 max-w-[46ch] text-[15px] md:mt-8 leading-relaxed text-white/75 md:text-[18px]">
          Modern diş hekimliği yaklaşımlarını, hasta odaklı hizmet anlayışıyla buluşturuyoruz.
        </p>
        <div data-reveal data-delay="1.35" className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-4">
          <Magnetic>
            <Link href="/#randevu" className="btn btn-gold w-full sm:w-auto"><span className="btn-text">Randevu Oluştur</span> <span className="btn-arrow btn-text">→</span></Link>
          </Magnetic>
          <Magnetic>
            <Link href="/#tedaviler" className="btn btn-line w-full sm:w-auto"><span className="btn-text">Tedavilerimizi Keşfedin</span> <span className="btn-arrow btn-text">↓</span></Link>
          </Magnetic>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/10 bg-ink/40 backdrop-blur-md md:block">
        <div className="container-x flex h-16 items-center justify-between text-[13px] text-white/70">
          <span className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> {SITE.address}</span>
          <a href={SITE.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold"><Phone size={14} className="text-gold" /> {SITE.phone}</a>
          <span className="w-[140px]" />
        </div>
      </div>

      <div className="absolute bottom-5 right-5 z-20 hidden md:flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/70 md:bottom-4 md:right-12">
        <span>Kaydır</span>
        <span className="scroll-cue relative block h-14 w-px overflow-hidden bg-white/25" />
      </div>
    </section>
  );
}
