<script setup></script>

<template>
  <div class="player">
    <p class="player--title">Player 1</p>
    <p class="player--count">1</p>
  </div>
</template>

<style lang="scss" scoped>
.player {
  text-align: center;
  flex-shrink: 0;
  font-size: 2rem;
  font-weight: bold;

  .player--count {
    font-size: 4rem;
    padding: 12px 0;
    font-weight: normal;
  }
}
</style>
