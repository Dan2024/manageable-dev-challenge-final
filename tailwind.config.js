/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-salmon': '#F29578ff',
        'royal-blue-dark': '#0F1752ff',
        linen: '#F2E7DBff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    gridTemplateColumns: {
      '2__expand-2': 'auto, 1fr',
      '3__expand-2': 'auto 1fr auto',
      '4__expand-2': 'auto 1fr auto auto',
      7: 'repeat(7, 1fr)',
    },
  },
  plugins: [],
}
