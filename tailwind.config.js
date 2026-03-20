/** @type {import('tailwindcss').Config} */
module.exports = {
  // FIX 1: Tell Tailwind where to look for your classes
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // FIX 2: Removed the double "theme:" nesting
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C1B33",
          light: "#132240",
          deep: "#07111F",
        },
        slate: {
          medical: "#3A5068",
          mid: "#5B7A95",
          pale: "#A8BDD0",
        },
        gold: {
          DEFAULT: "#B8966A",
          light: "#D4B48A",
          subtle: "#F5EDE0",
        },
        cream: "#FAF8F5",
        offwhite: "#F1EDE7",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}