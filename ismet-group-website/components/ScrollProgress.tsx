export default function ScrollProgress() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]">
      <div id="scroll-progress" className="h-full origin-left scale-x-0 bg-gold" />
    </div>
  );
}
