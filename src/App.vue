<script setup>
import { ref, computed, reactive } from 'vue';
import { evaluatePassword, generatePassword } from './utils/passwordUtils';
import { store } from './store';

import AppTitle from './components/AppTitle.vue';
import CustomCheckbox from './components/CustomCheckbox.vue';
import GenerateButton from './components/GenerateButton.vue';
import PasswordDisplay from './components/PasswordDisplay.vue';
import SliderInput from './components/SliderInput.vue';
import StrengthIndicator from './components/StrengthIndicator.vue';
import ThemeSelector from './components/ThemeSelector.vue';

// Reactive variables
const sliderValue = ref(4); // The length of the password

const generatedPassword = ref('P4$5W0rD!');
const isPasswordVisible = ref(true);
const isPlaceholderPassword = ref(true);
const showToast = ref(false);

const passwordOptions = reactive({
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false
});

const securityLevel = computed(() => evaluatePassword(generatedPassword.value));

// Computed object to store current theme styles
const currentThemeStyles = computed(() => {
  const mode = store.isDarkTheme ? 'dark' : 'light';
  const color = store.color;

  return {
    accentColor: store.themes[mode].colors[color].accentColor,
    btnStyles: store.themes[mode].colors[color].btnStyles,
    cboxStyles: store.themes[mode].colors[color].cboxStyles,
    textStyles: store.themes[mode].colors[color].textStyles,
    sliderColors: store.themes[mode].colors[color].sliderColors
  };
});

// Computed object to store theme data
const themeData = computed(() => {
  const mode = store.isDarkTheme ? 'dark' : 'light';

  return {
    isDarkTheme: store.isDarkTheme,
    color: store.color,
    colors: store.themes[mode].colors,
    styles: currentThemeStyles.value,
    pBackground: store.themes[mode].pBackground,
    sBackground: store.themes[mode].sBackground,
    pTextColor: store.themes[mode].pTextColor,
    sTextColor: store.themes[mode].sTextColor,
  };
});

// Function to update the password length
const updateSliderValue = (newValue) => {
  sliderValue.value = newValue;
};

// Function to generate a new password
const generatePasswordHandler = () => {
  generatedPassword.value = generatePassword(sliderValue.value, passwordOptions);
  isPlaceholderPassword.value = false;
};

// Function to update password options based on user selection
const updateCheckedOptions = (checkedOptions) => {
  for (const option in passwordOptions) {
    passwordOptions[option] = !!checkedOptions[option];
  }
};

// Function to toggle password visibility
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

// Function to display copy notification
const showCopyToast = () => {
  showToast.value = true;
  setTimeout(() => showToast.value = false, 3000);
};

// Function to toggle the theme
const toggleTheme = () => {
  store.isDarkTheme = !store.isDarkTheme;
};

// Function to change the color
const changeColor = (newColor) => {
  console.log("Manejando cambio de color a:", newColor);
  store.color = newColor;
};

import { watch } from 'vue';

watch(() => store.color, (newVal) => {
  console.log("store.color cambió a:", newVal);
});
</script>

<template>
  <div id="app" class="min-h-screen w-full flex flex-col items-center justify-center"
    :class="themeData.pBackground"
  >
    <div class="w-full max-w-md mx-auto">
      <div class="flex gap-4 mx-4 pt-4">
          <ThemeSelector
            :themeData="themeData"
            @toggle-theme="toggleTheme"
            @change-color="changeColor"
          />
      </div>
      <div class="flex flex-col gap-4 mx-4 mt-8"
        :class="themeData.pTextColor"
      >
        <AppTitle text="Password Generator" :themeData="themeData" />
        <PasswordDisplay
          :generatedPassword="generatedPassword"
          :isPlaceholderPassword="isPlaceholderPassword"
          :isPasswordVisible="isPasswordVisible"
          :showToast="showToast"
          :themeData="themeData"
          @toggleVisibility="togglePasswordVisibility"
          @copyPassword="showCopyToast"
        />
        <div class="flex flex-col h-auto"
          :class="themeData.sBackground"
        >
          <SliderInput :value="sliderValue" @sliderChange="updateSliderValue" :themeData="themeData"/>
          <div class="flex flex-col mx-4 mb-8 md:mx-8">
            <CustomCheckbox @update:checkedOptions="updateCheckedOptions" :themeData="themeData"/>
          </div>
          <StrengthIndicator :securityLevel="securityLevel" :themeData="themeData" />
          <GenerateButton @generate="generatePasswordHandler" text="Generate" :themeData="themeData" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>