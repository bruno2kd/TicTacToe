<script setup>
import StopWatch from "@/components/UI/StopWatch.vue";
import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();

const updateTime = (newTime) => {
  gameStore.updateTotalTime(newTime);
};
</script>

<template>
  <div class="total-time">
    <h3>Total time</h3>
    <StopWatch :time="gameStore.totalTime" @updateTime="updateTime" />
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
