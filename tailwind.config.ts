import type { Config } from "tailwindcss";

/*
 * Terra Nova brand kit — unchanged from the live site.
 * ivory / charcoal / sand / bronze / stone, Cormorant Garamond + Inter.
 */
// Absolute, forward-slash globs so the config works whatever the cwd.
const root = __dirname.split("\\").join("/");

const config: Config = {
  content: [
    `${root}/app/**/*.{js,ts,jsx,tsx,mdx}`,
    `${root}/components/**/*.{js,ts,jsx,tsx,mdx}`
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F1EB",
        charcoal: "#111111",
        sand: "#D9CFC2",
        bronze: "#A67C52",
        stone: "#8B8B8B",
        paper: "#EFE9E0"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
