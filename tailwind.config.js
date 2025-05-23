/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#e6fcfa',
          100: '#ccf9f5',
          200: '#99f3eb',
          300: '#66ece0',
          400: '#33e6d6',
          500: '#1db9ab',
          600: '#17948a',
          700: '#126f68',
          800: '#0c4a45',
          900: '#062523',
        },
        yellow: {
          50: '#fffaeb',
          100: '#fff5d6',
          200: '#ffeaad',
          300: '#ffe085',
          400: '#ffd65c',
          500: '#ffd03d',
          600: '#cca631',
          700: '#997d25',
          800: '#665318',
          900: '#332a0c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};