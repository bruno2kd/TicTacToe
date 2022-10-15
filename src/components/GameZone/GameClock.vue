<script setup>
import StopWatch from "@/components/UI/StopWatch.vue";
import { useTimerStore } from "@/stores/timer";
const timerStore = useTimerStore();
</script>

<template>
  <div class="game-clock">
    <StopWatch :time="timerStore.matchTimer" />
  </div>
</template>

<style lang="scss" scoped>
.game-clock {
  @include centered;
  padding: 16px 0 48px;

  p {
    font-size: 1.5rem;
  }
}
</style>
