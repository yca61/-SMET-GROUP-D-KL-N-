import Image from "next/image";
import Link from "next/link";
import Split from "./Split";
import Magnetic from "./Magnetic";

export default function CinematicBanner() {
  return (
    <section className="bg-ink">
      <div data-cine className="relative flex min-h-[90svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <div data-parallax="0.1" className="absolute inset-x-0 -inset-y-[10%]">
            <Image
              src="/images/cinematic.webp"
              alt="Gülümseyen bir kadının portresi (stok fotoğraf)"
              fill
              sizes="100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div className="container-x relative z-10 py-24">
          <Split text="Güzel Bir Gülüş, Kendinizi *İyi* Hissetmenizle Başlar." className="h-display max-w-[16ch] text-[clamp(2.4rem,6.2vw,5.5rem)] text-white" />
          <p data-reveal className="mt-7 max-w-[42ch] text-[18px] leading-relaxed text-white/75">
            Sizin için en uygun tedavi seçeneklerini birlikte değerlendirelim.
          </p>
          <div data-reveal className="mt-10">
            <Magnetic>
              <Link href="/#randevu" className="btn btn-gold"><span className="btn-text">Randevu Al</span> <span className="btn-arrow btn-text">→</span></Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
