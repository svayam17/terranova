import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F1EB",
        charcoal: "#111111",
        sand: "#D9CFC2",
        bronze: "#A67C52",
        stone: "#8B8B8B"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      letterSpacing: {
        editorial: "0.04em"
      }
    }
  },
  plugins: []
};

export default config;
