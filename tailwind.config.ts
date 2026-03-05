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
          DEFAULT: "#1D4ED8", // premium blue
          dark: "#1E3A8A",
          light: "#DBEAFE",
        },
        accent: {
          DEFAULT: "#F97316", // energetic orange
          dark: "#C2410C",
        }
      },
    },
  },
  plugins: [],
};
export default config;
