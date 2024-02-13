<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Define a ref for controlling visibility
const visible = ref(false);

// Define a ref for the timeout
const timeout = ref(null);

// Define props for background color and text color
const props = defineProps({
  bgColor: String,
  pTextColor: String,
  themeData: Object,
});

// Function to show the toast with an optional duration
const show = (duration = 3000) => {
  visible.value = true;
  timeout.value = setTimeout(() => {
    visible.value = false;
  }, duration);
};

// Function to close the toast
const closeToast = () => {
  visible.value = false;
  clearTimeout(timeout.value);
};

// Hook to show the toast when mounted
onMounted(() => {
  show();
});

// Hook to clear the timeout when unmounted
onUnmounted(() => {
  clearTimeout(timeout.value);
});
</script>

<template>
  <div 
    v-if="visible"
    class="fixed top-4 right-4 md:top-8 md:right-8 p-4 max-w-sm rounded-lg transition duration-500"
    :class="themeData.styles.btnStyles"
  >
    <div class="flex items-center">
      <div class="ml-3">
        <p class="font-custom font-bold text-sm"
          :class="themeData.sTextColor"
        >
          <slot></slot>
        </p>
      </div>
      <div class="ml-auto pl-3">
        <button :class="themeData.sTextColor" @click="closeToast">
          ×
        </button>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
</style>