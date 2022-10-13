<template>
  <div class="game-victories">
    <h3>Game victories %</h3>
    <div class="centered">
      <div class="game-victories__player">
        <p class="game-victories__player--title">Player 1</p>
        <div class="centered">
          <!-- TODO: change it to component -->
          <div class="column-centered">
            <div class="game-victories__player--circle">39%</div>
            <p>V</p>
          </div>
          <div class="column-centered">
            <div class="game-victories__player--circle">39%</div>
            <p>L</p>
          </div>
        </div>
      </div>
      <div class="game-victories__player">
        <p class="game-victories__player--title">Player 2</p>
        <div class="centered">
          <div class="column-centered">
            <div class="game-victories__player--circle">39%</div>
            <p>V</p>
          </div>
          <div class="column-centered">
            <div class="game-victories__player--circle">39%</div>
            <p>L</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-victories {
  @include column-centered;
  h3 {
    padding: 16px 0;
  }

  .game-victories__player {
    @include column-centered;
    margin: 0 24px;
    .game-victories__player--title {
      font-size: 1.2rem;
      padding: 8px;
    }

    .game-victories__player--circle {
      width: 3rem;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      margin: 8px;
      border-radius: 50%;
      font-weight: bold;
      background-color: $dark-gray;
      color: #fff;
    }
  }
}
</style>
