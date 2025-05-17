// Run this in terminal to connect tailwind when VS Code is restarted: npx tailwindcss -i ./input.css -o ./output.css --watch 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        cool_cyan: {
          100: '#aaffe3', // not shown right in some browsers 
          300: '#9ce5cc',  // ideal color
          500: '#7ec9b0', // darker variant
        },
        cool_gray: {
          100: '#7e7e7e', // lighter 
          300: '#5b5b5b',  // ideal color
          500: '#3d3d3d', // darker variant
        },
      },
      keyframes: {
        quickspin: {
          '50%, 100%': { transform: 'rotate(180deg)' }
        },
        quickspinrev: {
          '50%, 100%': { transform: 'rotate(-180deg)' }
        }
      },
      animation: {
        quickspin: 'quickspin .5s ease-in-out',
        quickspinrev: 'quickspinrev .5s ease-in-out',
      },
  },
  plugins: [
    // purgecss({
    //   content: ['./*.html']
  // })
],
}}
