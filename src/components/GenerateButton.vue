<script setup>
import ArrowRightIcon from '../assets/icons/ArrowRightIcon.vue';

// Define props for the component
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  themeData: Object,
});

// Define an emit function to communicate with the parent component
const emit = defineEmits(['generate']);
</script>

<template>
    <div class="flex mx-4 mb-4 md:mx-8 md:mb-8">
        <button class="flex justify-center items-center space-x-4 md:space-x-6 rounded-none h-14 md:h-16 w-full border-2"
            @click="emit('generate')"
            :class="themeData.styles.btnStyles"
        >
            <p class="uppercase font-custom font-bold">
              {{ props.text }}
            </p>
            <ArrowRightIcon />
        </button>
    </div>
</template>

<style scoped>
</style>