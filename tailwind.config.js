module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001f',
      },
      boxShadow: {
        "dark": "4px 4px 0 #334155",
        "light": "4px 4px 0 #f1f5f9"
      }
    },
  },
  darkMode: 'selector',
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",

        },
        ".scrollbar-none::-webkit-scrollbar": {
          "display": "grid",
          "background": "black"
        },
        ".res-grid": {
          "grid-template-columns": "repeat(auto-fit, minmax(280, 1fr))"
        },
        ".res-grid-180": {
          "grid-template-columns": "repeat(auto-fit, minmax(180, 1fr))"
        },
        ".res-grid-200": {
          "grid-template-columns": "repeat(auto-fit, minmax(200px, 1fr))"
        }
      })
    }
  ],
}