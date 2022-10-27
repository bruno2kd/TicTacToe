<script setup>
import { getMatrixPosition } from "@/assets/helpers";
import { computed } from "vue";
import svgX from "@/assets/images/1.svg";
import svgO from "@/assets/images/2.svg";
import svgXWinner from "@/assets/images/1_winner.svg";
import svgOWinner from "@/assets/images/2_winner.svg";

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

const getPlayerSignSVG = computed(() => {
  if (props.player === 1) {
    return svgX;
  } else {
    return svgO;
  }
});

const getWinnerPlayerSignSVG = computed(() => {
  if (props.player === 1) {
    return svgXWinner;
  } else {
    return svgOWinner;
  }
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
        <img v-if="!isWinnerBox" :src="getPlayerSignSVG" :alt="props.player" />
        <img v-else :src="getWinnerPlayerSignSVG" :alt="props.player" />
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
