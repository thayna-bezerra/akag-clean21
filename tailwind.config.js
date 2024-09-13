/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'orange-600': "#A34F34",
        'orange-500': "#F17E2E",
        'orange-400': "#CC9036",
        'orange-100': "#D4A155",
        'gray-500': "#5A5A5A",
        'gray-450': "#A3A3A3",
        'gray-350': "#D9D9D9",
        'gray-100': "#EEEEEE",
        'red-600': "#810000",
        'red-500': "#CB0000",
        'blue': "#00283C",
        'green': "#0C9A4B",
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
      },
      fontSize: {
        '11': '11px',
      },
      lineHeight: {
        '24': '24px',
        '29': '29px',
      },
      letterSpacing: {
        '1.1': '1.1px',
        '1.3': '1.3px'
      },
    }
  },
  plugins: [],
}
