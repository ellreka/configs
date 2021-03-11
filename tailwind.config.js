const colors = require('tailwindcss/colors')
const theme = require('tailwindcss')

module.exports = {
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        orange: colors.orange
      },
      minWidth: {
        ...theme.spacing
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      opacity: ['disabled'],
      pointerEvents: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: []
}
