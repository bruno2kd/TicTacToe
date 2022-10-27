import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useBoardStore } from "@/stores/board";
import { useGameStore } from "@/stores/game";

describe("Board Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("calculateWinner function diagonalOne winner 3x", () => {
    const boardStore = useBoardStore();

    const board = [
      [1, 2, 2],
      [null, 1, null],
      [2, null, 1],
    ];

    const result = boardStore.calculateWinner(board, 1, 1);

    expect(result.winner).toBe(1);
    expect(result.line).toStrictEqual([
      [0, 0],
      [1, 1],
      [2, 2],
    ]);
  });

  it("calculateWinner function diagonalTwo winner 3x", () => {
    const boardStore = useBoardStore();

    const board = [
      [1, 2, 2],
      [null, 2, null],
      [2, 1, 1],
    ];

    const result = boardStore.calculateWinner(board, 1, 1);

    expect(result.winner).toBe(2);
    expect(result.line).toStrictEqual([
      [0, 2],
      [1, 1],
      [2, 0],
    ]);
  });

  it("calculateWinner function row winner 3x", () => {
    const boardStore = useBoardStore();
    const board = [
      [1, 2, 2],
      [null, 2, null],
      [1, 1, 1],
    ];

    const result = boardStore.calculateWinner(board, 2, 0);

    expect(result.winner).toBe(1);
    expect(result.line).toStrictEqual([
      [2, 0],
      [2, 1],
      [2, 2],
    ]);
  });

  it("calculateWinner function draw handling", () => {
    const boardStore = useBoardStore();
    const gameStore = useGameStore();
    gameStore.$patch({
      matchPlaysHistory: [1, 2, 1, 2, 1, 2, 1, 2],
    });
    boardStore.$patch({
      cells: 3,
    });
    const board = [
      [1, 2, 1],
      [1, 1, 2],
      [2, 1, 2],
    ];

    const result = boardStore.calculateWinner(board, 0, 0);

    expect(result.winner).toBe(0);
    expect(result.line).toStrictEqual([]);
  });

  it("calculateWinner function no winner handling", () => {
    const boardStore = useBoardStore();
    const gameStore = useGameStore();
    gameStore.$patch({
      matchPlaysHistory: [1, 2, 1, 2, 1, 2, 1],
    });
    boardStore.$patch({
      cells: 3,
    });
    const board = [
      [1, 2, 1],
      [1, 1, 2],
      [2, 1, null],
    ];

    const result = boardStore.calculateWinner(board, 0, 0);

    expect(result).toBe(null);
  });
});
