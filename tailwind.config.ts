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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#000000", // sleek pure black
          dark: "#171717", // neutral zinc 900
          light: "#fafafa", // pure off-white
        },
        accent: {
          DEFAULT: "#6366f1", // modern indigo
          dark: "#4f46e5",
        }
      },
    },
  },
  plugins: [],
};
export default config;
