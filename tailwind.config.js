/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all relevant files
  theme: {
    extend: {
      fontFamily: {
        robotoSerif: ['"Roboto Serif"', "sans-serif"],
      },
      screens: {
        md: "768px",
      },
    },
  },
  plugins: [],
};
