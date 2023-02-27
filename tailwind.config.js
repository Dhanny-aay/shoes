/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Kanit':['"Kanit"','sans-serif'],
        'Labrada':['"Labrada"','serif'],
        'Tilt':['"Tilt Neon"','cursive'],
      }
    },
  },
  plugins: [],
}
