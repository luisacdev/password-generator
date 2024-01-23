<script setup>
import { store } from '../store';
import CheckIcon from '../assets/icons/CheckIcon.vue';
import DarkIcon from '../assets/icons/DarkIcon.vue';
import LightIcon from '../assets/icons/LightIcon.vue';

// Function to switch themes
const toggleTheme = () => {
  store.isDarkTheme = !store.isDarkTheme;
};

</script>

<template>
  <div class="inline-flex p-2 rounded-lg shadow space-x-4"
    :class="store.isDarkTheme ? store.themes.dark.sBackground : store.themes.light.sBackground"
  >
    <!-- Selector de color -->
    <div v-for="(color, name) in store.isDarkTheme ? store.themes.dark.colors : store.themes.light.colors" :key="name" class="flex items-center">
      <label :for="name" class="cursor-pointer">
        <div class="relative flex items-center justify-center w-5 h-5" :class="color.accentColor">
          <input :id="name" type="radio" :value="name" v-model="store.color" class="opacity-0 absolute inset-0 w-full h-full">
          <span class="flex justify-center items-center">
            <CheckIcon v-if="store.color === name" />
          </span>
        </div>
      </label>
    </div>
    <!-- Switcher de tema oscuro y claro -->
    <div @click="toggleTheme" class="flex items-center justify-center w-5 h-5">
      <template v-if="store.isDarkTheme">
        <LightIcon :class="store.themes.dark.textColor" />
      </template>
      <template v-else>
        <DarkIcon :class="store.themes.light.textColor" />
      </template>
    </div>
  </div>
</template>

<style scoped>
</style>