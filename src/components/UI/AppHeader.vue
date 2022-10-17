<script setup>
import { ref, onMounted } from "vue";

const isScrollingDown = ref(false);

const updateScroll = () => {
  const test = window.scrollY;
  if (test > 150) {
    isScrollingDown.value = true;
  } else {
    isScrollingDown.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", () => updateScroll());
});
</script>

<template>
  <header id="header" :class="{ transparent: isScrollingDown }">
    <div class="container header">
      <img src="@/assets/images/SWORD_Health_logo.svg" alt="Sword Health" />
      <div class="header__info">
        <p class="bold">Frontend Developer</p>
        <p class="italic">Challenge</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: $gray;
  height: $header-height;
  width: 100%;
  position: fixed;
  z-index: 1;
}

.transparent {
  opacity: 0.8;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  img {
    height: 2rem;
    margin: 24px 0;
  }
  .header__info {
    margin: 24px 0;
    text-align: right;
  }
}
</style>
