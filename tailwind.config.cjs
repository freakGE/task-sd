/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#fffcfb",
          200: "#ffffff",
        },
        dark: {
          100: "#979bb0",
          150: "#25283a",
          200: "#1a1926",
          300: "#16141c",
        },
        highlight: {
          pink: "#e53265",
          cyan: "#2fd6b5",
        },
        ...colors,
      },
      screens: {
        exs: "320px",
        "2exs": "360px",
        xs: "480px",
        "1xs": "520px",
        "1.5xs": "540px",
        "2xs": "560px",
        "3xs": "580px",
        esm: "600px",
        "2esm": "620px",
        "2md": "896px",
        "2lg": "1152px",
        "3xl": "1664px",
        "4xl": "1792px",
        "5xl": "1853px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
