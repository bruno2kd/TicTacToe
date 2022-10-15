import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useTimerStore } from "./timer";

export const useGameStore = defineStore("game", () => {
  const timerStore = useTimerStore();
  const matchPlaysHistory = ref([]);
  const turn = ref(null);
  const gameHistory = ref([]);

  const winsPercentage = computed(() => {
    let p1Wins = 0;
    let p2Wins = 0;
    gameHistory.value.forEach((winner) => {
      if (winner === "P1") {
        p1Wins++;
      }
      if (winner === "P2") {
        p2Wins++;
      }
    });

    let p1WinsPercentage = 0;
    let p2WinsPercentage = 0;
    if (gameHistory.value.length > 0) {
      p1WinsPercentage = Math.round((p1Wins * 100) / gameHistory.value.length);
      p2WinsPercentage = Math.round((p2Wins * 100) / gameHistory.value.length);
    }
    return {
      p1WinsPercentage,
      p2WinsPercentage,
    };
  });

  const playerOnePlays = computed(() => {
    return matchPlaysHistory.value.reduce(
      (acc, x) => (x === 1 ? acc + 1 : acc),
      0
    );
  });

  const playerTwoPlays = computed(() => {
    return matchPlaysHistory.value.reduce(
      (acc, x) => (x === 2 ? acc + 1 : acc),
      0
    );
  });

  const nextTurn = () => {
    matchPlaysHistory.value.push(turn.value);
    turn.value = turn.value === 1 ? 2 : 1;
  };

  const nextGame = () => {
    // player that started last game, shouldn't start again
    const startNextGame = matchPlaysHistory.value[0] === 1 ? 2 : 1;
    turn.value = startNextGame;
    matchPlaysHistory.value = [];
    timerStore.reset("matchTimer");
  };

  const pseudoRandomCoinFlip = () => {
    let number = Math.random();
    if (number < 0.5) {
      turn.value = 1;
    } else {
      turn.value = 2;
    }
  };

  const gameWon = (winner) => {
    timerStore.stop("matchTimer");
    matchPlaysHistory.value.push(turn.value);
    if (winner.winner > 0) {
      gameHistory.value.push(`P${winner.winner}`);
    } else {
      gameHistory.value.push("D");
    }
  };

  const checkSeriesResults = () => {
    if (gameHistory.value.length >= 3) {
      let winsPlayer1 = 0;
      let winsPlayer2 = 0;
      let matchedRemaining = 5 - gameHistory.value.length;
      gameHistory.value.forEach((winner) => {
        if (winner === "P1") {
          winsPlayer1++;
        } else if (winner === "P2") {
          winsPlayer2++;
        }
      });

      if (
        winsPlayer1 > winsPlayer2 &&
        winsPlayer1 - winsPlayer2 > matchedRemaining
      ) {
        return 1;
      } else if (
        winsPlayer1 < winsPlayer2 &&
        winsPlayer2 - winsPlayer1 > matchedRemaining
      ) {
        return 2;
      } else if (
        gameHistory.value.length === 5 &&
        winsPlayer1 === winsPlayer2
      ) {
        return 0; // Draw
      } else {
        return null; // Draw
      }
    } else {
      return null;
    }
  };

  const startNewSeries = () => {
    matchPlaysHistory.value = [];
    turn.value = null;
    gameHistory.value = [];
    pseudoRandomCoinFlip();
    timerStore.reset("totalTimer");
  };

  return {
    turn,
    matchPlaysHistory,
    gameHistory,
    winsPercentage,
    playerOnePlays,
    playerTwoPlays,
    pseudoRandomCoinFlip,
    nextTurn,
    nextGame,
    gameWon,
    checkSeriesResults,
    startNewSeries,
  };
});
