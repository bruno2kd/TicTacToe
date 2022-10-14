<script setup>
import PercentageStats from "@/components/UI/PercentageStats.vue";

const props = defineProps({
  player: {
    type: Number,
    required: true,
  },
  winsPercentage: {
    type: Number,
    required: true,
  },
  gameStarted: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="player-statistics">
    <p class="player-statistics--title">Player {{ props.player }}</p>
    <div class="centered">
      <!-- TODO: change it to component -->
      <PercentageStats
        :percentage="gameStarted ? winsPercentage : 0"
        subtitle="W"
      />
      <PercentageStats
        :percentage="gameStarted ? 100 - winsPercentage : 0"
        subtitle="L"
      />
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
