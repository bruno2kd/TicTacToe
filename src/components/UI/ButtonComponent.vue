<script setup>
const props = defineProps({
  class: {
    type: String,
  },
});
</script>

<template>
  <button class="btn" :class="props.class">
    <slot></slot>
  </button>
</template>
