import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        ink: "rgb(15 23 42)",
        paper: "rgb(255 255 255)",
        muted: "rgb(71 85 105)",
        border: "rgb(226 232 240)",

        // Brand (hero) — verde profundo premium
        brand: "#0B6B3F",
        brandDark: "#084E30",
        brandSoft: "rgb(11 107 63 / 0.10)",
        brandSoft2: "rgb(11 107 63 / 0.18)",

        // Premium (Daphne + Sky Blue) — tono sobre tono
        premium: "#0078BF",
        premiumSoft: "rgb(105 179 231 / 0.22)",

        // Allergy Free (preferido por cliente) — #63A91F + #C6DC93
        allergy: "#63A91F",
        allergySoft: "rgb(99 169 31 / 0.18)",
        allergySoft2: "#C6DC93",

        // Standard (preferido por cliente) — #FCD863 + #FCA600 + #FD813F
        standard: "#FCA600",
        standardSoft: "rgb(252 216 99 / 0.55)",
        standardAccent: "#FD813F",

        // Hero pastel accents (vibra HelloFresh)
        heroMint: "rgb(210 244 225)",
        heroButter: "rgb(255 244 204)",
        heroSky: "rgb(210 236 255)",
        heroLav: "rgb(239 232 255)",

        // Tabs (barra superior tipo mockup)
        tab: "#B65A1A",
        tabDark: "#8A3F12",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(2, 6, 23, 0.08)",
        softer: "0 8px 18px rgba(2, 6, 23, 0.06)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heroEnter: {
          "0%": { opacity: "0", transform: "translate(var(--dx,0), var(--dy,0)) scale(0.98)" },
          "100%": { opacity: "1", transform: "translate(0,0) scale(1)" },
        },
        heroFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        fadeUp: "fadeUp 600ms ease-out both",
        heroEnter: "heroEnter 720ms cubic-bezier(0.16, 1, 0.3, 1) both",
        heroFloat: "heroFloat 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
