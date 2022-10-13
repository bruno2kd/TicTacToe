<template>
  <div class="game-history column-centered">
    <h3>Game History</h3>
    <div class="game-history__list centered">
      <div class="game-history__item centered">
        <p>P1</p>
      </div>
      <div class="game-history__item centered">
        <p>P2</p>
      </div>
      <div class="game-history__item centered">
        <p>&nbsp;</p>
      </div>
      <div class="game-history__item centered">
        <p>&nbsp;</p>
      </div>
      <div class="game-history__item centered">
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-history__item {
  border: 1px solid $dark-gray;
  margin: 16px 3px;
  width: 1.4rem;
  height: 1.4rem;
}

.active {
  background-color: $dark-gray;
}
</style>
