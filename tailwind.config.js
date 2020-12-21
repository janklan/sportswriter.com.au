module.exports = {
  purge: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.svg'
  ],
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled']
    }
  }
}
