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
        black: {
          700: "#121214",
          900: "rgba(0, 0, 0, 0.75)",
        },
        purple: "#6246EA",
        white: "#FFFFFF",
        gray: "#7C7C8A",
      },
    },
  },
  plugins: [],
};
