import Image from "next/image";
import { SITE } from "@/lib/site";
import Split from "./Split";

export default function DoctorSection() {
  return (
    <section id="hekim" className="section-y overflow-hidden bg-[#E3F0F4]">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-24">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <p data-reveal className="eyebrow mb-6">HEKİMİMİZİ TANIYIN</p>
          <Split as="h2" text={SITE.doctor} className="h-display text-[clamp(2.8rem,7vw,6rem)]" />
          <div data-reveal className="my-6 flex items-center gap-4">
            <span className="h-px w-16 bg-gold" />
            <p className="font-serif text-[26px] italic text-gold">Diş Hekimi</p>
          </div>
          <p data-reveal className="max-w-[50ch] text-[17px] leading-[1.85] text-charcoal/80">
            Hastalarının ağız ve diş sağlığı ihtiyaçlarını bireysel olarak değerlendiren, tedavi sürecinde bilgilendirme ve hasta konforuna önem veren yaklaşım.
          </p>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <div data-mask className="group relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden bg-ink">
            <Image
              src="/images/doktor.webp"
              alt="Dt. Onur Arsu, klinik ortamında beyaz önlükle"
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div aria-hidden className="absolute inset-5 border border-gold/50 transition-all duration-700 group-hover:inset-3" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
