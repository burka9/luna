module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#52717bff',
        'dark_2': '#91a7b6ff',
        'lighter': '#91acb6ff ',
        'normal': '#251c18ff',
        'light': '#dae3e7ff',
        luna: {
          'pink': '#E95DB8ff',
          'blue': '#017EC3ff',
          'green': '#00A874ff',
          'yellow': '#FBC80Aff',
          'orange': '#F5811Fff',
          'red': '#EF5A43ff',
        }
      }
    },
  },
  plugins: [],
}