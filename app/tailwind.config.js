/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["IKEA"],
      },
    },
    animation: {
      "fade-in": "fadeIn 1s ease-in forwards",
    },
  },
  plugins: [],
};
