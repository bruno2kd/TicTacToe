<script setup>
import GameIntro from "@/components/GameZone/GameIntro.vue";
import GameClock from "@/components/GameZone/GameClock.vue";
import PlayerComponent from "@/components/GameZone/PlayerComponent.vue";
import GameBoard from "@/components/GameZone/GameBoard.vue";

import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();
</script>

<template>
  <section>
    <div class="game-zone container">
      <GameIntro />
      <div class="centered">
        <div class="game-zone__player--desktop">
          <PlayerComponent
            :player="1"
            :currentTurn="gameStore.turn === 1"
            :turnCount="gameStore.playerOnePlays"
          />
        </div>
        <div class="game-zone__game-board">
          <GameBoard />
        </div>
        <div class="game-zone__player--desktop">
          <PlayerComponent
            :player="2"
            :currentTurn="gameStore.turn === 2"
            :turnCount="gameStore.playerTwoPlays"
          />
        </div>
      </div>

      <div class="game-zone__clock">
        <div class="game-zone__player--mobile">
          <PlayerComponent
            :player="1"
            :currentTurn="gameStore.turn === 1"
            :turnCount="gameStore.playerOnePlays"
          />
        </div>
        <GameClock />
        <div class="game-zone__player--mobile">
          <PlayerComponent
            :player="2"
            :currentTurn="gameStore.turn === 2"
            :turnCount="gameStore.playerTwoPlays"
          />
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
    position: relative;
  }
  .game-zone__game-board:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .game-zone__clock {
    display: flex;
    justify-content: space-around;
    align-items: start;
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
