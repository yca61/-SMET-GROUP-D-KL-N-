import { NextResponse } from "next/server";
import { treatments } from "@/lib/treatments";

export const runtime = "nodejs";

const allowed = new Set([...treatments.map((t) => t.title), "Henüz karar vermedim"]);

// Randevu talebi: yalnızca ad, telefon, tedavi ve tarih alınır (sağlık verisi toplanmaz).
// APPOINTMENT_WEBHOOK_URL tanımlı değilse talep KAYDEDİLMEZ ve 503 döner (form demo modunda çalışır).
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ saved: false, message: "Geçersiz istek." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ saved: true }); // bot tuzağı

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const treatment = String(body.treatment ?? "");
  const date = String(body.date ?? "");
  const consent = body.consent === "on" || body.consent === true;

  if (name.length < 3 || name.length > 80 || !/^[0-9+\s()\-]{10,20}$/.test(phone) || !allowed.has(treatment) || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !consent) {
    return NextResponse.json({ saved: false, message: "Lütfen tüm alanları doğru doldurun ve onay kutusunu işaretleyin." }, { status: 422 });
  }

  const hook = process.env.APPOINTMENT_WEBHOOK_URL;
  if (!hook) {
    return NextResponse.json({ saved: false, message: "Randevu formu altyapısı henüz bağlanmadı." }, { status: 503 });
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, treatment, date, consentAt: new Date().toISOString(), source: "ismet-web" }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ saved: true });
  } catch {
    return NextResponse.json({ saved: false, message: "Talebiniz şu anda iletilemedi." }, { status: 502 });
  }
}
