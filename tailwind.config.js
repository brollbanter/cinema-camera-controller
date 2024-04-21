const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,vue}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
    }
  }
}
