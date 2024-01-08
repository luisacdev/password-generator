<script setup>
import { computed } from 'vue'

// Define props to specify the component's expected props
const props = defineProps({
  securityLevel: Number
})

// Define options for different security levels
const options = [
  { text: 'TOO WEAK!', color: 'bg-pg-red', active: 1, inactive: 3 },
  { text: 'WEAK', color: 'bg-pg-orange', active: 2, inactive: 2 },
  { text: 'MEDIUM', color: 'bg-pg-yellow', active: 3, inactive: 1 },
  { text: 'STRONG', color: 'bg-pg-green', active: 4, inactive: 0 }
]

// Compute the selected option based on the security level prop
let option = computed(() => options[props.securityLevel - 1])

// Compute active and inactive boxes based on the selected option
let activeBoxes = computed(() => new Array(option.value.active).fill(true))
let inactiveBoxes = computed(() => new Array(option.value.inactive).fill(false))

</script>

<template>
    <div class="flex h-14 md:h-16 mx-4 mb-4 md:mx-8 md:mb-8 bg-pg-black justify-between">
        <div class="ml-4 my-auto font-custom font-bold text-pg-grey text-sm">STRENGTH</div>
        <div v-if="option" class="flex items-center mr-4 my-auto font-custom font-bold text-pg-white text-body">
            <div class="mr-4">{{ option.text }}</div>
            <div v-for="(isActive, index) in [...activeBoxes, ...inactiveBoxes]" 
                :key="`${isActive ? 'active' : 'inactive'}-${index}`"
                class="w-2.5 h-7 mr-2" 
                :class="[isActive ? option.color : 'border-2 border-pg-white']">
            </div>
        </div>
    </div>
</template>