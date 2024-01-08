<script setup>
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
    <h1 class="font-custom font-bold text-pg-grey text-sm">
      {{ props.text }}
    </h1>
  </div>
</template>

<style scoped>
</style>