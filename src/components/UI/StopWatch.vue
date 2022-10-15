<script setup>
defineProps({
  time: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <p>
    {{ time }}
  </p>
</template>
