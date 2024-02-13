<script setup>
// Define props for the component
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  themeData: Object,
});
</script>

<template>
  <div class="text-center">
    <h1 class="font-custom font-bold text-md"
      :class="themeData.pTextColor"
    >
      {{ props.text }}
    </h1>
  </div>
</template>

<style scoped>
</style>