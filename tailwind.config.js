/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Staatliches", "sans-serif"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
