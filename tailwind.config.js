/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px", //auto margin 1rem
      sm: "640px", //592px container
      md: "768px", //720px container
      lg: "1024px", //960px container
      xl: "1280px", //1184px container
      "2xl": "1440px", //1280px container
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    fontWeight: {
      normal: 300,
      semibold: 600,
      bold: 800,
    },
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)", //body
        secondary: "var(--color-bg-secondary)", //header, card, buttons
      },
      textColor: {
        primary: "var(--color-text-primary)",
      },
    },
  },
  plugins: [],
};
