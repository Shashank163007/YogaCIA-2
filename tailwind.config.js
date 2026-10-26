/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f6f7f4',
          100: '#e8ebe3',
          200: '#d2d9c8',
          300: '#b3bfa3',
          400: '#96a683',
          500: '#7c9070',
          600: '#5f7356',
          700: '#4c5c46',
          800: '#3f4b3a',
          900: '#344032',
        },
        sand: {
          50:  '#fdfbf7',
          100: '#f9f3e8',
          200: '#f1e4cd',
          300: '#e6cfaa',
          400: '#d9b682',
          500: '#cfa064',
          600: '#bf884c',
          700: '#a06f40',
          800: '#825a39',
          900: '#6b4a31',
        },
        warm: {
          50:  '#fefdfb',
          100: '#fdf9f3',
          200: '#f9f3e6',
          300: '#f3e8d2',
          400: '#ebd9ba',
          500: '#dec49d',
          600: '#c7a97e',
          700: '#a88960',
          800: '#876c4a',
          900: '#69533a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out forwards',
        slideUp: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
