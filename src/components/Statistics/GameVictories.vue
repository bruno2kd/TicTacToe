<script setup>
import PlayerStatistics from "@/components/UI/PlayerStatistics.vue";

import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();
</script>

<template>
  <div class="game-victories">
    <h3>Game victories %</h3>
    <div class="centered">
      <PlayerStatistics
        :player="1"
        :winsPercentage="gameStore.winsP1"
        :gameStarted="gameStore.gameHistory.length > 0"
      />
      <PlayerStatistics
        :player="2"
        :winsPercentage="100 - gameStore.winsP1"
        :gameStarted="gameStore.gameHistory.length > 0"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-victories {
  @include column-centered;
  h3 {
    padding: 16px 0;
  }
}
</style>
