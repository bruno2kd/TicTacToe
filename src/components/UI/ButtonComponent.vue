<script setup>
defineEmits(["onClick"]);
const props = defineProps({
  class: {
    type: String,
  },
});
</script>

<template>
  <button class="btn" :class="props.class" @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>
