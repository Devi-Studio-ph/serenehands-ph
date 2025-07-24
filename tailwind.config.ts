import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // or use Geist if preferred
        geist: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
        poppins: ["var(--font-poppins)"],
        crimson: ["var(--font-crimson)"],
        lobster: ["var(--font-lobster)"],
        limelight: ["var(--font-limelight)"],
      },
    },
  },
  plugins: [],
};

export default config;
