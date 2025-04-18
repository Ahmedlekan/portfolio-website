import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "670px",
      containersmx: "500px",
    },
    
    extend: {
      zIndex: {
        '1': '1',
        '3': '3',
        '-3': '-3',
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
        borderColor: "#ccc",
      },
     
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)",
        cubeShadow: "0 0 20px 0px lightyellow"
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite"
      },
      keyframes:{
        "ping-large": {
          "75%, 100%":{
            transform: 'scale(3)',
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};

export default config
