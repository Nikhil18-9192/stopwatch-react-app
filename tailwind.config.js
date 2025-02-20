module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          'primary':'#ccff00',
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }