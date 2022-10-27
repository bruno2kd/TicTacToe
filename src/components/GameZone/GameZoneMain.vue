<script setup>
import { ref } from "vue";

import GameIntro from "@/components/GameZone/GameIntro.vue";
import GameClock from "@/components/GameZone/GameClock.vue";
import PlayerComponent from "@/components/GameZone/PlayerComponent.vue";
import GameBoard from "@/components/GameZone/GameBoard.vue";
import InputRange from "@/components/GameZone/InputRange.vue";

import { useGameStore } from "@/stores/game";
import { useBoardStore } from "@/stores/board";
const gameStore = useGameStore();
const boardStore = useBoardStore();

const gameBoardRef = ref(null);

const inputUpdated = (newCells) => {
  // other approach could be create a variable in store and watch changes in component
  gameBoardRef.value.updateCells(newCells);
  boardStore.updateCells(newCells);
};
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
            :matchWinsCount="gameStore.matchesWonByEachPlayer.p1"
          />
        </div>
        <div class="game-zone__game-board">
          <GameBoard ref="gameBoardRef" />
        </div>
        <div class="game-zone__player--desktop">
          <PlayerComponent
            :player="2"
            :currentTurn="gameStore.turn === 2"
            :matchWinsCount="gameStore.matchesWonByEachPlayer.p2"
          />
        </div>
      </div>

      <InputRange :rangeInput="boardStore.cells" @updateInput="inputUpdated" />

      <div class="game-zone__clock">
        <div class="game-zone__player--mobile">
          <PlayerComponent
            :player="1"
            :currentTurn="gameStore.turn === 1"
            :matchWinsCount="gameStore.matchesWonByEachPlayer.p1"
          />
        </div>
        <GameClock />
        <div class="game-zone__player--mobile">
          <PlayerComponent
            :player="2"
            :currentTurn="gameStore.turn === 2"
            :matchWinsCount="gameStore.matchesWonByEachPlayer.p2"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $light-gray;
  width: 100%;
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
