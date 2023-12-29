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
      // dark mode primary
      "primary-100": "#edebeb",
      "primary-200": "#efeded",
      "primary-300": "#f1efef",
      "primary-400": "#f3f2f2",
      "primary-500": "#f5f4f4",
      "primary-600": "#f7f6f6",

      // dark mode surface
      "surface-100": "#533f48",
      "surface-200": "#65525a",
      "surface-300": "#76666d",
      "surface-400": "#897a80",
      "surface-500": "#9c8f94",
      "surface-600": "#afa4a9",

      //dark mode mixed surface
      "surface-mixed-100": "#614e57",
      "surface-mixed-200": "#716068",
      "surface-mixed-300": "#827279",
      "surface-mixed-400": "#93858b",
      "surface-mixed-500": "#a4989e",
      "surface-mixed-600": "#b6acb0",

      //light mode primary
      "color-primary-100": "#73626a",
      "color-primary-200": "#827279",
      "color-primary-300": "#908389",
      "color-primary-400": "#a09399",
      "color-primary-500": "#afa5a9",
      "color-primary-600": "#bfb6ba",

      //light mode surface
      "color-surface-100": "#faf2f7",
      "color-surface-200": "#fbf3f8",
      "color-surface-300": "#fbf5f9",
      "color-surface-400": "#fcf6fa",
      "color-surface-500": "#fcf8fb",
      //light mode mixed surface

      "color-surface-mixed-100": "#ed3d9",
      "color-surface-mixed-200": "#2d8dd",
      "color-surface-mixed-300": "#5dde1",
      "color-surface-mixed-400": "#9e2e6",
      "color-surface-mixed-500": "#de6ea",
      "color-surface-mixed-600": "#0ebee",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Playfair: ["Playfair\\Display", "serif"],
    },
  },
};
export const plugins = ["tailwindcss", "autoprefixer"];
