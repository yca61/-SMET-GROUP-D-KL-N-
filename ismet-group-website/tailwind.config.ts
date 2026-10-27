import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B2430",
        gold: "#1A9BD7",
        champagne: "#8FD3F0",
        warm: "#F2F8FA",
        charcoal: "#1B3A47",
        mute: "#888888",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      letterSpacing: { eyebrow: "0.22em" },
    },
  },
  plugins: [],
};
export default config;
