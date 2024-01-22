import { reactive } from 'vue';

export const store = reactive({
  color: 'green', // Default color
  isDarkTheme: true,
  backgroundColorClasses: {
    'green': 'bg-green',
    'blue': 'bg-blue',
    'purple': 'bg-purple',
  },
  textColorClasses: {
    'green': 'text-green active:text-white',
    'blue': 'text-blue active:text-white',
    'purple': 'text-purple active:text-white',
  },
  btnColorClasses: {
    'green': 'bg-green active:bg-black active:text-green active:border-green',
    'blue': 'bg-blue active:bg-black active:text-blue active:border-blue',
    'purple': 'bg-purple active:bg-black active:text-purple active:border-purple',
  },
  checksColorClasses: {
    'green': 'active:border-green checked:bg-green checked:border-green',
    'blue': 'active:border-blue checked:bg-blue checked:border-blue',
    'purple': 'active:border-purple checked:bg-purple checked:border-purple',
  },
  sliderColors: {
    'green': {
      fillColor: '#A4FFAF',
      thumbBorderColorActive: '#A4FFAF',
    },
    'blue': {
      fillColor: '#7FC6E8',
      thumbBorderColorActive: '#7FC6E8',
    },
    'purple': {
      fillColor: '#C7A9E8',
      thumbBorderColorActive: '#C7A9E8',
    },
  },
});