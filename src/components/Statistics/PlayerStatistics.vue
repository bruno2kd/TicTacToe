<script setup>
import PercentageStats from "@/components/Statistics/PercentageStats.vue";

const props = defineProps({
  player: {
    type: Number,
    required: true,
  },
  winsPercentage: {
    type: Number,
    default: 0,
  },
  lossPercentage: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="player-statistics">
    <p class="player-statistics--title">Player {{ props.player }}</p>
    <div class="centered">
      <PercentageStats :percentage="winsPercentage" subtitle="W" />
      <PercentageStats :percentage="lossPercentage" subtitle="L" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player-statistics {
  @include column-centered;
  margin: 0 24px;
  .player-statistics--title {
    font-size: 1.2rem;
    padding: 8px;
  }
}
</style>
