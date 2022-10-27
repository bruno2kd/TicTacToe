import { defineStore } from "pinia";
import { ref } from "vue";
import { createMatrix } from "@/assets/helpers";
import { useGameStore } from "./game";

export const useBoardStore = defineStore("board", () => {
  const gameStore = useGameStore();
  const cells = ref(3);
  const board = ref([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const updateCells = (newCells) => {
    board.value = createMatrix(newCells);
    cells.value = newCells;
    gameStore.startNewGameSeries();
  };

  const calculateWinner = (board, row, column) => {
    const cellsNum = cells.value;
    // winning row
    let currentPlayer = board[row][column];
    let isRowWinning = true;
    let isColumnWinning = true;
    let isDiagonalOneWinning = true;
    let IsDiagonalTwoWinning = true;
    const rowArr = [];
    const columnArr = [];
    const diagonalOneArr = [];
    const diagonalTwoArr = [];
    for (let i = 0; i < cellsNum; i++) {
      isRowWinning = isRowWinning
        ? board[row][i] === currentPlayer
        : isRowWinning;
      rowArr.push([row, i]);
      isColumnWinning = isColumnWinning
        ? board[i][column] === currentPlayer
        : isColumnWinning;
      columnArr.push([i, column]);
      isDiagonalOneWinning = isDiagonalOneWinning
        ? board[i][i] === currentPlayer
        : isDiagonalOneWinning;
      diagonalOneArr.push([i, i]);
      IsDiagonalTwoWinning = IsDiagonalTwoWinning
        ? board[i][cellsNum - (i + 1)] === currentPlayer
        : IsDiagonalTwoWinning;
      diagonalTwoArr.push([i, cellsNum - (i + 1)]);
    }

    let winningLine;
    if (isRowWinning) {
      winningLine = rowArr;
    } else if (isColumnWinning) {
      winningLine = columnArr;
    } else if (isDiagonalOneWinning) {
      winningLine = diagonalOneArr;
    } else if (IsDiagonalTwoWinning) {
      winningLine = diagonalTwoArr;
    } else {
      // draw handling here
      if (
        gameStore.matchPlaysHistory.length ===
        cells.value * cells.value - 1
      ) {
        return {
          winner: 0,
          line: [],
        };
      }
      // no winner handling
      return null;
    }

    // winning return here
    return {
      winner: currentPlayer,
      line: winningLine,
    };
  };

  return {
    cells,
    board,
    updateCells,
    calculateWinner,
  };
});
