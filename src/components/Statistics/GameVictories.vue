<script setup>
import PlayerStatistics from "@/components/Statistics/PlayerStatistics.vue";

import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();
</script>

<template>
  <div class="game-victories">
    <h3>Game victories %</h3>
    <div class="centered">
      <PlayerStatistics
        :player="1"
        :winsPercentage="gameStore.winsPercentage.p1WinsPercentage"
        :lossPercentage="gameStore.winsPercentage.p2WinsPercentage"
      />
      <PlayerStatistics
        :player="2"
        :winsPercentage="gameStore.winsPercentage.p2WinsPercentage"
        :lossPercentage="gameStore.winsPercentage.p1WinsPercentage"
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
