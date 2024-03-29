<script setup>
import EyeIcon from '../assets/icons/EyeIcon.vue';
import CopyIcon from '../assets/icons/CopyIcon.vue';
import ToastNotification from './ToastNotification.vue';

// Define props to specify the component's expected props
const props = defineProps({
  generatedPassword: String,
  isPlaceholderPassword: Boolean,
  isPasswordVisible: Boolean,
  showToast: Boolean,
  themeData: Object,
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
    :class="themeData.sBackground"
  >
    <div class="flex-auto ml-4 md:ml-8 my-auto">
      <p class="font-custom font-bold sm:text-body md:text-md"
        :class="themeData.pTextColor"
      >
        {{ isPasswordVisible ? generatedPassword : '•'.repeat(generatedPassword.length) }}
      </p>
    </div>
    <div class="w-5 mr-4 md:mr-8 my-auto" @click="handleToggleVisibility">
      <EyeIcon class="active:text-white"
        :class="themeData.styles.textStyles"
      />
    </div>
    <div class="w-5 mr-4 md:mr-8 my-auto" @click="handleCopyPassword">
      <CopyIcon class="active:text-white"
      :class="themeData.styles.textStyles"
      />
    </div>
    <ToastNotification v-if="showToast"
    :themeData="themeData"
    >Password copied!</ToastNotification>
  </div>
</template>

<style scoped>
</style>