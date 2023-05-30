/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '300': '#1ed760', 
          '500': '#1db954',
        },
        'dark': {
          '700': '#2f2828',
          '800': '#181818',
          '900': '#121212'
        }
      }
    },
  },
  plugins: [],
}

