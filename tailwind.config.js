/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: {
          50: '#f7f3ff',
          100: '#ede5ff',
          200: '#daccff',
          300: '#c1a4ff',
          400: '#a370ff',
          500: '#8a3ff7',
          600: '#7322e7',
          700: '#6016cf',
          800: '#5015a8',
          900: '#441589',
        },
        teal: {
          50: '#effcf9',
          100: '#c8f5ed',
          200: '#93e8dc',
          300: '#5dd1c6',
          400: '#38b8b0',
          500: '#249d95',
          600: '#17827d',
          700: '#146868',
          800: '#145353',
          900: '#134545',
        },
        peach: {
          50: '#fff2f0',
          100: '#ffe1dd',
          200: '#ffcac1',
          300: '#ffa594',
          400: '#ff7a62',
          500: '#ff4b2b',
          600: '#fa2800',
          700: '#d11d00',
          800: '#aa1a06',
          900: '#8a1a0c',
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};