export const SITE = {
  name: "İSMET GROUP",
  tagline: "Ağız ve Diş Sağlığı Merkezi",
  doctor: "Dt. Onur Arsu",
  phone: "+90 545 224 45 12",
  phoneHref: "tel:+905452244512",
  address: "Yeşiltepe Mahallesi, 1. Cadde No:28/A, Ağrı",
  city: "Ağrı",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Doğrulanmış konum bağlantısı verildiğinde .env içindeki NEXT_PUBLIC_MAPS_URL doldurulur.
  mapsUrl: process.env.NEXT_PUBLIC_MAPS_URL ?? "",
};

export const WHATSAPP_MESSAGE =
  "Merhaba, İSMET GROUP Ağız ve Diş Sağlığı Merkezi için randevu almak istiyorum.";
export const WHATSAPP_URL = `https://wa.me/905452244512?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Tedavilerimiz", href: "/#tedaviler" },
  { label: "Hekimlerimiz", href: "/#hekim" },
  { label: "Kliniğimiz", href: "/#klinik" },
  { label: "Sık Sorulan Sorular", href: "/#sss" },
  { label: "İletişim", href: "/#iletisim" },
];

export const LEGAL = [
  { slug: "kvkk", label: "KVKK Aydınlatma Metni" },
  { slug: "gizlilik", label: "Gizlilik Politikası" },
  { slug: "cerez", label: "Çerez Politikası" },
];

export const FAQS = [
  {
    q: "İlk muayenede neler yapılır?",
    a: "İlk muayenede hekim şikâyetlerinizi dinler, ağız ve diş sağlığınızı klinik olarak değerlendirir. Gerekli görülürse görüntüleme istenebilir ve size uygun tedavi seçenekleri hakkında bilgi verilir.",
  },
  {
    q: "İmplant tedavisi nasıl planlanır?",
    a: "İmplant planlaması, hekim muayenesi ve gerekli görüntülemelerin ardından çene kemiği ve diş eti durumunun değerlendirilmesiyle yapılır. Uygunluk her hasta için bireysel olarak belirlenir.",
  },
  {
    q: "Zirkonyum kaplama nedir?",
    a: "Zirkonyum kaplama, zirkonyum esaslı bir seramik malzemeden hazırlanan ve dişin üzerine uygulanan bir restorasyon türüdür. Uygulanıp uygulanmayacağına hekim muayenesi sonrasında karar verilir.",
  },
  {
    q: "Diş taşı temizliği ne işe yarar?",
    a: "Diş taşı temizliği (detartraj), diş yüzeyinde ve diş eti çevresinde biriken plak ve tartarın uzaklaştırılmasını amaçlar. Diş eti sağlığının korunmasına destek olur; düzenli kontrol aralıklarını hekiminiz belirler.",
  },
  {
    q: "Kanal tedavisi hangi durumlarda uygulanır?",
    a: "Dişin sinir ve damar dokusunun (pulpa) çürük, travma veya enfeksiyon nedeniyle etkilendiği durumlarda hekim kanal tedavisini önerebilir. Karar, klinik muayene ve görüntülemeye göre verilir.",
  },
  {
    q: "Randevu nasıl oluşturabilirim?",
    a: "Bizi telefonla arayabilir, WhatsApp üzerinden yazabilir veya sitedeki randevu talep formunu kullanabilirsiniz. Ekibimiz sizinle iletişime geçerek uygun zamanı birlikte belirler.",
  },
];

export const DIRECTIONS_URL =
  SITE.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.name} ${SITE.tagline} ${SITE.address}`)}`;
