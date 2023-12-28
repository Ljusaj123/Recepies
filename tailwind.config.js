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
      backgroundColor: "#ebe8e9",
      textColorDarkMode: "#cacecc",
      BackgroundColorDarkMode: "#312028",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Playfair: ["Playfair\\Display", "serif"],
    },
  },
};
export const plugins = ["tailwindcss", "autoprefixer"];
