<script setup>
import StopWatch from "@/components/UI/StopWatch.vue";
import { useTimerStore } from "@/stores/timer";
const timerStore = useTimerStore();
</script>

<template>
  <div class="total-time">
    <h3>Total time</h3>
    <StopWatch :time="timerStore.timers.totalTimer" />
  </div>
</template>

<style lang="scss" scoped>
.total-time {
  @include column-centered;
  padding: 32px 0;

  p {
    padding: 12px;
    font-size: 1.2rem;
  }
}
</style>
