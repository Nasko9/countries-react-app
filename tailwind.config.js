/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      // Min width
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
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
