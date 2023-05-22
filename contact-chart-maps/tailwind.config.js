/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Specify the files to be purged for production build
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Add a custom primary color
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Add custom font families
      },
      fontSize: {
        '4xl': '2.5rem', // Add a custom font size
      },
    },
    screens:{
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'], // Enable opacity variants for disabled elements
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
}

