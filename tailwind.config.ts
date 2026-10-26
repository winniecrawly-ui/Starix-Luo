import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#ffffff",
        surface: "#ffffff",
        ink: "#111111",
        mist: "#737373",
        ash: "#f5f5f5",
        line: "rgba(17, 17, 17, 0.08)",
        pollen: "#c9a017",
        "pollen-deep": "#a8860f",
      },
      fontFamily: {
        sans: [
          "var(--font-gilroy)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-domaine)",
          "ui-serif",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        /** Caps / UI labels — Urth Gilroy */
        caps: [
          "var(--font-gilroy)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        display: [
          "clamp(3rem, 8vw, 7.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-sm": [
          "clamp(2.25rem, 5vw, 4rem)",
          { lineHeight: "1", letterSpacing: "-0.02em" },
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      transitionDuration: {
        cinematic: "900ms",
        slow: "1200ms",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-soft": "cubic-bezier(0.45, 0, 0.55, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
