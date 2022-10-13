<template>
  <div class="game-intro column-centered">
    <h2>Tic tac toe games</h2>
    <p>Welcome to the best game in the world.</p>
    <div class="game-intro__btn-group">
      <button class="btn active">Tic tac toe</button>
      <button class="btn inactive" disabled>Connect Four</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-intro {
  padding: 64px 0;
  /* 
  TODO: botar essa cor no final
  background-color: $light-gray; */

  .btn {
    padding: 12px 16px;
    border: none;
    font-size: 1rem;
  }

  .active {
    background-color: $dark-gray;
    color: #fff;
    cursor: pointer;
    border-radius: 8px 0 0 8px;
  }
  .inactive {
    background-color: #fff;
    color: #000;
    cursor: not-allowed;
    border-radius: 0 8px 8px 0;
  }

  p {
    padding: 16px;
    font-size: 1.2rem;
  }
}
</style>
