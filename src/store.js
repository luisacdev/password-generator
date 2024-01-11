import { reactive } from 'vue';

export const store = reactive({
  color: 'green', // Default color
  backgroundColorClasses: {
    'green': 'bg-pg-green',
    'blue': 'bg-pg-blue',
    'purple': 'bg-pg-purple',
  },
  textColorClasses: {
    'green': 'text-pg-green active:text-pg-white',
    'blue': 'text-pg-blue active:text-pg-white',
    'purple': 'text-pg-purple active:text-pg-white',
  },
  btnColorClasses: {
    'green': 'bg-pg-green active:bg-pg-black active:text-pg-green active:border-pg-green',
    'blue': 'bg-pg-blue active:bg-pg-black active:text-pg-blue active:border-pg-blue',
    'purple': 'bg-pg-purple active:bg-pg-black active:text-pg-purple active:border-pg-purple',
  },
  checksColorClasses: {
    'green': 'active:border-pg-green checked:bg-pg-green checked:border-pg-green',
    'blue': 'active:border-pg-blue checked:bg-pg-blue checked:border-pg-blue',
    'purple': 'active:border-pg-purple checked:bg-pg-purple checked:border-pg-purple',
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