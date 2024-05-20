/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      "primary": "#E4FFE5",
    },
    extend: {},
  },
  plugins: [],
}

