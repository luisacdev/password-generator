import { reactive } from 'vue';

const dmTeal = '#26A69A'
const dmBlue = '#7FC6E8'
const dmPurple = '#C7A9E8'
const lmTeal = '#00897B'
const lmBlue = '#005A9C'
const lmPurple = '#6B478F'
const black = '#18171F'
const white = '#F0F0F0'

export const store = reactive({
  color: 'green', // Default Color Theme
  isDarkTheme: true, // Default Mode
  themes: {
    dark: {
      pBackground: 'bg-black',
      sBackground: 'bg-dark-grey',
      pTextColor: 'text-white',
      sTextColor: 'text-black',
      colors: {
        green: {
          accentColor: 'bg-dm-teal',
          btnStyles: 'text-dark-grey bg-dm-teal border-dm-teal active:bg-black active:text-dm-teal active:border-dm-teal',
          cboxStyles: 'border-white active:border-dm-teal checked:bg-dm-teal checked:border-dm-teal',
          textStyles: 'text-dm-teal active:text-white',
          sliderColors: {
            color: dmTeal,
            track: black,
            thumb: white,
            thumbActive: black,
          },
        },
        blue: {
          accentColor: 'bg-dm-blue',
          btnStyles: 'text-dark-grey bg-dm-blue border-dm-blue active:bg-black active:text-dm-blue active:border-dm-blue',
          cboxStyles: 'border-white active:border-dm-blue checked:bg-dm-blue checked:border-dm-blue',
          textStyles: 'text-dm-blue active:text-white',
          sliderColors: {
            color: dmBlue,
            track: black,
            thumb: white,
            thumbActive: black,
          },
        },
        purple: {
          accentColor: 'bg-dm-purple',
          btnStyles: 'text-dark-grey bg-dm-purple border-dm-purple active:bg-black active:text-dm-purple active:border-dm-purple',
          cboxStyles: 'border-white active:border-dm-purple checked:bg-dm-purple checked:border-dm-purple',
          textStyles: 'text-dm-purple active:text-white',
          sliderColors: {
            color: dmPurple,
            track: black,
            thumb: white,
            thumbActive: black,
          },
        },
      },
    },
    light: {
      pBackground: 'bg-white',
      sBackground: 'bg-light-grey',
      pTextColor: 'text-black',
      sTextColor: 'text-white',
      containerBackground: 'bg-light-grey',
      colors: {
        green: {
          accentColor: 'bg-lm-teal',
          btnStyles: 'text-white bg-lm-teal border-lm-teal active:bg-white active:text-lm-teal active:border-lm-teal',
          cboxStyles: 'border-black active:border-lm-teal checked:bg-lm-teal checked:border-lm-teal',
          textStyles: 'text-lm-teal active:text-white',
          sliderColors: {
            color: lmTeal,
            track: white,
            thumb: black,
            thumbActive: white,
          },
        },
        blue: {
          accentColor: 'bg-lm-blue',
          btnStyles: 'text-white bg-lm-blue border-lm-blue active:bg-white active:text-lm-blue active:border-lm-blue',
          cboxStyles: 'border-black active:border-lm-blue checked:bg-lm-blue checked:border-lm-blue',
          textStyles: 'text-lm-blue active:text-white',
          sliderColors: {
            color: lmBlue,
            track: white,
            thumb: black,
            thumbActive: white,
          },
        },
        purple: {
          accentColor: 'bg-lm-purple',
          btnStyles: 'text-white bg-lm-purple border-lm-purple active:bg-white active:text-lm-purple active:border-lm-purple',
          cboxStyles: 'border-black active:border-lm-purple checked:bg-lm-purple checked:border-lm-purple',
          textStyles: 'text-lm-purple active:text-white',
          sliderColors: {
            color: lmPurple,
            track: white,
            thumb: black,
            thumbActive: white,
          },
        },
      },
    },
  },
});