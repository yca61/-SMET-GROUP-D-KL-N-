# İSMET GROUP Ağız ve Diş Sağlığı Merkezi — Web Sitesi

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Lenis · Lucide

## Çalıştırma
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Vercel'e doğrudan yayınlanabilir (ek ayar gerekmez).

### Netlify
Repoyu Netlify'a bağlayın; `netlify.toml` hazırdır (build: `npm run build`, Node 20). **Publish directory boş bırakılmalıdır** (Netlify Next.js'i otomatik algılar); Site settings → Build & deploy'da "Publish directory" doluysa (ör. `out`, `dist`, `.next`) silin. Proje repo kökünde değilse **Base directory** alanına klasör adını yazın. Environment variables: `NEXT_PUBLIC_SITE_URL`, `APPOINTMENT_WEBHOOK_URL`, `NEXT_PUBLIC_MAPS_URL` (Site settings → Environment variables). Randevu API'si (`/api/appointment`) Netlify Function olarak çalışır. `.env.example` dosyasını `.env.local` olarak kopyalayıp doldurun.

## Düzenleme
- İletişim bilgileri, menü, SSS, WhatsApp mesajı: `lib/site.ts`
- Tedaviler (başlık, açıklama, süreç, SSS, görsel): `lib/treatments.ts` → detay sayfaları otomatik üretilir
- Görseller: `public/images/*.webp` (aynı dosya adıyla değiştirmek yeterli). 
- Bölümler: `components/`

## Teslim öncesi eksik gereksinimler (kontrol listesi)
- [ ] **Gerçek klinik fotoğrafları** — tüm görseller Unsplash stok demo görselleridir (`public/images`). Yayın öncesi değiştirilmeli; Unsplash lisansı/atıf koşulları ayrıca gözden geçirilmeli.
- [x] **Dt. Onur Arsu portresi** — müşterinin verdiği görsel `public/images/doktor.webp` olarak eklendi (kullanım/yayın izni teyit edilmeli).
- [ ] **Onaylı hukuki metinler** — `/kvkk`, `/gizlilik`, `/cerez` taslak/yer tutucu; hukuk danışmanı onaylı metinle değiştirilmeli. Çerez onay banner'ı gerekirse (analitik eklenirse) eklenmeli.
- [ ] **Randevu formu altyapısı** — `APPOINTMENT_WEBHOOK_URL` tanımlanana kadar form demo modunda çalışır ve başarı mesajı **göstermez** (talep kaydedilmez). Webhook (e-posta/CRM/Make vb.) bağlanmalı; KVKK saklama süresi ve veri işleyen sözleşmesi netleştirilmeli.
- [ ] **İlçe ve doğrulanmış Google Maps bağlantısı** — şehir (Ağrı) eklendi; ilçe bilgisi verilmedi, schema.org adresinde yok. `NEXT_PUBLIC_MAPS_URL` doldurulunca footer'da harita bağlantısı görünür.
- [ ] **Alan adı** — `NEXT_PUBLIC_SITE_URL` (canonical, sitemap, Open Graph).
- [ ] **Sosyal medya hesapları** — verilmediği için bağlantı eklenmedi.
- [ ] **Sağlık mevzuatı incelemesi** — tüm tıbbi içerik ve görseller yürürlükteki sağlık hizmetleri tanıtım mevzuatı açısından hekim/hukukçu tarafından onaylanmalı.
- [ ] Open Graph için özel paylaşım görseli (şu an hero görseli kullanılıyor).
- [ ] Yayın sonrası Lighthouse / PageSpeed ölçümü.
