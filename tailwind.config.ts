import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral palette inspired by cozy gaming
        shelf: {
          DEFAULT: "#E8E3D8", // Main shelf surface (warm beige)
          dark: "#D4C9B8", // Darker shelf areas
          light: "#F5F1E8", // Lighter shelf highlights
        },
        polaroid: {
          DEFAULT: "#FFFFFF", // Polaroid white
          border: "#F0F0F0", // Subtle border
        },
        slot: {
          DEFAULT: "#D9D4C7", // Slot cutout color
          outline: "#C4BBA8", // Dashed outline
        },
        accent: {
          warm: "#C9A882", // Warm brown accent
          glow: "#E8D5B7", // Glow effect color
        },
        text: {
          primary: "#3D3A33", // Dark brown text
          secondary: "#6B6659", // Muted text
        },
      },
      fontFamily: {
        handwritten: ["Gochi Hand", "cursive"],
      },
      boxShadow: {
        inset: "inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(0, 0, 0, 0.06)",
        polaroid: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        glow: "0 0 20px rgba(232, 213, 183, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;

