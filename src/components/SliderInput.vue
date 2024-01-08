<script setup>
import { ref, watch } from 'vue';

// Define props to specify the component's expected props
const props = defineProps({
  value: Number
});

// Define an emit function to communicate with the parent component
const emits = defineEmits(['sliderChange']);

// Create a ref for the internal value
const internalValue = ref(props.value);

// Watch for changes in props.value and update internalValue accordingly
watch(() => props.value, (newValue) => {
  internalValue.value = newValue;
});

// Handler function to handle the input event
const onInput = (event) => {
  const numericValue = Number(event.target.value);
  emits('sliderChange', numericValue);
};
</script>

<template>
    <div class="flex mt-4 mx-4 mb-2">
      <div class="flex grow items-center">
        <p class="font-custom font-bold text-pg-white text-sm">
              Character Length
        </p>
      </div>
      <div class="flex grow-0 items-center">
        <p class="font-custom font-bold text-pg-green text-md">
              {{ value }}
        </p>
      </div>
    </div>
    <div class="flex custom_slider mx-4 mb-8">
      <input type="range" class="custom_slider" step="1" min="4" max="20"
         @input="onInput" v-model="internalValue"
         style="--min: 4; --max: 20;" :style="{ '--val': internalValue }" />
    </div>
</template>

<style lang="scss" scoped>
/* https://css-tricks.com/sliding-nightmare-understanding-range-input/ */
$track-w: 100%;
$track-h: 8px;
$thumb-d: 28px;
$track-c: #18171F;
$filll-c: #A4FFAF;
$thumb-c: #E6E5EA;
$thumb-c-active: #18171F;
$thumb-b-active: #A4FFAF;

@mixin track($fill: 0) {
  box-sizing: border-box;
  border: none;
  width: $track-w; height: $track-h;
  background: $track-c;

  @if $fill == 1 {
    .custom_slider & {
      background: linear-gradient($filll-c, $filll-c)
        0/ var(--sx) 100% no-repeat $track-c;
    }
  }
}

@mixin fill() {
  height: $track-h;
  background: $filll-c;
}

@mixin thumb() {
  box-sizing: border-box;
  border: none;
  width: $thumb-d; height: $thumb-d;
  border-radius: 50%;
  background: $thumb-c;

  &:active {
    background: $thumb-c-active;
    border: 2px solid $thumb-b-active;
  }
}

[type='range'] {
  &, &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min))/var(--range));
  --sx: calc(.5*#{$thumb-d} + var(--ratio)*(100% - #{$thumb-d}));
  margin: 0;
  padding: 0;
  width: $track-w; height: $thumb-d;
  background: transparent;
  font: 1em/1 arial, sans-serif;

  &::-webkit-slider-runnable-track {
    @include track(1);
  }
  &::-moz-range-track { @include track; }
  &::-ms-track { @include track; }

  &::-moz-range-progress { @include fill; }
  &::-ms-fill-lower { @include fill; }

  &::-webkit-slider-thumb {
    margin-top: .5*($track-h - $thumb-d);
    @include thumb;
  }
  &::-moz-range-thumb { @include thumb; }
  &::-ms-thumb {
    margin-top: 0;
    @include thumb;
  }

  &::-ms-tooltip { display: none; }
}
</style>
