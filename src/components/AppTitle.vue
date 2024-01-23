<script setup>
import { store } from '../store';

// Define props for the component
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="text-center">
    <h1 class="font-custom font-bold text-md"
      :class="store.isDarkTheme ? store.themes.dark.textColor : store.themes.light.textColor"
    >
      {{ props.text }}
    </h1>
  </div>
</template>

<style scoped>
</style>