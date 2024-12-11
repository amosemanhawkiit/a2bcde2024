/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'dgreen': '#2b4141',
        'almond': '#e7d7c1',
        'lgreen': '#6B9080',
        'dred': '#8c1c13',
        'bittersweet': '#bf4342'
      },
  },
  },
  plugins: [],
}
