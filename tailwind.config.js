/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mintCream: "#F7F7FF",
        night: "#000F08",
        gunMetal: "#1C3738",
        davyGray: "#4D4847",
        offRed: "#8E1B13",
        gray: {
          800: "#2d3748",
          900: "#1a202c",
          700: "#4a5568",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      transitionProperty: {
        outline: "outline",
      },
      fontSize: {
        xsm: "1.4rem",
        sm: "1.4rem",
        md: "1.6rem",
        lg: "1.8rem",
        xl: "1.8rem",
      },
      transitionDuration: {
        600: "600ms",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
    },
    screens: {
      xsm: "375px",
      "3xl": "1920px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      outline: ["hover"],
      transitionProperty: ["hover"],
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
