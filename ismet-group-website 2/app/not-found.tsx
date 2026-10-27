import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-ink px-6 text-center text-white">
      <p className="eyebrow mb-6">404</p>
      <h1 className="h-display text-[clamp(2.5rem,7vw,5rem)]">Sayfa <span className="ed">bulunamadı.</span></h1>
      <Link href="/" className="btn btn-gold mt-10">Ana Sayfaya Dön</Link>
    </section>
  );
}
