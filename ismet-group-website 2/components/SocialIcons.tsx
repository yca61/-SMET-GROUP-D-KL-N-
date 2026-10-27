"use client";

import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { useState } from "react";

// DEMO: kurumsal hesaplar verilene kadar ikonlar bağlantısızdır (sahte profile yönlendirmez).
const items = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "YouTube", Icon: Youtube },
  { label: "WhatsApp Business", Icon: MessageCircle },
];

export default function SocialIcons() {
  const [tip, setTip] = useState("");
  return (
    <div>
      <ul className="flex gap-3">
        {items.map(({ label, Icon }) => (
          <li key={label}>
            <button
              type="button"
              aria-label={`${label} (demo)`}
              onClick={() => setTip(`${label}: demo — kurumsal hesap bağlantısı eklenecek.`)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/80 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-white"
            >
              <Icon size={18} strokeWidth={1.5} />
            </button>
          </li>
        ))}
      </ul>
      <p role="status" className="mt-3 min-h-[1.25rem] text-[11px] text-white/40">{tip || "Sosyal medya hesapları demo amaçlıdır."}</p>
    </div>
  );
}
