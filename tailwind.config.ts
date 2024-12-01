import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#20202033",
        },
      },
      fontFamily: {
        patriot: ["var(--font-patriot)"],
        rufina: ["var(--font-rufina)"],
        oxygen: ["var(--font-oxygen)"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "seamless-loop": "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Slide half the width of the content
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
