import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useBoardStore } from "@/stores/board";
import { useGameStore } from "@/stores/game";

describe("calculateWinner 5x", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("calculateWinner function diagonalOne winner 5x", () => {
    const boardStore = useBoardStore();

    boardStore.$patch({
      cells: 5,
    });

    const board = [
      [2, 2, 2, null, 1],
      [1, 2, 1, 1, null],
      [1, 1, 2, null, 1],
      [2, 1, 2, 2, null],
      [1, 2, 2, null, 2],
    ];

    const result = boardStore.calculateWinner(board, 4, 4);

    expect(result.winner).toBe(2);
    expect(result.line).toStrictEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ]);
  });

  it("calculateWinner function diagonalTwo winner 5x", () => {
    const boardStore = useBoardStore();

    boardStore.$patch({
      cells: 5,
    });

    const board = [
      [2, 2, 2, null, 1],
      [1, 2, 1, 1, null],
      [1, 2, 1, null, 1],
      [2, 1, 2, 2, null],
      [1, 2, 2, null, 2],
    ];

    const result = boardStore.calculateWinner(board, 4, 0);

    expect(result.winner).toBe(1);
    expect(result.line).toStrictEqual([
      [0, 4],
      [1, 3],
      [2, 2],
      [3, 1],
      [4, 0],
    ]);
  });

  it("calculateWinner function column winner 5x", () => {
    const boardStore = useBoardStore();

    boardStore.$patch({
      cells: 5,
    });

    const board = [
      [2, 2, 2, null, 1],
      [null, 2, 1, 1, 1],
      [1, 2, 1, null, 1],
      [2, 2, 1, 2, null],
      [1, 2, 2, null, 2],
    ];

    const result = boardStore.calculateWinner(board, 0, 1);

    expect(result.winner).toBe(2);
    expect(result.line).toStrictEqual([
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
    ]);
  });

  it("calculateWinner function row winner 5x", () => {
    const boardStore = useBoardStore();

    boardStore.$patch({
      cells: 5,
    });

    const board = [
      [2, 2, 2, null, 1],
      [null, 2, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [2, 2, 2, null, null],
      [1, 2, 2, null, 2],
    ];

    const result = boardStore.calculateWinner(board, 2, 3);

    expect(result.winner).toBe(1);
    expect(result.line).toStrictEqual([
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ]);
  });

  it("calculateWinner function draw handling 5x", () => {
    const boardStore = useBoardStore();
    const gameStore = useGameStore();
    gameStore.$patch({
      matchPlaysHistory: [
        1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
      ],
    });
    boardStore.$patch({
      cells: 5,
    });
    const board = [
      [1, 2, 2, 2, 1],
      [1, 2, 1, 1, 1],
      [1, 2, 2, 1, 1],
      [2, 1, 1, 1, 1],
      [1, 2, 1, 2, 2],
    ];

    const result = boardStore.calculateWinner(board, 0, 0);

    expect(result.winner).toBe(0);
    expect(result.line).toStrictEqual([]);
  });

  it("calculateWinner function no winner handling 5x", () => {
    const boardStore = useBoardStore();
    const gameStore = useGameStore();
    gameStore.$patch({
      matchPlaysHistory: [
        1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
      ],
    });
    boardStore.$patch({
      cells: 5,
    });
    const board = [
      [1, 2, 2, 2, 1],
      [1, 2, null, 1, 1],
      [1, 2, 2, 1, 1],
      [2, 1, 1, 1, 1],
      [1, 2, 1, 2, 2],
    ];

    const result = boardStore.calculateWinner(board, 0, 0);

    expect(result).toBe(null);
  });
});
