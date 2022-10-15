<script setup>
const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="column-centered">
    <div class="player-circle">{{ props.percentage }}%</div>
    <p>{{ props.subtitle }}</p>
  </div>
</template>

<style lang="scss" scoped>
.player-circle {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  margin: 8px;
  border-radius: 50%;
  font-weight: bold;
  background-color: $dark-gray;
  color: #fff;
}
</style>
