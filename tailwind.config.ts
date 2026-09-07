import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "670px",
      },
      screens: { xs: "320px", sml: "500px", mdl: "768px", lgl: "1024px" },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#a3b1cc",
        hoverColor: "rgba(100,255,218,0.1)",
      },
      fontFamily: {
        bodyFont: ["var(--font-inter)", "Arial", "sans-serif"],
        titleFont: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
