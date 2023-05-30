/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1db954',
        'secondary': '#1ed760',
        'dark': '#191414'
      }
    },
  },
  plugins: [],
}

