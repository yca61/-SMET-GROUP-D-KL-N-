import { treatments } from "@/lib/treatments";

// Sonsuz kayan tedavi bandı (saf CSS).
export default function Marquee() {
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden} className="marquee-row flex shrink-0 items-center">
      {treatments.map((t) => (
        <li key={t.title} className="flex items-center whitespace-nowrap">
          <span className="px-8 font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] italic text-white/85">{t.title}</span>
          <span className="tooth-dot text-gold">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-gold/25 bg-ink py-6" aria-label="Tedavilerimiz">
      <div className="marquee flex w-max">
        {row()}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
