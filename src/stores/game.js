import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useTimerStore } from "./timer";

export const useGameStore = defineStore("game", () => {
  const timerStore = useTimerStore();
  const matchPlaysHistory = ref([]);
  const turn = ref(null);
  const gameHistory = ref([]);
  const seriesHistory = ref([]);
  const p1WinsPercentage = ref(0);
  const p2WinsPercentage = ref(0);

  const matchesWonByEachPlayer = computed(() => {
    const scores = gameHistory.value.reduce(
      (acc, x) => {
        if (x === "P1") {
          acc.p1++;
        } else if (x === "P2") {
          acc.p2++;
        }
        return acc;
      },
      { p1: 0, p2: 0 }
    );
    return scores;
  });

  const calculateWinsPercentage = (seriesHistory) => {
    let p1Wins = 0;
    let p2Wins = 0;
    seriesHistory.forEach((winner) => {
      if (winner === 1) {
        p1Wins++;
      }
      if (winner === 2) {
        p2Wins++;
      }
    });

    p1WinsPercentage.value = Math.round(
      (p1Wins * 100) / seriesHistory.length
    );
    p2WinsPercentage.value = Math.round(
      (p2Wins * 100) / seriesHistory.length
    );
  };

  const nextTurn = () => {
    matchPlaysHistory.value.push(turn.value);
    turn.value = turn.value === 1 ? 2 : 1;
  };

  const nextMatch = () => {
    // player that started last game, shouldn't start again
    const startNextMatch = matchPlaysHistory.value[0] === 1 ? 2 : 1;
    turn.value = startNextMatch;
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

  const matchWon = (winner) => {
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
        return null;
      }
    } else {
      return null; // Keep Playing
    }
  };

  const startNewGameSeries = () => {
    matchPlaysHistory.value = [];
    turn.value = null;
    gameHistory.value = [];
    pseudoRandomCoinFlip();
    timerStore.reset("totalTimer");
  };

  const updateSeriesResults = (seriesResults) => {
    seriesHistory.value.push(seriesResults);
    calculateWinsPercentage(seriesHistory.value);
  };

  return {
    turn,
    matchPlaysHistory,
    gameHistory,
    seriesHistory,
    p1WinsPercentage,
    p2WinsPercentage,
    matchesWonByEachPlayer,
    calculateWinsPercentage,
    pseudoRandomCoinFlip,
    nextTurn,
    nextMatch,
    matchWon,
    checkSeriesResults,
    startNewGameSeries,
    updateSeriesResults,
  };
});
