import { Phone, MessageCircle } from "lucide-react";
import { MapPin } from "lucide-react";
import { DIRECTIONS_URL, SITE, WHATSAPP_URL } from "@/lib/site";
import Split from "./Split";
import Magnetic from "./Magnetic";
import AppointmentForm from "./AppointmentForm";

export default function AppointmentSection() {
  return (
    <section id="randevu" className="relative overflow-hidden bg-ink py-24 text-white md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="float-ring -left-10 top-[30%] h-56 w-56" />
        <span className="float-ring r2 bottom-[8%] right-[10%] h-36 w-36" />
        <div className="absolute inset-y-0 left-[8%] w-px bg-gold/15" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-gold/15" />
        <div className="absolute inset-x-0 top-[14%] h-px bg-gold/15" />
      </div>
      <div id="iletisim" className="container-x relative grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <p data-reveal className="eyebrow mb-6">RANDEVU & İLETİŞİM</p>
          <Split text="Sağlıklı Bir Gülüş İçin *İlk Adımı* Atın." className="h-display text-[clamp(2.4rem,5.4vw,5rem)]" />
          <p data-reveal className="mt-8 max-w-[44ch] text-[17px] leading-relaxed text-white/65">
            Randevu ve detaylı bilgi için bizimle iletişime geçebilirsiniz.
          </p>
          <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Magnetic><a href={SITE.phoneHref} className="btn btn-line w-full sm:w-auto"><Phone size={16} /> Telefonla Ara</a></Magnetic>
            <Magnetic><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full sm:w-auto"><MessageCircle size={16} /> WhatsApp&apos;tan Randevu Al</a></Magnetic>
          </div>
          <a
            data-reveal
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-12 block overflow-hidden border border-gold/30 p-6 transition-colors hover:border-gold"
          >
            <span aria-hidden className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(26,155,215,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(26,155,215,0.25)_1px,transparent_1px)] [background-size:36px_36px]" />
            <span className="relative flex items-center gap-4">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center bg-gold text-white">
                <MapPin size={22} />
                <span aria-hidden className="absolute inset-0 animate-ping border border-gold" />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-gold">Konum · {SITE.city}</span>
                <span className="mt-1 block text-[15px] text-white/85">{SITE.address}</span>
                <span className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-champagne transition-transform group-hover:translate-x-1">Yol Tarifi Al →</span>
              </span>
            </span>
          </a>
          <dl data-reveal className="mt-10 space-y-5 border-t border-white/10 pt-8 text-[15px]">
            <div><dt className="text-[11px] uppercase tracking-[0.2em] text-gold">Telefon</dt><dd className="mt-1 text-white/80">{SITE.phone}</dd></div>
            <div><dt className="text-[11px] uppercase tracking-[0.2em] text-gold">Adres</dt><dd className="mt-1 text-white/80">{SITE.address}</dd></div>
            <div><dt className="text-[11px] uppercase tracking-[0.2em] text-gold">Hekim</dt><dd className="mt-1 text-white/80">{SITE.doctor}</dd></div>
          </dl>
        </div>
        <div className="lg:col-span-6">
          <div data-reveal className="border border-gold/30 bg-white/[0.03] p-7 md:p-12">
            <h3 className="mb-2 font-display text-[26px] font-bold">Randevu Talep Formu</h3>
            <p className="mb-9 text-[14px] text-white/50">Formu doldurun, ekibimiz sizinle iletişime geçsin.</p>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
