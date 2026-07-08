import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#05060f",
          900: "#0b0e1d",
          800: "#121631",
          700: "#1b2044",
        },
        neon: {
          violet: "#8b5cf6",
          blue: "#3b82f6",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite alternate",
        "spin-slow": "spin 14s linear infinite",
        blink: "blink 1s step-end infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate(-8%, -6%) scale(1)" },
          "50%": { transform: "translate(6%, 8%) scale(1.15)" },
          "100%": { transform: "translate(-4%, 4%) scale(1.05)" },
        },
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(139, 92, 246, 0.35), 0 0 64px rgba(34, 211, 238, 0.15)",
        "glow-sm": "0 0 14px rgba(139, 92, 246, 0.28)",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
