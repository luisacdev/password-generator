<script setup>
import { computed } from 'vue';
import { store } from '../store';
import EyeIcon from '../assets/icons/EyeIcon.vue';
import CopyIcon from '../assets/icons/CopyIcon.vue';
import ToastNotification from './ToastNotification.vue';

// Define props to specify the component's expected props
const props = defineProps({
  generatedPassword: String,
  isPlaceholderPassword: Boolean,
  isPasswordVisible: Boolean,
  showToast: Boolean,
});

// Define an emit function to communicate with the parent component
const emit = defineEmits(['toggleVisibility', 'copyPassword']);

// Handler function to toggle password visibility
function handleToggleVisibility() {
  emit('toggleVisibility');
}

// Async handler function to copy the password to the clipboard
async function handleCopyPassword() {
  const passwordToCopy = props.generatedPassword;
  try {
    await navigator.clipboard.writeText(passwordToCopy);
    emit('copyPassword');
  } catch (err) {
    console.error('Error copying to clipboard:', err);
  }
}
</script>

<template>
  <div class="flex flex-row h-16 md:h-20 items-center"
    :class="store.isDarkTheme ? store.themes.dark.sBackground : store.themes.light.sBackground"
  >
    <div class="flex-auto ml-4 md:ml-8 my-auto">
      <p class="font-custom font-bold sm:text-body md:text-md"
        :class="store.isDarkTheme ? store.themes.dark.textColor : store.themes.light.textColor"
      >
        {{ isPasswordVisible ? generatedPassword : '•'.repeat(generatedPassword.length) }}
      </p>
    </div>
    <div class="w-5 mr-4 md:mr-8 my-auto" @click="handleToggleVisibility">
      <EyeIcon class="active:text-white"
        :class="store.isDarkTheme ? store.themes.dark.colors[store.color].textStyles : store.themes.light.colors[store.color].textStyles"
      />
    </div>
    <div class="w-5 mr-4 md:mr-8 my-auto" @click="handleCopyPassword">
      <CopyIcon class="active:text-white"
        :class="store.isDarkTheme ? store.themes.dark.colors[store.color].textStyles : store.themes.light.colors[store.color].textStyles"
      />
    </div>
    <ToastNotification v-if="showToast" class="text-black"
    :class="store.isDarkTheme ? store.themes.dark.colors[store.color].accentColor : store.themes.light.colors[store.color].accentColor"
    >Password copied!</ToastNotification>
  </div>
</template>

<style scoped>
</style>