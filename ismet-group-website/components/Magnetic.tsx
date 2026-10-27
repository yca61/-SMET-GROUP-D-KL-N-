"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";

// Fare yaklaştığında hafifçe çekilen sarmalayıcı (yalnızca ince imleçli cihazlarda).
export default function Magnetic({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onPointerMove={(e) => {
        if (!fine() || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        gsap.to(ref.current, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.25,
          y: (e.clientY - (r.top + r.height / 2)) * 0.35,
          duration: 0.5,
          ease: "power3.out",
        });
      }}
      onPointerLeave={() => ref.current && gsap.to(ref.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1,0.4)" })}
    >
      {children}
    </div>
  );
}
