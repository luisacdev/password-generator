<script setup>
import { defineProps, defineEmits } from 'vue'; // Import the missing functions
import CheckIcon from '../assets/icons/CheckIcon.vue';
import DarkIcon from '../assets/icons/DarkIcon.vue';
import LightIcon from '../assets/icons/LightIcon.vue';

// Define props for the component
const props = defineProps({
  themeData: Object,
});

// Define emits for the component
const emit = defineEmits(['toggle-theme', 'change-color']);

// Function to toggle the theme
const toggleTheme = () => {
  emit('toggle-theme');
};

// Function to change the color
const changeColor = (newColor) => {
  console.log("Emitiendo cambio de color:", newColor);
  emit('change-color', newColor);
};
</script>

<template>
  <div class="inline-flex p-2 rounded-lg shadow space-x-4"
    :class="themeData.sBackground"
  >
    <div v-for="(color, name) in themeData.colors" :key="name" class="flex items-center">
      <label :for="name" class="cursor-pointer">
        <div class="relative flex items-center justify-center w-5 h-5" :class="color.accentColor">
          <input :id="name" type="checkbox" :value="name" @change="() => changeColor(name)" class="opacity-0 absolute inset-0 w-full h-full">
          <span class="flex justify-center items-center">
            <CheckIcon v-if="themeData.color === name" :class="themeData.sTextColor" />
          </span>
        </div>
      </label>
    </div>
    <div @click="toggleTheme" class="flex items-center justify-center w-5 h-5">
      <template v-if="themeData.isDarkTheme">
        <LightIcon :class="themeData.pTextColor" />
      </template>
      <template v-else>
        <DarkIcon :class="themeData.pTextColor" />
      </template>
    </div>
  </div>
</template>

<style scoped>
</style>