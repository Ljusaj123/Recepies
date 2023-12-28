/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    minHeight: {
      70: "70vh",
    },
    width: {
      95: "95vw",
    },

    colors: {
      textColor: "#383d3b",
      backgroundColor: "#908287",
      textColorDarkMode: "#edebeb",
      darkMode: "#533f48",
      backgroundColorDarkMode: "#73626a",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Playfair: ["Playfair\\Display", "serif"],
    },
  },
};
export const plugins = ["tailwindcss", "autoprefixer"];
