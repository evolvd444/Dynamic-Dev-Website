/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'proj': '0px -2px 80px -23px rgba(0, 0, 0, 0.3)',
    },
    screens: {
      
      'sm': {'min': '250px', 'max': '550px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '551px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '3100px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '3101px', 'max': '5000px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '5000px'},
      // => @media (min-width: 1536px) { ... }
    },
  },

  
  plugins: [ 
    require('tailwind-scrollbar')
  ],
}
