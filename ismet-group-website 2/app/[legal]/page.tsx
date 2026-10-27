import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LEGAL, SITE } from "@/lib/site";

type Props = { params: Promise<{ legal: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return LEGAL.map((l) => ({ legal: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).legal;
  const l = LEGAL.find((x) => x.slug === slug);
  return l ? { title: l.label, alternates: { canonical: `/${l.slug}` }, robots: { index: false } } : {};
}

export default async function LegalPage({ params }: Props) {
  const slug = (await params).legal;
  const l = LEGAL.find((x) => x.slug === slug);
  if (!l) notFound();
  return (
    <section className="bg-warm pb-28 pt-40">
      <div className="container-x max-w-3xl">
        <p className="eyebrow mb-5">YASAL</p>
        <h1 className="h-display text-[clamp(2rem,5vw,3.5rem)]">{l.label}</h1>
        <div className="my-8 border border-gold/60 bg-gold/10 p-5 text-[14px] leading-relaxed">
          <strong>Taslak / Placeholder:</strong> Bu sayfa yer tutucudur. Yayın öncesinde {SITE.name} veri sorumlusu bilgileri ve hukuk danışmanı onaylı metin ile değiştirilmelidir (6698 sayılı KVKK ve ilgili mevzuat).
        </div>
        <div className="legal">
          <h2>Veri sorumlusu</h2>
          <p>{SITE.name} {SITE.tagline}, {SITE.address}. Telefon: {SITE.phone}. (Unvan, adres, MERSİS/VERBİS bilgileri onaylı metinde yer alacaktır.)</p>
          <h2>Bu sitede işlenen veriler</h2>
          <p>Randevu talep formu aracılığıyla yalnızca ad soyad, telefon, ilgilenilen tedavi ve tercih edilen tarih bilgileri talep edilir. Sağlık verisi talep edilmez.</p>
          <h2>Haklarınız</h2>
          <p>KVKK madde 11 kapsamındaki haklarınıza ilişkin ayrıntılı bilgi onaylı metinde yer alacaktır.</p>
        </div>
      </div>
    </section>
  );
}
