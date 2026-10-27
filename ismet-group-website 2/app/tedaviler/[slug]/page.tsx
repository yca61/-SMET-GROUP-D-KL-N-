import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { getTreatment, treatments, MEDICAL_NOTE } from "@/lib/treatments";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import Split from "@/components/Split";
import Magnetic from "@/components/Magnetic";
import { FaqList } from "@/components/FAQ";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTreatment((await params).slug);
  if (!t) return {};
  return {
    title: t.title,
    description: t.metaDescription,
    alternates: { canonical: `/tedaviler/${t.slug}` },
    openGraph: { title: `${t.title} | İSMET GROUP`, description: t.metaDescription, images: [t.image] },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const t = getTreatment((await params).slug);
  if (!t) notFound();
  const others = treatments.filter((x) => x.slug !== t.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <header className="relative flex min-h-[70svh] items-end overflow-hidden bg-ink pb-16 pt-40">
        <Image src={t.image} alt={t.alt} fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="container-x relative">
          <Link href="/#tedaviler" className="mb-8 flex w-fit items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-white/70 hover:text-gold">
            <ArrowLeft size={14} /> Tüm Tedaviler
          </Link>
          <p className="eyebrow mb-5">TEDAVİLERİMİZ</p>
          <Split as="h1" text={t.title} delay={0.1} className="h-display max-w-[18ch] text-[clamp(2.6rem,7vw,6rem)] text-white" />
        </div>
      </header>

      <section className="section-y bg-warm">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p data-reveal className="font-serif text-[26px] italic leading-snug text-gold md:text-[32px]">{t.short}</p>
            <p data-reveal className="mt-8 text-[18px] leading-[1.85] text-charcoal/80">{t.intro}</p>
            <ul data-stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 border-t border-ink/10 pt-4">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold" />
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div data-reveal className="bg-ink p-8 text-white md:p-10 lg:sticky lg:top-28">
              <h2 className="font-display text-[24px] font-bold">Randevu Talep Edin</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">Hekim değerlendirmesi için ekibimizle iletişime geçin.</p>
              <div className="mt-7 grid gap-3">
                <Magnetic className="block"><Link href="/#randevu" className="btn btn-gold w-full"><span className="btn-text">Randevu Formu</span> <span className="btn-arrow btn-text">→</span></Link></Magnetic>
                <a href={SITE.phoneHref} className="btn btn-line">{SITE.phone}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line">WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-[#E3F0F4]">
        <div className="container-x">
          <p data-reveal className="eyebrow mb-6">SÜREÇ</p>
          <Split text="Süreç Nasıl *İşler?*" className="h-display mb-14 text-[clamp(2rem,4.4vw,3.75rem)]" />
          <ol data-stagger className="grid gap-px bg-ink/10 md:grid-cols-3">
            {t.process.map((p, i) => (
              <li key={p.title} className="bg-[#E3F0F4] p-8 md:p-10">
                <span className="font-serif text-[48px] italic text-gold">0{i + 1}</span>
                <h3 className="mt-2 font-display text-[20px] font-bold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal/70">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-warm">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p data-reveal className="eyebrow mb-6">SIK SORULAN SORULAR</p>
            <Split text="Merak *Edilenler*" className="h-display text-[clamp(2rem,4.4vw,3.75rem)]" />
            <p data-reveal className="mt-8 text-[13px] leading-relaxed text-mute">{MEDICAL_NOTE}</p>
          </div>
          <div className="lg:col-span-7"><FaqList items={t.faqs} /></div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white">
        <div className="container-x">
          <h2 data-reveal className="font-display text-[26px] font-bold">Diğer Tedavilerimiz</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/tedaviler/${o.slug}`} className="group border border-white/15 p-7 transition-colors hover:border-gold">
                <h3 className="font-display text-[19px] font-semibold">{o.title}</h3>
                <p className="mt-2 text-[14px] text-white/60">{o.short}</p>
                <span className="mt-5 inline-block text-[11px] uppercase tracking-[0.2em] text-gold">İncele →</span>
              </Link>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/#randevu" className="btn btn-gold"><span className="btn-text">Randevu Al</span> <span className="btn-arrow btn-text">→</span></Link>
          </div>
        </div>
      </section>
    </article>
  );
}
