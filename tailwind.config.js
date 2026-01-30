/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'setapp-dark': '#0a0a0a',
        'setapp-gray': '#1a1a1a',
        'setapp-pink': {
          400: '#FFB4A2',
          500: '#e879a2',
        },
        'setapp-blue': {
          600: '#1e5a8e',
          700: '#1a4d7a',
        },
        'setapp-purple': {
          500: '#9d5cc4',
          600: '#8b4db3',
          800: '#6a3a85',
          900: '#4a2a5c',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
