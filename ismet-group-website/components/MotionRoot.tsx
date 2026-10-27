"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// Sayfa genelinde Lenis smooth scroll ve data-* nitelikleriyle tanımlı scroll animasyonlarını yönetir.
export default function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      return;
    }

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || !url.hash || url.pathname !== window.location.pathname) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -64, duration: 1.6 });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    const cleanups: (() => void)[] = [];
    const small = window.innerWidth < 768;
    // Loader açıkken hero animasyonları loader kalkana kadar bekler.
    const base = document.documentElement.classList.contains("loading") ? 2.2 : 0;
    const ctx = gsap.context(() => {
      // Başlıklar: kelime bazlı reveal
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const delay = Number(el.dataset.delay ?? 0) + (el.closest("[data-hero]") ? base : 0);
        gsap.fromTo(el.querySelectorAll(".wi"), { yPercent: 115, y: 0 }, {
          yPercent: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.06,
          delay,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      // Genel fade-up
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: Number(el.dataset.delay ?? 0) + (el.closest("[data-hero]") ? base : 0),
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          }
        );
      });

      // Sırayla beliren kart/liste grupları
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.fromTo(
          el.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      // Görsel perde açılışı
      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) => {
        const img = el.querySelector("img");
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 88%", once: true } });
        tl.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.5, ease: "expo.inOut" });
        if (img) tl.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0);
      });

      // Parallax (mobilde azaltılmış)
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const p = Number(el.dataset.parallax) * (small ? 0.4 : 1);
        const parent = el.parentElement as HTMLElement;
        gsap.fromTo(
          el,
          { y: () => -p * parent.offsetHeight },
          {
            y: () => p * parent.offsetHeight,
            ease: "none",
            scrollTrigger: { trigger: parent, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
          }
        );
      });

      // Hero
      const heroImg = document.querySelector<HTMLElement>("[data-hero-img]");
      if (heroImg) {
        gsap.fromTo(heroImg, { scale: 1.18 }, { scale: 1, duration: 2.8, delay: base, ease: "power3.out" });
        gsap.to("[data-hero-bg]", {
          yPercent: small ? 8 : 18,
          ease: "none",
          scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
        });
        if (!small && matchMedia("(pointer: fine)").matches) {
          const hx = gsap.quickTo(heroImg, "x", { duration: 1.2, ease: "power3.out" });
          const hy = gsap.quickTo(heroImg, "y", { duration: 1.2, ease: "power3.out" });
          const mm = (e: PointerEvent) => {
            hx((e.clientX / window.innerWidth - 0.5) * -28);
            hy((e.clientY / window.innerHeight - 0.5) * -18);
          };
          window.addEventListener("pointermove", mm);
          cleanups.push(() => window.removeEventListener("pointermove", mm));
        }
        gsap.to("[data-hero-content]", {
          yPercent: small ? 0 : -12,
          opacity: 0.1,
          ease: "none",
          scrollTrigger: { trigger: "[data-hero]", start: "30% top", end: "bottom top", scrub: true },
        });
      }

      // Sinematik bant: ekran genişliğine açılma
      const cine = document.querySelector<HTMLElement>("[data-cine]");
      if (cine) {
        gsap.fromTo(
          cine,
          { clipPath: "inset(7% 5% 7% 5%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: { trigger: cine, start: "top 85%", end: "top 10%", scrub: true },
          }
        );
      }

      // Zaman çizgisi
      const tl = document.querySelector<HTMLElement>("[data-timeline]");
      if (tl) {
        const horizontal = window.innerWidth >= 1024;
        gsap.fromTo(
          "[data-timeline-fill]",
          horizontal ? { scaleX: 0, scaleY: 1 } : { scaleY: 0, scaleX: 1 },
          {
            ...(horizontal ? { scaleX: 1 } : { scaleY: 1 }),
            ease: "none",
            scrollTrigger: { trigger: tl, start: "top 60%", end: "bottom 65%", scrub: true },
          }
        );
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((s) => {
          ScrollTrigger.create({
            trigger: s,
            start: "top 62%",
            onEnter: () => s.classList.add("is-active"),
            onLeaveBack: () => s.classList.remove("is-active"),
          });
        });
      }
    });

    gsap.to("#scroll-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });

    // Geç yüklenen görsel/yazı tipleri için ölçümleri yenile
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      document.removeEventListener("click", onClick);
      cleanups.forEach((c) => c());
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
