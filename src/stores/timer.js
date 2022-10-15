import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", () => {
  const timers = ref({
    matchTimer: "00:00:00",
    totalTimer: "00:00:00",
  });
  const timeBegan = ref({
    matchTimer: null,
    totalTimer: null,
  });
  const startedId = ref({
    matchTimer: null,
    totalTimer: null,
  });

  //getters
  const matchTimer = computed(() => {
    return timers.value.matchTimer;
  });

  const totalTimer = computed(() => {
    return timers.value.totalTimer;
  });

  const start = (timer) => {
    timeBegan.value[timer] = new Date();

    startedId.value[timer] = setInterval(() => clockRunning(timer), 1000);
  };

  function stop(timer) {
    clearInterval(startedId.value[timer]);
  }

  const reset = (timer) => {
    clearInterval(startedId.value[timer]);
    timeBegan.value[timer] = null;
    timers.value[timer] = "00:00:00";
  };

  const clockRunning = (timer) => {
    const currentTime = new Date();
    const timeElapsed = new Date(currentTime - timeBegan.value[timer]);
    const hour = timeElapsed.getUTCHours();
    const min = timeElapsed.getUTCMinutes();
    const sec = timeElapsed.getUTCSeconds();

    const newTime =
      zeroPrefix(hour, 2) + ":" + zeroPrefix(min, 2) + ":" + zeroPrefix(sec, 2);

    timers.value[timer] = newTime;
  };

  const zeroPrefix = (num, digit) => {
    let zero = "";
    for (let i = 0; i < digit; i++) {
      zero += "0";
    }
    return (zero + num).slice(-digit);
  };

  return {
    timers,
    matchTimer,
    totalTimer,
    start,
    stop,
    reset,
  };
});
