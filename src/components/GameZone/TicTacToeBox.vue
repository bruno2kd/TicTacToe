<script setup>
import { getMatrixPosition } from "@/assets/helpers";
import { computed } from "vue";
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  played: {
    type: Number,
  },
  winnerLine: {
    type: Array,
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
      <div v-if="props.played">
        <img
          v-if="!isWinnerBox"
          :src="`/src/assets/images/${props.played}.svg`"
          :alt="props.played"
        />
        <img
          v-else
          :src="`/src/assets/images/${props.played}_winner.svg`"
          :alt="props.played"
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
