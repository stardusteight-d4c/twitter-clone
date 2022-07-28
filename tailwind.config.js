/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      arial: ['Arial'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
