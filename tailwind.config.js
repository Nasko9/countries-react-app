/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "728px",
      lg: "984px",
      xl: "1240px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    fontWeight: {
      normal: 300,
      semibold: 600,
      bold: 800,
    },
    extend: {
      colors: {
        "light-bg": "hsl(0, 0%, 98%)",
        "dark-bg": "hsl(207, 26%, 17%)",
        "light-elements": "hsl(0, 0%, 100%)",
        "dark-elements": "hsl(209, 23%, 22%)",
        "light-text": "hsl(200, 15%, 8%)",
        "dark-text": "hsl(0, 0%, 100%)",
        "light-form": "hsl(0, 0%, 52%)",
      },
    },
  },
  plugins: [],
};
