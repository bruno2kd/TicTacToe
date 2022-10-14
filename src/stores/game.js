import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGameStore = defineStore("game", () => {
  const playerStartedGame = ref(null);
  const turn = ref(null);

  const matchesPlayed = ref(0);

  const gameHistory = ref([]);

  // const doubleCount = computed(() => count.value * 2);
  const nextTurn = () => {
    turn.value = turn.value === 1 ? 2 : 1;
  };

  const nextGame = () => {};

  const pseudoRandomCoinFlip = () => {
    let number = Math.random();
    if (number < 0.5) {
      turn.value = 1;
      playerStartedGame.value = 1;
    } else {
      turn.value = 2;
      playerStartedGame.value = 2;
    }
  };

  const gameWon = (winner) => {
    matchesPlayed.value += 1;
    if (winner.winner > 0) {
      gameHistory.value.push(`P${winner.winner}`);
    } else {
      gameHistory.value.push("D");
    }

    // player that started last game, shouldn't start again
    playerStartedGame.value = playerStartedGame.value === 1 ? 2 : 1;
    turn.value = playerStartedGame.value;
  };

  return {
    turn,
    matchesPlayed,
    gameHistory,
    pseudoRandomCoinFlip,
    nextTurn,
    nextGame,
    gameWon,
  };
});
