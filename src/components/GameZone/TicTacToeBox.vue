<script setup>
import { getMatrixPosition } from "@/assets/helpers";
import { computed } from "vue";
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  player: {
    type: Number,
  },
  winnerLine: {
    type: Array,
    default: () => [],
  },
  cells: {
    type: Number,
    required: true,
  },
});

const isWinnerBox = computed(() => {
  const d = props.cells;
  const matrixPosition = getMatrixPosition(props.index, d);
  let isWinning = false;
  for (let line of props.winnerLine) {
    isWinning = line[0] === matrixPosition[0] && line[1] === matrixPosition[1];
    if (isWinning) break;
  }
  return isWinning;
});
</script>

<template>
  <div class="box" :class="{ winner: isWinnerBox }">
    <Transition>
      <div v-if="props.player">
        <img
          v-if="!isWinnerBox"
          :src="`/src/assets/images/${props.player}.svg`"
          :alt="props.player"
        />
        <img
          v-else
          :src="`/src/assets/images/${props.player}_winner.svg`"
          :alt="props.player"
        />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.box {
  @include centered;
  border: 2px solid $black;
  cursor: pointer;
  img {
    width: 70%;
    height: 70%;
  }
}

/* we will explain what these classes do next! */
.v-enter-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from {
  opacity: 0;
}
</style>
