// Gerçekçi diş silüeti: iki lobdan oluşan kuron, merkezde çentik ve iki kök.
export default function ToothIcon({ className = "", draw = false }: { className?: string; draw?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path
        pathLength={1}
        className={draw ? "tooth-draw" : ""}
        d="M32 14C28 9 20 8 15 12C9 17 10 26 13 33C15 39 16 46 17 52C18 57 21 58 23 55C26 51 27 44 32 44C37 44 38 51 41 55C43 58 46 57 47 52C48 46 49 39 51 33C54 26 55 17 49 12C44 8 36 9 32 14Z"
      />
      <path pathLength={1} className={draw ? "tooth-draw tooth-draw-2" : ""} strokeWidth="1.4" opacity="0.7" d="M20 18C22.5 15.8 26 15.6 28.5 17.4" />
    </svg>
  );
}
