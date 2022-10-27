<script setup>
defineProps({
  time: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <time>
    {{ time }}
  </time>
</template>
