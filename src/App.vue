<script setup>
// TODO: Dark & Light Theme
// TODO: Change Accent Color

import { ref, computed, reactive } from 'vue';
import { evaluatePassword, generatePassword } from './utils/passwordUtils';

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
</script>

<template>
  <div class="flex gap-4 mx-4 mt-4">
    <ThemeSelector />
  </div>
  <div class="flex flex-col gap-4 mx-4 mt-8 text-white">
    <AppTitle text="Password Generator" />
    <PasswordDisplay
      :generatedPassword="generatedPassword"
      :isPlaceholderPassword="isPlaceholderPassword"
      :isPasswordVisible="isPasswordVisible"
      :showToast="showToast"
      @toggleVisibility="togglePasswordVisibility"
      @copyPassword="showCopyToast"
    />
    <div class="flex flex-col h-auto bg-dark-grey">
      <SliderInput :value="sliderValue" @sliderChange="updateSliderValue" />
      <div class="flex flex-col mx-4 mb-8 md:mx-8">
        <CustomCheckbox @update:checkedOptions="updateCheckedOptions" />
      </div>
      <StrengthIndicator :securityLevel="securityLevel" />
      <GenerateButton @generate="generatePasswordHandler" />
    </div>
  </div>
</template>

<style scoped>
</style>