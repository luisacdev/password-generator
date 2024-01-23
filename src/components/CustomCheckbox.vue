<script setup>
import { reactive, onMounted, nextTick } from 'vue'
import { store } from '../store';
import CheckIcon from '../assets/icons/CheckIcon.vue';

// Define the checkboxes and their labels
const checkboxes = {
  'uppercase-checkbox': 'Include Uppercase Letters',
  'lowercase-checkbox': 'Include Lowercase Letters',
  'numbers-checkbox': 'Include Numbers',
  'symbols-checkbox': 'Include Symbols'
}

// Create a reactive object for checkbox states
let checkboxState = reactive({
  'uppercase-checkbox': true,
  'lowercase-checkbox': false,
  'numbers-checkbox': false,
  'symbols-checkbox': false
})

// Define an emit function to communicate with the parent component
const emit = defineEmits(['update:checkedOptions'])

// Function to update the state of checkboxes
const updateCheckboxState = async (id) => {
  const isLowercaseOrUppercase = id === 'uppercase-checkbox' || id === 'lowercase-checkbox';

  checkboxState[id] = !checkboxState[id];

  // Ensure at least one of 'uppercase' or 'lowercase' is selected
  if (isLowercaseOrUppercase && !checkboxState['uppercase-checkbox'] && !checkboxState['lowercase-checkbox']) {
    checkboxState['uppercase-checkbox'] = false;
    await nextTick();
    checkboxState['uppercase-checkbox'] = true;
  }

  emitUpdate();
}

// Function to emit the updated checkbox state to the parent
const emitUpdate = () => {
  const checkedOptions = {}
  for (const [id, state] of Object.entries(checkboxState)) {
    if (state) {
      const option = id.split('-')[0] 
      checkedOptions[option] = true
    }
  }
  emit('update:checkedOptions', checkedOptions)
}

// Emit the initial state when the component is mounted
onMounted(emitUpdate)
</script>

<template>
  <div v-for="(labelText, id) in checkboxes" :key="id" class="flex items-center mb-4 md:mb-5">
    <label :for="id" class="cursor-pointer flex items-center">
      <div class="relative flex items-center">
        <input :id="id" type="checkbox" :checked="checkboxState[id]" @change="() => updateCheckboxState(id)"
          class="appearance-none rounded-none w-5 h-5 border-2"
          :class="store.isDarkTheme ? store.themes.dark.colors[store.color].cboxStyles : store.themes.light.colors[store.color].cboxStyles"
          >
        <span v-if="checkboxState[id]" class="absolute inset-0 flex justify-center items-center text-black">
          <CheckIcon />
        </span>
      </div>
      <span class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ labelText }}</span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
</style>