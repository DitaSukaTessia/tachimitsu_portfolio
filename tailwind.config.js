/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        fontFamily: {
          lexend: ["Lexend", "sans-serif"],
        },
        primary: "oklch(0.75 0.183 55.934)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
