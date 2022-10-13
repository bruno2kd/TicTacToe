<script setup>
import GameIntro from "@/components/GameZone/GameIntro.vue";
import GameClock from "@/components/GameZone/GameClock.vue";
import PlayerComponent from "@/components/GameZone/PlayerComponent.vue";
</script>

<template>
  <section>
    <div class="game-zone container">
      <GameIntro />
      <div class="centered">
        <div class="game-zone__player--desktop">
          <PlayerComponent />
        </div>
        <div class="game-zone__game-board">box2</div>
        <div class="game-zone__player--desktop">
          <PlayerComponent />
        </div>
      </div>

      <div class="game-zone__clock">
        <div class="game-zone__player--mobile">
          <PlayerComponent />
        </div>
        <GameClock />
        <div class="game-zone__player--mobile">
          <PlayerComponent />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $light-gray;
  width: 100vw;
}

.game-zone {
  .game-zone__player--desktop {
    margin: 0 auto;

    @media screen and (max-width: $mobile-break) {
      display: none;
    }
  }

  .game-zone__game-board {
    flex-shrink: 1;
    width: 500px;
    text-align: center;
    border: 1px solid black;
    margin: 0 16px;
  }
  .game-zone__game-board:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .game-zone__clock {
    @include centered;
    justify-content: space-around;
    margin: 32px;
    .game-zone__player--mobile {
      display: none;
      @media screen and (max-width: $mobile-break) {
        display: block;
      }
    }
  }
}
</style>
