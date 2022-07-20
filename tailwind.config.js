module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#52717b',
        'dark_2': '#91a7b6',
        'lighter': '#91acb6',
        'normal': '#251c18',
        'light': '#dae3e7',
        luna: {
          'pink': '#E95DB8',
          'blue': '#017EC3',
          'green': '#00A874',
          'yellow': '#FBC80A',
          'orange': '#F5811F',
          'red': '#EF5A43',
        }
      }
    },
  },
  plugins: [],
}