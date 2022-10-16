<template>
  <div class="game-intro">
    <h2>Tic tac toe games</h2>
    <p>Welcome to the best game in the world.</p>
    <div class="game-intro__btn-group">
      <ButtonComponent class="active">Tic Tac Toe</ButtonComponent>
      <ButtonComponent class="inactive" disabled>Connect Four</ButtonComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-intro {
  @include column-centered;
  padding: 64px 0;

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

    &:hover {
      background-color: $primary-btn;
    }
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
