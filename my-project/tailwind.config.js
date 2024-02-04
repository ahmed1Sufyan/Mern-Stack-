/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        custFont : ['Roboto Slab','Roboto Condensed', 'sans-serif'],
        custFont1 : ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}