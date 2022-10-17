import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useGameStore } from "@/stores/game";

describe("checkSeriesResults combinations of results", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("win on 3 matches", () => {
    const gameStore = useGameStore();

    gameStore.$patch({
      gameHistory: ["P1", "P1", "P1"],
    });

    const result = gameStore.checkSeriesResults();

    expect(result).toBe(1);
  });

  it("draw all matches", () => {
    const gameStore = useGameStore();

    gameStore.$patch({
      gameHistory: ["D", "D", "D", "D", "D"],
    });

    const result = gameStore.checkSeriesResults();

    expect(result).toBe(0);
  });

  it("win on last game", () => {
    const gameStore = useGameStore();

    gameStore.$patch({
      gameHistory: ["P1", "P2", "D", "D", "P2"],
    });

    const result = gameStore.checkSeriesResults();

    expect(result).toBe(2);
  });

  it("game keep going", () => {
    const gameStore = useGameStore();

    gameStore.$patch({
      gameHistory: ["P1", "P2", "D", "P2"],
    });

    const result = gameStore.checkSeriesResults();

    expect(result).toBe(null);
  });
});
