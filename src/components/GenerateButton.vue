<script setup>
import ArrowRightIcon from '../assets/icons/ArrowRightIcon.vue';

// Define an emit function to communicate with the parent component
const emit = defineEmits(['generate']);
</script>

<template>
    <div class="flex mx-4 mb-4 md:mx-8 md:mb-8">
        <button class="flex justify-center items-center space-x-4 md:space-x-6 rounded-none h-14 md:h-16 w-full bg-pg-green border-2 border-transparent text-pg-dark-grey active:bg-pg-black active:border-pg-green active:text-pg-green"
            @click="emit('generate')"
        >
            <p class="uppercase font-custom font-bold">Generate</p>
            <ArrowRightIcon />
        </button>
    </div>
</template>

<style scoped>
</style>