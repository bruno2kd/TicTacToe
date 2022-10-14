<script setup>
import TicTacToeBox from "@/components/GameZone/TicTacToeBox.vue";
import { ref, onMounted } from "vue";

import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();

const PLAYER_ONE_X = 1;
const PLAYER_TWO_O = 2;

const cells = ref(3); // TODO: change this
const loading = ref(false);
const popUpMessage = ref("");
const board = ref([null, null, null, null, null, null, null, null, null]);
const popUpGameWon = ref(false);
const winnerLine = ref([]);

// TODO: programatticaly
const createCells = (x) => {
  return [...Array(x).keys()].map(() => null);
};

const calculateWinner = (squares) => {
  const possibleWinnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibleWinnerLines.length; i++) {
    const [a, b, c] = possibleWinnerLines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: [a, b, c],
      };
    }
  }

  if (!squares.includes(null)) {
    // draw handling
    return {
      winner: 0,
      line: [],
    };
  }

  return null;
};

const makeMove = (i) => {
  if (loading.value) return;
  loading.value = true;
  board.value[i] = gameStore.turn === 1 ? PLAYER_ONE_X : PLAYER_TWO_O;
  gameStore.nextTurn();
  const winner = calculateWinner(board.value);
  if (winner) {
    winnerLine.value = winner.line;
    gameStore.gameWon(winner);
    if (winner.winner > 0) {
      popUpMessage.value = `Player ${winner.winner} wins!`;
    } else {
      popUpMessage.value = "DRAW!";
    }
    setTimeout(() => {
      popUpGameWon.value = true;
    }, 500);
  } else {
    loading.value = false;
  }
};

const nextGame = () => {
  board.value = [null, null, null, null, null, null, null, null, null];
  winnerLine.value = [];
  popUpGameWon.value = false;
  loading.value = false;
  gameStore.nextGame();
};

onMounted(() => {
  gameStore.pseudoRandomCoinFlip();
});
</script>

<template>
  <div class="game-area">
    <div class="game-board">
      <TicTacToeBox
        :key="i"
        v-for="(played, i) in board"
        :index="i"
        :played="played"
        :winnerLine="winnerLine"
        @click="makeMove(i)"
      />
    </div>
  </div>
  <Transition>
    <div v-if="popUpGameWon" class="game-area__pop-up">
      <p>{{ popUpMessage }}</p>

      <button @click="nextGame" class="game-area__pop-up--btn btn">
        Next Game
      </button>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.game-area {
  position: absolute;
  width: 100%;
  height: 100%;

  .game-board {
    /* padding: 12px; */
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

  p {
    color: #fff;
    font-size: 2.5rem;
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
