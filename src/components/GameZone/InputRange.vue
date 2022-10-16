<script setup>
import { ref, watch, defineEmits } from "vue";

const emit = defineEmits(["updateInput"]);

const props = defineProps({
  rangeInput: {
    type: Number,
    required: true,
  },
});

const rangeInput = ref(props.rangeInput);

watch(rangeInput, () => {
  console.log("aqui vai");
  emit("updateInput", Number(rangeInput.value));
});
</script>

<template>
  <div class="input-group">
    <input
      v-model="rangeInput"
      type="range"
      step="1"
      min="3"
      max="7"
      list="tickmarks"
    />
    <datalist id="tickmarks">
      <option value="3" label="3"></option>
      <option value="4" label="4"></option>
      <option value="5" label="5"></option>
      <option value="6" label="6"></option>
      <option value="7" label="7"></option>
    </datalist>
  </div>
</template>

<style lang="scss" scoped>
.input-group {
  @include column-centered;
  margin-top: 50px;
}

input[type="range"] {
  width: 300px;
  margin: 0;
  cursor: pointer;
  accent-color: currentcolor;
  color: $black;
}

datalist {
  display: flex;
  justify-content: space-between;
  width: 300px;
  option {
    padding: 0;
  }
}
</style>
