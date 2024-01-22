/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-grey': '#24232C',
      'grey': '#817D92',
      'white': '#E6E5EA',
      'black': '#18171F',
      'green': '#A4FFAF',
      'red': '#F64A4A',
      'orange': '#FB7C58',
      'yellow': '#F8CD65',
      'blue': '#7FC6E8',
      'purple': '#C7A9E8',
    },
    fontFamily: {
      custom: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      sm: ['16px', '21px'],
      body: ['18px', '23px'],
      md: ['24px', '31px'],
      lg: ['32px', '43px'],
    },
    extend: {},
  },
  plugins: [],
}