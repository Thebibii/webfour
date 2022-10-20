/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '8px',
        // 'md' :'0.87rem',
      },
    },

    extend: {
      fontFamily: {
        'poppins': 'Poppins',
      },
      screens: {
        'sm' : '320px',
      },
    },
  },
  plugins: [],
}
