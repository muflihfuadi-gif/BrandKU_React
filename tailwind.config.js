/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}", // Memastikan folder src dan semua file JSX terpindai
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}