<script setup>
import { getMatrixPosition, createMatrix } from "@/assets/helpers";
import TicTacToeBox from "@/components/GameZone/TicTacToeBox.vue";
import { ref, onMounted, defineExpose } from "vue";
import { useTimerStore } from "@/stores/timer";
import { useGameStore } from "@/stores/game";
import { useBoardStore } from "@/stores/board";

const gameStore = useGameStore();
const timerStore = useTimerStore();
const boardStore = useBoardStore();

const PLAYER_ONE_X = 1;
const PLAYER_TWO_O = 2;

const loading = ref(false);
const gameSeriesEnded = ref(false);
const gameSeriesEndedMessage = ref("");
const popUpMessage = ref("");
const gameBoardStyle = ref(null);

const popUpMatchWon = ref(false);
const winnerLine = ref([]);

const makeMove = (i) => {
  const matrixPosition = getMatrixPosition(i, boardStore.cells);
  if (loading.value) return;
  if (boardStore.board[matrixPosition[0]][matrixPosition[1]]) return; // check if box is marked
  if (gameStore.matchPlaysHistory.length === 0) {
    // check if first move of match
    timerStore.start("matchTimer");
    if (gameStore.gameHistory.length === 0) {
      // check if first move of series
      timerStore.start("totalTimer");
    }
  }
  loading.value = true;

  const currentPlayer = gameStore.turn === 1 ? PLAYER_ONE_X : PLAYER_TWO_O;
  boardStore.board[matrixPosition[0]][matrixPosition[1]] = currentPlayer;
  const winner = boardStore.calculateWinner(
    boardStore.board,
    ...matrixPosition
  );
  if (winner) {
    winnerLine.value = winner.line;
    gameStore.matchWon(winner);
    if (winner.winner > 0) {
      popUpMessage.value = `Player ${winner.winner} wins!`;
    } else {
      popUpMessage.value = "DRAW!";
    }

    const seriesResults = gameStore.checkSeriesResults();

    if (seriesResults !== null) {
      // do something
      timerStore.stop("totalTimer");
      gameStore.updateSeriesResults(seriesResults);
      gameSeriesEnded.value = true;
      if (seriesResults === 0) {
        gameSeriesEndedMessage.value = "TIED SERIES!";
      } else {
        gameSeriesEndedMessage.value = `PLAYER ${seriesResults} WON THE SERIES!`;
      }
    }

    setTimeout(() => {
      popUpMatchWon.value = true;
    }, 500);
  } else {
    gameStore.nextTurn();
    loading.value = false;
  }
};

const nextMatch = () => {
  boardStore.board = createMatrix(boardStore.cells);
  winnerLine.value = [];
  popUpMatchWon.value = false;
  loading.value = false;
  gameStore.nextMatch();
};

const startNewGameSeries = () => {
  gameSeriesEnded.value = false;
  gameStore.startNewGameSeries();
  nextMatch();
};

const updateCells = (newCells) => {
  gameBoardStyle.value = {
    gridTemplate: `repeat(${newCells}, 1fr) / repeat(${newCells}, 1fr)`,
  };
};

onMounted(() => {
  gameStore.pseudoRandomCoinFlip();
});

defineExpose({
  updateCells,
});
</script>

<template>
  <div class="game-area">
    <div id="game-board" :style="gameBoardStyle">
      <TicTacToeBox
        :key="i"
        v-for="(player, i) in boardStore.board.flat()"
        :index="i"
        :player="player"
        :winnerLine="winnerLine"
        :cells="boardStore.cells"
        @click="makeMove(i)"
      />
    </div>
  </div>
  <Transition>
    <div v-if="popUpMatchWon" class="game-area__pop-up">
      <div v-if="!gameSeriesEnded" class="game-area__pop-up--match-message">
        <p>{{ popUpMessage }}</p>

        <ButtonComponent @click="nextMatch" class="game-area__pop-up--btn">
          Next Match
        </ButtonComponent>
      </div>
      <div v-if="gameSeriesEnded" class="game-area__pop-up--series-message">
        <p>
          {{ gameSeriesEndedMessage }}
        </p>
        <ButtonComponent
          @click="startNewGameSeries"
          class="game-area__pop-up--btn"
        >
          New Series
        </ButtonComponent>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.game-area {
  position: absolute;
  width: 100%;
  height: 100%;

  #game-board {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  }
}
.game-area__pop-up {
  @include column-centered;
  background-color: rgba($color: #000000, $alpha: 0.8);
  position: absolute;
  width: 100%;
  height: 100%;

  .game-area__pop-up--match-message {
    p {
      color: #fff;
      font-size: 2.5rem;
    }
  }
  .game-area__pop-up--series-message {
    p {
      color: $green;
      font-size: 3rem;
      font-weight: bold;
    }

    button {
      background-color: $yellow;
    }
  }

  .game-area__pop-up--btn {
    margin-top: 48px;
  }
}

/* we will explain what these classes do next! */
.v-enter-active {
  transition: opacity 2s ease-in-out;
}

.v-enter-from {
  opacity: 0;
}
</style>
