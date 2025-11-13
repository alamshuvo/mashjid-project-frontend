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
        alumni:['Alumni Sans', 'sans-serif'],
        roboto:['Roboto', 'sans-serif']
      },
      colors:{
        mainColor:"#0f382b",
        // mainColor:"#baa769",
        primaryButton:"#ffffff",
        secondaryButton:"#a7c712",
        mainGold:'#baa769',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(52, 211, 153, 0.5)',
      },
      dropShadow: {
        'glow': '0 0 12px rgba(251, 191, 36, 0.6)',
        'lg': '0 0 20px rgba(251, 191, 36, 0.8)',
      },
    },
  },
  plugins: [],
}