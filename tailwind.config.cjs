/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        red: "#E45858",
        black: "#121214",
        purple: "#6246EA",
      },
    },
  },
  plugins: [],
};
