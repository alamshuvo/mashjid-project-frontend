/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        alumni:['Alumni Sans', 'sans-serif']
      },
      colors:{
        mainColor:"#a7c712",
        primaryButton:"#000000",
        secondaryButton:"#a7c712"
      }
    },
  },
  plugins: [],
}