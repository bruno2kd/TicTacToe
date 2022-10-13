<template>
  <div class="matches-played column-centered">
    <h3>Matches played</h3>
    <div class="matches-played__list centered">
      <div class="matches-played__list--circle active">&nbsp;</div>
      <div class="matches-played__list--circle">&nbsp;</div>
      <div class="matches-played__list--circle">&nbsp;</div>
      <div class="matches-played__list--circle">&nbsp;</div>
      <div class="matches-played__list--circle">&nbsp;</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.matches-played__list--circle {
  border-radius: 50%;
  border: 1px solid $dark-gray;
  width: 1rem;
  height: 1rem;
  margin: 16px 2px;
}

.active {
  background-color: $dark-gray;
}
</style>
