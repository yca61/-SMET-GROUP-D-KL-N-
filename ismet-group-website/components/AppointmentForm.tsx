"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { treatments } from "@/lib/treatments";
import { WHATSAPP_URL } from "@/lib/site";

type State = { status: "idle" | "sending" | "ok" | "demo" | "error"; message?: string };

const field =
  "w-full border-0 border-b border-white/25 bg-transparent py-3.5 text-[16px] text-white placeholder:text-white/40 transition-colors focus:border-gold focus:outline-none focus:ring-0";

export default function AppointmentForm({ defaultTreatment = "" }: { defaultTreatment?: string }) {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.saved) {
        setState({ status: "ok", message: "Talebiniz alındı. Ekibimiz sizinle iletişime geçecektir." });
        form.reset();
      } else if (res.status === 503) {
        setState({ status: "demo", message: json.message });
      } else {
        setState({ status: "error", message: json.message ?? "Talebiniz iletilemedi. Lütfen telefonla veya WhatsApp ile ulaşın." });
      }
    } catch {
      setState({ status: "error", message: "Bağlantı hatası. Lütfen telefonla veya WhatsApp ile ulaşın." });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="space-y-7" aria-describedby="form-status">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Ad Soyad</span>
          <input name="name" type="text" required autoComplete="name" minLength={3} maxLength={80} placeholder="Adınız Soyadınız" className={field} />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Telefon</span>
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9+\s()\-]{10,20}" placeholder="05xx xxx xx xx" className={field} />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">İlgilenilen Tedavi</span>
          <select name="treatment" defaultValue={defaultTreatment} required className={`${field} [&>option]:text-ink`}>
            <option value="" disabled>Seçiniz</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.title}>{t.title}</option>
            ))}
            <option value="Henüz karar vermedim">Henüz karar vermedim</option>
          </select>
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Tercih Edilen Tarih</span>
          <input name="date" type="date" required min={new Date().toISOString().slice(0, 10)} className={`${field} [color-scheme:dark]`} />
        </label>
      </div>

      {/* bot tuzağı */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <label className="flex items-start gap-3 text-[13px] leading-relaxed text-white/65">
        <input name="consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-[#1A9BD7]" />
        <span>
          <Link href="/kvkk" target="_blank" className="text-champagne underline underline-offset-4">KVKK Aydınlatma Metni</Link>&apos;ni okudum; iletişim bilgilerimin randevu talebimin yanıtlanması amacıyla işlenmesini kabul ediyorum.
        </span>
      </label>
      <p className="text-[12px] text-white/40">Lütfen bu forma sağlık bilgisi yazmayınız; ayrıntılar muayenede alınır.</p>

      <button type="submit" disabled={state.status === "sending"} className="btn btn-gold w-full disabled:opacity-60 sm:w-auto">
        {state.status === "sending" ? "Gönderiliyor…" : "Talep Gönder"}
      </button>

      <div id="form-status" role="status" aria-live="polite" className="min-h-[1.5rem] text-[14px]">
        {state.status === "ok" && <p className="border border-gold/60 p-4 text-champagne">{state.message}</p>}
        {state.status === "demo" && (
          <p className="border border-white/25 p-4 text-white/80">
            <strong className="text-gold">Demo modu:</strong> {state.message} Talebiniz kaydedilmedi. Randevu için{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-champagne underline underline-offset-4">WhatsApp</a>{" "}
            veya telefonla ulaşabilirsiniz.
          </p>
        )}
        {state.status === "error" && <p className="border border-red-400/60 p-4 text-red-200">{state.message}</p>}
      </div>
    </form>
  );
}
