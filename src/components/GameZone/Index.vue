<script setup>
import GameIntro from "@/components/GameZone/GameIntro.vue";
import GameClock from "@/components/GameZone/GameClock.vue";
</script>

<template>
  <section>
    <div class="game-zone container">
      <GameIntro />
      <div class="centered">
        <div class="game-zone__player">
          <p class="game-zone__player--title">Player 1</p>
          <p class="game-zone__player--count">1</p>
        </div>
        <div class="game-zone__game-board">box2</div>
        <div class="game-zone__player">
          <p class="game-zone__player--title">Player 2</p>
          <p class="game-zone__player--count">2</p>
        </div>
      </div>
      <GameClock />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: rgb(235, 235, 235);
  width: 100vw;
}

.game-zone {
  .game-zone__game-board {
    flex-shrink: 1;
    width: 500px;
    text-align: center;
    border: 1px solid black;
  }
  .game-zone__game-board:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .game-zone__player {
    text-align: center;
    margin: auto;
    padding: 100px;
    flex-shrink: 0;
    font-size: 2rem;
    font-weight: bold;

    .game-zone__player--count {
      font-size: 4rem;
      padding: 12px 0;
      font-weight: normal;
    }
  }
}
</style>
