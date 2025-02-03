/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'className',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dimlight: {
          '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
            color: '#0e3742',
            boxShadow: 'none',
          },
          '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%': {
            color: '#fff',
            textShadow: '0 0 10px #03bcf4',
          },
        },
      
      animation: {
        dimlight: 'dimlight 5s infinite',
      },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        slidein300: "slidein 1s ease 300ms forwards ",
          slidein500: "slidein 1s ease 500ms forwards ",
          slidein700: "slidein 1s ease 700ms forwards ",
          slidein800: "slidein 1s ease 900ms forwards ",
        },
      },
     
    },

    
  
  plugins: [
  
    function ({ addUtilities }) {
      addUtilities({
        '.box-reflect': {
          '-webkit-box-reflect': 'below 1px linear-gradient(transparent, #0004)',
        },
      });
    },
  ],
  
}


