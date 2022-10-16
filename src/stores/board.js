import { defineStore } from "pinia";
import { ref } from "vue";
import { createMatrix } from "@/assets/helpers";
import { useGameStore } from "./game";

export const useBoardStore = defineStore("board", () => {
  const gamerStore = useGameStore();
  const cells = ref(3);
  const board = ref([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const updateBoard = (newBoard) => {
    board.value = newBoard;
  };

  const updateCells = (newCells) => {
    console.log(newCells);
    document.getElementById(
      "game-board"
    ).style.gridTemplate = `repeat(${newCells}, 1fr) / repeat(${newCells}, 1fr)`;
    board.value = createMatrix(newCells);
    cells.value = newCells;
    gamerStore.startNewGameSeries();
  };

  return {
    cells,
    board,
    updateBoard,
    updateCells,
  };
});
