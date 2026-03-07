import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#18181B", // zinc-900 (Deep Charcoal)
          dark: "#09090B", // zinc-950
          light: "#27272A", // zinc-800
        },
        accent: {
          DEFAULT: "#EFA101", // Rent-A-Hand Orange/Yellow
          dark: "#D48F00",
          light: "#FFB624"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-oswald)", "sans-serif"], // Changed to strong sans-serif for headings
      }
    },
  },
  plugins: [],
};
export default config;
