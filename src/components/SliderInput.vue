<script setup>
import { ref, watch, computed } from 'vue';

// Define props to specify the component's expected props
const props = defineProps({
  value: Number,
  themeData: Object,
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

// 'sliderStyle' is a computed property that generates an inline style object.
// The styles are based on the current values stored in 'themeData' and 'internalValue'.
const sliderStyle = computed(() => {
  const color = props.themeData.styles.sliderColors.color;
  const track = props.themeData.styles.sliderColors.track;
  const thumb = props.themeData.styles.sliderColors.thumb;
  const thumbActive = props.themeData.styles.sliderColors.thumbActive;
  const val = internalValue.value.toString();

  return {
    '--fill-color': color,
    '--thumb-border-color-active': color,
    '--min': '4',
    '--max': '20',
    '--val': val,
    '--track-c': track,
    '--thumb-c': thumb,
    '--thumb-c-active': thumbActive,
  };
});
</script>

<template>
    <div class="flex mt-4 mx-4 mb-2">
      <div class="flex grow items-center">
        <p class="font-custom font-bold text-sm"
          :class="themeData.pTextColor"
        >
              Character Length
        </p>
      </div>
      <div class="flex grow-0 items-center">
        <p class="font-custom font-bold text-md"
          :class="themeData.styles.textStyles"
        >
              {{ value }}
        </p>
      </div>
    </div>
    <div class="flex custom_slider mx-4 mb-8">
      <input type="range" class="custom_slider" step="1" min="4" max="20"
        @input="onInput" v-model="internalValue"
        :style="sliderStyle"
      />
    </div>
</template>

<style lang="scss" scoped>
/* https://css-tricks.com/sliding-nightmare-understanding-range-input/ */
$track-w: 100%;
$track-h: 8px;
$thumb-d: 28px;
$track-c: var(--track-c);
$thumb-c: var(--thumb-c);
$thumb-c-active: var(--thumb-c-active);

@mixin track($fill: 0) {
  box-sizing: border-box;
  border: none;
  width: $track-w; height: $track-h;
  background: $track-c;

  @if $fill == 1 {
    .custom_slider & {
      background: linear-gradient(var(--fill-color), var(--fill-color))
        0/ var(--sx) 100% no-repeat $track-c;
    }
  }
}

@mixin fill() {
  height: $track-h;
  background: var(--fill-color);
}

@mixin thumb() {
  box-sizing: border-box;
  border: none;
  width: $thumb-d; height: $thumb-d;
  border-radius: 50%;
  background: $thumb-c;

  &:active {
    background: $thumb-c-active;
    border: 2px solid var(--thumb-border-color-active);
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
