<script setup>
import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();
</script>

<template>
  <div class="game-history">
    <h3>Game History</h3>
    <div class="game-history__list">
      <div class="game-history__item" v-for="i in 5" :key="i">
        <p>{{gameStore.gameHistory[i-1]}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-history {
  @include column-centered;
  margin-top: 24px;

  .game-history__list {
    @include centered;
    .game-history__item {
      @include centered;
      border: 1px solid $dark-gray;
      margin: 16px 3px;
      width: 1.4rem;
      height: 1.4rem;
    }
  }
}
</style>
