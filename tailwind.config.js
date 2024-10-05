const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins',
      },
    },
  },
  plugins: [],
}

