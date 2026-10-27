import { createElement } from "react";

// "*italik*" ile işaretlenen kelimeler editoryal (Cormorant, altın) olarak gösterilir.
export default function Split({
  text,
  as = "h2",
  className = "",
  delay,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}) {
  const parts = text.split("*");
  const words = parts.flatMap((seg, i) =>
    seg
      .split(" ")
      .filter(Boolean)
      .map((w) => ({ w, ed: i % 2 === 1 }))
  );
  return createElement(
    as,
    { className, "data-split": "", "data-delay": delay },
    words.map((x, i) => (
      <span key={i}>
        <span className="w">
          <span className={`wi ${x.ed ? "ed" : ""}`}>{x.w}</span>
        </span>
        {i < words.length - 1 ? " " : ""}
      </span>
    ))
  );
}
