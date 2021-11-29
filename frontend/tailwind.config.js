const colors = require('tailwindcss/colors');

module.exports = {
 purge: ['./src/**/*.jsx', './index.html'],
 darkMode: false,
 theme: {
  extend: {
   colors: {
    'warm-gray': colors.warmGray,
    teal: colors.teal,
    cyan: colors.cyan,
   },
   backgroundImage: (theme) => ({
    'hero-pattern':
     "linear-gradient(to right, rgba(251,191,36, 0.8), rgba(255, 255, 255, 0), rgba(185, 28, 28, 1)), url('./img/chess.jpg')",
   }),
  },
 },
 variants: {
  extend: {
   opacity: ['disabled'],
  },
 },
 plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
