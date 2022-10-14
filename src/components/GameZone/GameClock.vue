<script setup>
import StopWatch from "@/components/UI/StopWatch.vue";
import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();

const updateTime = (newTime) => {
  gameStore.updateMatchTime(newTime);
};
</script>

<template>
  <div class="game-clock">
    <StopWatch :time="gameStore.matchTime" @updateTime="updateTime" />
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
