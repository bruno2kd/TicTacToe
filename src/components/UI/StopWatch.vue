<script setup>
import { ref } from "vue";

const emit = defineEmits(["updateTime"]);
const props = defineProps({
  time: {
    type: String,
    required: true,
  },
});

const running = ref(false);
const timeBegan = ref(null);
const stoppedDuration = ref(0);
const started = ref(null);

const start = () => {
  if (running.value) return;

  timeBegan.value = new Date();

  started.value = setInterval(clockRunning, 1000);
  running.value = true;
};

const reset = () => {
  running.value = false;
  clearInterval(started.value);
  stoppedDuration.value = 0;
  timeBegan.value = null;
  emit("updateTime", "00:00:00");
  start();
};

function stop() {
  running.value = false;
  clearInterval(started.value);
}

const clockRunning = () => {
  const currentTime = new Date();
  const timeElapsed = new Date(currentTime - timeBegan.value);
  const hour = timeElapsed.getUTCHours();
  const min = timeElapsed.getUTCMinutes();
  const sec = timeElapsed.getUTCSeconds();

  const newTime =
    zeroPrefix(hour, 2) + ":" + zeroPrefix(min, 2) + ":" + zeroPrefix(sec, 2);
  emit("updateTime", newTime);
};

function zeroPrefix(num, digit) {
  let zero = "";
  for (let i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}
</script>
<template>
  <p>
    {{ time }}
  </p>
</template>
