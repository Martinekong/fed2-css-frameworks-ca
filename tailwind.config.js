/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./**/*.{html,js}', '!./node_modules/**/*'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Urbanist', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
