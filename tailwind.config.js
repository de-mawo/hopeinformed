/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "neon-carrot": {
          50: "#fff7ed",
          100: "#ffeed4",
          200: "#ffd9a8",
          300: "#ffbe71",
          400: "#ff912d",
          500: "#fe7811",
          600: "#ef5d07",
          700: "#c64408",
          800: "#9d370f",
          900: "#7e2f10",
        },
        'old-gold': {
          '50': '#faf9ec',
          '100': '#f4f0cd',
          '200': '#ebdf9d',
          '300': '#dfc865',
          '400': '#d4af37',
          '500': '#c59b2d',
          '600': '#aa7a24',
          '700': '#885920',
          '800': '#724921',
          '900': '#623e21',
          '950': '#382010',
      },
      
      }
    },
  },
  plugins: [],
}
