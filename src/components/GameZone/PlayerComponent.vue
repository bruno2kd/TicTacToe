<script setup>
const props = defineProps({
  player: {
    type: Number,
    required: true,
  },
  matchWinsCount: {
    type: Number,
    default: 0,
  },
  currentTurn: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="player" :class="{ active: props.currentTurn }">
    <p class="player--title">Player {{ player }}</p>
    <p class="player--count">{{ matchWinsCount }}</p>
  </div>
</template>

<style lang="scss" scoped>
.player {
  text-align: center;
  flex-shrink: 0;
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: $mobile-break) {
    font-size: 1.2rem;
  }
  .player--count {
    font-size: 4rem;
    padding: 12px 0;
    font-weight: normal;
    @media screen and (max-width: $mobile-break) {
      font-size: 2rem;
    }
  }
}

.active {
  color: $blue;
}
</style>
