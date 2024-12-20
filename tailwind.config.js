/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    'text-bittersweet',    
    'border-dred',
    'border-bittersweet',
    'border-dgreen',
    'border-lgreen',
    'border-almond',
  ],
  theme: {
    extend: {
      colors:{
        'dgreen': '#2b4141',
        'almond': '#e7d7c1',
        'lgreen': '#6B9080',
        'dred': '#8c1c13',
        'bittersweet': '#bf4342'
      },
      fontFamily:{
        sans: ['Roboto', 'Arial', 'sans-serif'], 
        serif: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      }
  },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
