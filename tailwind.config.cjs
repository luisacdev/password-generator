/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pg-dark-grey': '#24232C',
      'pg-grey': '#817D92',
      'pg-white': '#E6E5EA',
      'pg-black': '#18171F',
      'pg-green': '#A4FFAF',
      'pg-red': '#F64A4A',
      'pg-orange': '#FB7C58',
      'pg-yellow': '#F8CD65',
      'pg-blue': '#7FC6E8',
      'pg-purple': '#C7A9E8',
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