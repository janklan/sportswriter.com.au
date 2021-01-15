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
  },
  theme: {
    extend: {
      colors: {
        sportswriter: {
          DEFAULT: '#4f8f00', // 500
          50: '#f6f9f2',
          100: '#edf4e6',
          200: '#d3e3bf',
          300: '#b9d299',
          400: '#84b14d',
          500: '#4f8f00',
          600: '#478100',
          700: '#3b6b00',
          800: '#2f5600',
          900: '#274600'
        }
      }
    }
  }
}
