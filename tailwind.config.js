/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      cute: ['"Baloo 2"', 'cursive']
    }
    ,
    extend: {
      keyframes: {
        melEscorrendo: {
          '0%': {
            transform: 'scaleY(0)',
            opacity: '0',
            transformOrigin: 'top',
            filter: 'blur(2px)',
          },
          '70%': {
            transform: 'scaleY(1.05)',
            opacity: '1',
            filter: 'blur(0.5px)',
          },
          '100%': {
            transform: 'scaleY(1)',
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        drip: {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '30%': { opacity: 1 },
          '100%': { transform: 'translateY(40px)', opacity: 0 },
        },
      },
      animation: {
        mel: 'melEscorrendo 0.6s ease-out forwards',
        drip: 'drip 1.5s ease-in infinite',
      },
    },
  },
  plugins: [],
};
