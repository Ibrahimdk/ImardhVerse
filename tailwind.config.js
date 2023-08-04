/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding : '16px',
    },
    extend: {
      fontFamily: {
        goldman : ['Goldman','cursive'],
        dokdo: ['Dokdo', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        
      },
      colors: {
        blacky: "#0A0A0A",
        neon: "#C8FF53",
        grey: "#CECECE",
        yellows : "#FFE486",
        darkgrey : "#272727",
        softgrey : "#373737",
      },
      screens : {
        '2xl' : '1320px',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        } ,
        slidereverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        } ,
    },
    animation: {
      slide : 'slide 20s infinite linear ',
      slidereverse : 'slidereverse 20s infinite linear ',
    },
  },
  plugins: [],
}
}
