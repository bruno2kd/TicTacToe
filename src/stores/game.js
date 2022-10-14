import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGameStore = defineStore("game", () => {
  const playerStartedGame = ref(null);
  const turn = ref(null);
  const matchesPlayed = ref(0); // TODO: no need gameHistory.length is enough
  const gameHistory = ref([]);
  const matchTime = ref("00:00:00");
  const totalTime = ref("00:00:00");

  // TODO: need to account for draws
  const winsP1 = computed(() => {
    let count = 0;
    gameHistory.value.forEach((winner) => {
      if (winner === "P1") {
        count++;
      }
    });

    if (gameHistory.value.length > 0) {
      const percentage = Math.round((count * 100) / gameHistory.value.length);

      return percentage;
    } else {
      return 0;
    }
  });

  // mutation
  const updateMatchTime = (newTime) => {
    matchTime.value = newTime;
  };

  const updateTotalTime = (newTime) => {
    totalTime.value = newTime;
  };

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
    matchTime,
    totalTime,
    winsP1,
    updateMatchTime,
    updateTotalTime,
    pseudoRandomCoinFlip,
    nextTurn,
    nextGame,
    gameWon,
  };
});
