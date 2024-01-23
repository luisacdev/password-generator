/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#18171F',
      'dark-grey': '#24232C',
      'grey': '#817D92',
      'light-grey': '#D3D3D3',
      'white': '#F0F0F0',
      'green': '#4CAF50',
      'red': '#E53935',
      'orange': '#FB8C00',
      'yellow': '#FFEB3B',
      'dm-teal': '#26A69A',
      'dm-blue': '#7FC6E8',
      'dm-purple': '#C7A9E8',
      'lm-teal': '#00897B',
      'lm-blue': '#005A9C',
      'lm-purple': '#6B478F',      
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
  },
  plugins: [],
}