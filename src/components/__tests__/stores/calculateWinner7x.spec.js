import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useBoardStore } from "@/stores/board";

describe("calculateWinner 5x", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("calculateWinner function diagonalOne winner 7x", () => {
    const boardStore = useBoardStore();

    boardStore.$patch({
      cells: 7,
    });

    const board = [
      [1, null, 2, null, 1, 2, null],
      [1, 1, 2, null, 1, 2, null],
      [1, null, 1, null, 2, 2, null],
      [1, null, 2, 1, 1, 2, 2],
      [2, null, 2, null, 1, 2, null],
      [1, null, 2, null, 1, 1, 2],
      [1, null, 2, 2, 1, 2, 1],
    ];

    const result = boardStore.calculateWinner(board, 4, 4);

    expect(result.winner).toBe(1);
    expect(result.line).toStrictEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
    ]);
  });

  it("calculateWinner function diagonalTwo winner 7x", () => {
    const boardStore = useBoardStore();

    boardStore.$patch({
      cells: 7,
    });

    const board = [
      [1, null, 2, null, 1, 2, 2],
      [1, 1, 2, null, 1, 2, 1],
      [1, null, 1, 1, 2, 2, null],
      [1, null, 2, 2, 1, 2, 2],
      [2, null, 2, 1, 1, 2, null],
      [1, 2, 2, null, 1, 1, 2],
      [2, 1, 1, 2, 1, 2, 1],
    ];

    const result = boardStore.calculateWinner(board, 1, 5);

    expect(result.winner).toBe(2);
    expect(result.line).toStrictEqual([
      [0, 6],
      [1, 5],
      [2, 4],
      [3, 3],
      [4, 2],
      [5, 1],
      [6, 0],
    ]);
  });

  it("calculateWinner function row winner 7x", () => {
    const boardStore = useBoardStore();

    boardStore.$patch({
      cells: 7,
    });

    const board = [
      [1, null, 2, null, 1, 2, 2],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 1, 2, 2, null],
      [1, null, 2, 2, 2, 2, 2],
      [2, null, 2, 1, 1, 2, null],
      [1, 2, 2, null, 1, 1, 2],
      [2, 1, 1, 2, 1, 2, 1],
    ];

    const result = boardStore.calculateWinner(board, 1, 5);

    expect(result.winner).toBe(1);
    expect(result.line).toStrictEqual([
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
    ]);
  });

  it("calculateWinner function column winner 7x", () => {
    const boardStore = useBoardStore();

    boardStore.$patch({
      cells: 7,
    });

    const board = [
      [1, null, 2, null, 1, 2, 2],
      [1, 1, 1, 1, 1, 2, 1],
      [1, 2, 2, 1, 1, 2, null],
      [1, null, 2, 2, 2, 2, 2],
      [2, null, 2, 1, 1, 2, null],
      [1, 2, 2, null, 1, 2, 1],
      [2, 1, 1, 2, 1, 2, 1],
    ];

    const result = boardStore.calculateWinner(board, 1, 5);

    expect(result.winner).toBe(2);
    expect(result.line).toStrictEqual([
      [0, 5],
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [5, 5],
      [6, 5],
    ]);
  });
});
