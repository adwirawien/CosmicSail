const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Apple Color Emoji', 'Segoe UI Emoji']
      }
    },
    colors: colors
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
      opacity: ['group-hover']
    },
  },
  plugins: [],
}
