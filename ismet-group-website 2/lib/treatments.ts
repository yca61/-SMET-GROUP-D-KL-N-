export type Treatment = {
  slug: string;
  title: string;
  short: string;
  image: string;
  alt: string;
  intro: string;
  highlights: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  metaDescription: string;
};

const note =
  "Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; tanı ve tedavi için hekim muayenesi gereklidir. Sonuçlar kişiden kişiye değişebilir.";
export const MEDICAL_NOTE = note;

export const treatments: Treatment[] = [
  {
    slug: "genel-dis-muayenesi",
    title: "Genel Diş Muayenesi",
    short: "Ağız ve diş sağlığınızın hekim tarafından bütüncül değerlendirilmesi.",
    image: "/images/svc-muayene.webp",
    alt: "Diş hekimi ağız aynası ile muayene yaparken",
    intro:
      "Genel diş muayenesi, dişlerinizin, diş etlerinizin ve ağız dokularınızın mevcut durumunun değerlendirildiği ilk ve en temel adımdır. Düzenli kontroller, olası sorunların erken fark edilmesine yardımcı olur.",
    highlights: ["Ağız içi klinik değerlendirme", "Şikâyetlerin dinlenmesi", "Gerekirse görüntüleme önerisi", "Kişiye özel bilgilendirme"],
    process: [
      { title: "Görüşme", text: "Şikâyetleriniz ve beklentileriniz dinlenir." },
      { title: "Klinik muayene", text: "Dişler, diş etleri ve ağız dokuları incelenir." },
      { title: "Değerlendirme", text: "Gerekli görülürse ek inceleme istenir ve sonuçlar sizinle paylaşılır." },
    ],
    faqs: [
      { q: "Muayene ne kadar sürer?", a: "Süre, şikâyetlerinize ve gereken incelemelere göre değişir; hekim sizi bilgilendirecektir." },
      { q: "Ne sıklıkla kontrole gelmeliyim?", a: "Kontrol aralığı ağız sağlığınıza göre hekim tarafından belirlenir." },
    ],
    metaDescription: "İSMET GROUP Ağız ve Diş Sağlığı Merkezi'nde genel diş muayenesi hakkında bilgi alın ve randevu talebi oluşturun.",
  },
  {
    slug: "dis-temizligi",
    title: "Diş Temizliği (Detartraj)",
    short: "Diş taşı ve plak birikiminin profesyonel olarak uzaklaştırılması.",
    image: "/images/svc-detartraj.webp",
    alt: "Bambu diş fırçaları ve sade bir banyo kompozisyonu",
    intro:
      "Detartraj, diş yüzeyinde ve diş eti çevresinde zamanla biriken plak ve diş taşının özel aletlerle uzaklaştırılmasıdır. Ağız hijyeninin sürdürülmesine ve diş eti sağlığının desteklenmesine yardımcı olur.",
    highlights: ["Plak ve diş taşı uzaklaştırma", "Diş eti sağlığına destek", "Ağız bakımı önerileri", "Düzenli kontrol planı"],
    process: [
      { title: "Değerlendirme", text: "Diş ve diş eti durumunuz muayene edilir." },
      { title: "Temizlik", text: "Diş taşı ve plak, uygun ekipmanla uzaklaştırılır." },
      { title: "Bilgilendirme", text: "Evde ağız bakımı için öneriler paylaşılır." },
    ],
    faqs: [
      { q: "Temizlik dişlere zarar verir mi?", a: "Uygun teknikle yapıldığında dişlere zarar vermesi beklenmez; hassasiyetiniz varsa hekiminize bildirin." },
      { q: "Ne sıklıkla yaptırılmalı?", a: "Aralık, kişinin ağız sağlığına göre hekim tarafından belirlenir." },
    ],
    metaDescription: "Diş taşı temizliği (detartraj) nedir, nasıl uygulanır? İSMET GROUP Ağız ve Diş Sağlığı Merkezi'nden bilgi alın.",
  },
  {
    slug: "dolgu-tedavisi",
    title: "Dolgu Tedavisi",
    short: "Çürük veya hasar görmüş dişlerin restorasyonu.",
    image: "/images/svc-dolgu.webp",
    alt: "Diş hekimi diş röntgenini inceliyor",
    intro:
      "Dolgu tedavisi, çürük ya da kırık gibi nedenlerle madde kaybı oluşan dişlerin hekim tarafından temizlenip uygun bir malzeme ile onarılmasıdır. Amaç, dişin işlevini ve formunu korumaktır.",
    highlights: ["Çürük temizliği", "Uygun restoratif malzeme seçimi", "Diş formunun korunması", "Tedavi sonrası bilgilendirme"],
    process: [
      { title: "Muayene", text: "Dişin durumu klinik olarak ve gerekirse görüntüleme ile değerlendirilir." },
      { title: "Hazırlık", text: "Çürük doku temizlenir; konforunuz için gereken önlemler alınır." },
      { title: "Restorasyon", text: "Diş uygun malzeme ile restore edilir ve bitişi kontrol edilir." },
    ],
    faqs: [
      { q: "Dolgu sonrası hassasiyet olur mu?", a: "Bazı kişilerde kısa süreli hassasiyet görülebilir. Uzun sürerse hekiminize danışın." },
      { q: "Dolgu ne kadar dayanır?", a: "Dayanıklılık; malzeme, diş konumu ve bakım alışkanlıklarına göre değişir." },
    ],
    metaDescription: "Dolgu tedavisi hakkında genel bilgi alın ve İSMET GROUP Ağız ve Diş Sağlığı Merkezi'nden randevu talep edin.",
  },
  {
    slug: "kanal-tedavisi",
    title: "Kanal Tedavisi",
    short: "Dişin iç dokusunun etkilendiği durumlarda koruyucu tedavi yaklaşımı.",
    image: "/images/svc-kanal.webp",
    alt: "Diş hekimi hasta ile tedavi planını değerlendiriyor",
    intro:
      "Kanal tedavisi, diş içindeki sinir ve damar dokusunun (pulpa) çürük, travma veya enfeksiyon nedeniyle etkilendiği durumlarda hekimin önerebileceği bir tedavidir. Amaç, dişin ağızda korunmasına yardımcı olmaktır.",
    highlights: ["Hekim değerlendirmesi ve görüntüleme", "Kanalların temizlenmesi ve şekillendirilmesi", "Kanalların doldurulması", "Takip ve restorasyon planı"],
    process: [
      { title: "Teşhis", text: "Şikâyetler ve görüntüleme ile dişin durumu değerlendirilir." },
      { title: "Kanal temizliği", text: "Diş içi doku temizlenir, kanallar hazırlanır." },
      { title: "Doldurma ve takip", text: "Kanallar doldurulur; dişin restorasyonu ve kontrolleri planlanır." },
    ],
    faqs: [
      { q: "Tedavi ağrılı mıdır?", a: "Konforunuz için gerekli önlemler alınır. Tedavi öncesi ve sonrası yaşadığınız duyumları hekiminizle paylaşın." },
      { q: "Kaç seansta tamamlanır?", a: "Seans sayısı dişin durumuna göre hekim tarafından belirlenir." },
    ],
    metaDescription: "Kanal tedavisi hangi durumlarda uygulanır? İSMET GROUP Ağız ve Diş Sağlığı Merkezi'nde bilgi alın.",
  },
  {
    slug: "implant-tedavisi",
    title: "İmplant Tedavisi",
    short: "Eksik dişlerin yerine kalıcı çözüm seçeneklerinin değerlendirilmesi.",
    image: "/images/svc-implant.webp",
    alt: "Eldivenli el ile dijital diş görüntüleme ekranı",
    intro:
      "İmplant tedavisi, eksik dişlerin yerine çene kemiğine yerleştirilen yapay diş kökleri ve üzerine yapılan protezlerle ilgili bir seçenektir. Uygunluk; kemik yapısı, diş eti sağlığı ve genel sağlık durumuna göre bireysel olarak değerlendirilir.",
    highlights: ["Bireysel uygunluk değerlendirmesi", "Görüntüleme ile planlama", "Aşamalı tedavi süreci", "Düzenli kontrol ve bakım"],
    process: [
      { title: "Muayene ve görüntüleme", text: "Çene kemiği ve komşu dişler değerlendirilir." },
      { title: "Planlama", text: "Seçenekler ve süreç sizinle paylaşılarak tedavi planlanır." },
      { title: "Uygulama ve takip", text: "Planlanan aşamalar uygulanır; iyileşme süreci kontrollerle izlenir." },
    ],
    faqs: [
      { q: "Herkese uygulanabilir mi?", a: "Hayır. Uygunluk hekim muayenesi ve gerekli incelemelerle belirlenir." },
      { q: "Süreç ne kadar sürer?", a: "Süre kişiye ve plana göre değişir; hekiminiz tahmini süreç hakkında bilgi verir." },
    ],
    metaDescription: "İmplant tedavisi nasıl planlanır? İSMET GROUP Ağız ve Diş Sağlığı Merkezi'nde genel bilgi alın.",
  },
  {
    slug: "zirkonyum-kaplama",
    title: "Zirkonyum Kaplama",
    short: "Dişin form ve görünümünü yeniden kazandırmaya yönelik seramik restorasyon.",
    image: "/images/svc-zirkonyum.webp",
    alt: "Hasta koltuğunda diş hekimi ile görüşme",
    intro:
      "Zirkonyum kaplama, zirkonyum esaslı seramik malzemeden hazırlanan ve dişin üzerine uygulanan bir restorasyon türüdür. Uygun olup olmadığı, dişin durumu ve beklentileriniz doğrultusunda hekim tarafından değerlendirilir.",
    highlights: ["Dişin durumuna göre değerlendirme", "Kişiye özel hazırlanan restorasyon", "Renk ve form uyumu planlaması", "Uygulama sonrası kontrol"],
    process: [
      { title: "Muayene", text: "Dişin durumu ve beklentileriniz değerlendirilir." },
      { title: "Hazırlık ve ölçü", text: "Diş hazırlanır, restorasyon için ölçü alınır." },
      { title: "Uygulama", text: "Hazırlanan restorasyon uygulanır ve uyumu kontrol edilir." },
    ],
    faqs: [
      { q: "Tüm dişlere uygulanabilir mi?", a: "Uygulama kararı hekimin muayenesi sonrasında verilir." },
      { q: "Bakımı nasıl olmalı?", a: "Düzenli ağız hijyeni ve periyodik kontroller önerilir; ayrıntıları hekiminiz paylaşır." },
    ],
    metaDescription: "Zirkonyum kaplama nedir? İSMET GROUP Ağız ve Diş Sağlığı Merkezi'nde genel bilgi alın ve randevu talep edin.",
  },
  {
    slug: "estetik-gulus-tasarimi",
    title: "Estetik Gülüş Tasarımı",
    short: "Beklentilerinize ve ağız yapınıza göre planlanan estetik yaklaşım.",
    image: "/images/svc-estetik.webp",
    alt: "Şeffaf plak kullanan genç bir kişinin gülümsemesi",
    intro:
      "Estetik gülüş tasarımı, dişlerin form, renk ve diziliminin yüz yapısı ve beklentilerle birlikte değerlendirildiği kişiye özel bir planlama sürecidir. Kullanılacak yöntemler muayene sonrasında hekimle birlikte belirlenir.",
    highlights: ["Beklenti ve ağız yapısı değerlendirmesi", "Kişiye özel planlama", "Birden fazla seçeneğin görüşülmesi", "Aşamalı uygulama ve takip"],
    process: [
      { title: "Görüşme", text: "Beklentileriniz ve öncelikleriniz dinlenir." },
      { title: "Planlama", text: "Muayene sonrası uygun seçenekler hekimle birlikte değerlendirilir." },
      { title: "Uygulama ve takip", text: "Plan doğrultusunda uygulamalar yapılır ve kontroller gerçekleştirilir." },
    ],
    faqs: [
      { q: "Sonucu önceden görebilir miyim?", a: "Planlamada kullanılabilecek yöntemler hekim tarafından anlatılır; kesin sonuç garantisi verilemez." },
      { q: "Herkes için uygun mu?", a: "Uygunluk, ağız sağlığınıza ve beklentilerinize göre hekim tarafından değerlendirilir." },
    ],
    metaDescription: "Estetik gülüş tasarımı süreci hakkında bilgi alın. İSMET GROUP Ağız ve Diş Sağlığı Merkezi'nden randevu talep edin.",
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
