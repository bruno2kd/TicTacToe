<script setup>
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
});

const isWinnerBox = computed(() => {
  return props.winnerLine.includes(props.index);
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
