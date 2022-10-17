import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from '@/stores/game'

describe('Game Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })


  it('matchesWonByEachPlayer computed works', () => {
    const gameStore = useGameStore()

    gameStore.$patch({
      gameHistory: ["P1", "P2", "D"]
    })   
    expect(gameStore.matchesWonByEachPlayer).toStrictEqual({ p1: 1, p2: 1 })
  })

  it('calculateWinsPercentage function works', () => {
    const gameStore = useGameStore()
    
    gameStore.calculateWinsPercentage([2,1,2,2])
    expect(gameStore.p1WinsPercentage).toBe(25)
    expect(gameStore.p2WinsPercentage).toBe(75)

  })

  it('matchWon function works', () => {
    const gameStore = useGameStore()
    
    gameStore.matchWon({
      winner: 1
    })
    gameStore.matchWon({
      winner: 0
    })

    expect(gameStore.gameHistory).toStrictEqual(['P1', "D"])
  })

  it('updateSeriesResults function update seriesHistory', () => {
    const gameStore = useGameStore()
    
    gameStore.updateSeriesResults(2)

    expect(gameStore.seriesHistory).toStrictEqual([2])
  })

})