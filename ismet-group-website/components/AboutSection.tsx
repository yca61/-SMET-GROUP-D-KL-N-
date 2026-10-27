import Image from "next/image";
import { HeartHandshake, Building2, ClipboardList } from "lucide-react";
import Split from "./Split";

const points = [
  { icon: HeartHandshake, label: "Hasta odaklı yaklaşım" },
  { icon: Building2, label: "Modern klinik ortamı" },
  { icon: ClipboardList, label: "Kişiye özel tedavi planlaması" },
];

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="section-y bg-warm">
      <div className="container-x grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:col-span-6">
          <div data-mask className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            <div data-parallax="0.06" className="absolute inset-x-0 -inset-y-[6%]">
              <Image
                src="/images/about.webp"
                alt="Aydınlık, modern bir diş kliniği muayene odası"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover object-[40%_center]"
              />
            </div>
          </div>
          <div aria-hidden className="absolute -bottom-5 -right-5 -z-10 hidden h-40 w-40 border border-gold/60 lg:block" />
        </div>

        <div className="lg:col-span-6 lg:pt-16">
          <p data-reveal className="eyebrow mb-6">BİZİ YAKINDAN TANIYIN</p>
          <Split text="Sağlıklı Gülüşlerin Arkasında *Güven* Var." className="h-display text-[clamp(2.2rem,4.6vw,4rem)]" />
          <p data-reveal className="mt-8 max-w-[56ch] text-[17px] leading-[1.85] text-charcoal/80">
            İSMET GROUP Ağız ve Diş Sağlığı Merkezi olarak modern teknolojiler, güncel diş hekimliği uygulamaları ve hasta odaklı yaklaşımımızla ağız ve diş sağlığı hizmetleri sunuyoruz. Her hastamızın ihtiyaçlarını bireysel olarak değerlendiriyor, konforlu bir tedavi deneyimi hedefliyoruz.
          </p>
          <ul data-stagger className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {points.map(({ icon: Icon, label }) => (
              <li key={label} className="group flex items-center gap-5 py-5">
                <span className="flex h-12 w-12 items-center justify-center border border-gold/60 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:text-white">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <span className="font-display text-[18px] font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
