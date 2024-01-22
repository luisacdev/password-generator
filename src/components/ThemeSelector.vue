<script setup>
import { store } from '../store';

import CheckIcon from '../assets/icons/CheckIcon.vue';
import DarkIcon from '../assets/icons/DarkIcon.vue';
import LightIcon from '../assets/icons/LightIcon.vue';

const colors = {
  'green': { bgClass: 'bg-green' },
  'blue': { bgClass: 'bg-blue' },
  'purple': { bgClass: 'bg-purple' },
};

// Function to switch themes
const toggleTheme = () => {
  store.isDarkTheme = !store.isDarkTheme;
};
</script>

<template>
  <div class="inline-flex p-2 bg-dark-grey rounded-lg shadow space-x-4">
    <!-- Selector de color -->
    <div v-for="(color, name) in colors" :key="name" class="flex items-center">
      <label :for="name" class="cursor-pointer">
        <div class="relative flex items-center justify-center w-5 h-5" :class="color.bgClass">
          <input :id="name" type="radio" :value="name" v-model="store.color"
            class="opacity-0 absolute inset-0 w-full h-full">
          <span class="flex justify-center items-center">
            <CheckIcon v-if="store.color === name" />
          </span>
        </div>
      </label>
    </div>
    <!-- Switcher de tema oscuro y claro -->
    <div v-if="store.isDarkTheme" @click="toggleTheme" class="flex items-center justify-center w-5 h-5">
      <LightIcon :class="store.textColorClasses[store.color]" />
    </div>
    <div v-else @click="toggleTheme" class="flex items-center justify-center w-5 h-5">
      <DarkIcon :class="store.textColorClasses[store.color]" />
    </div>
  </div>
</template>

<style scoped>
</style>
