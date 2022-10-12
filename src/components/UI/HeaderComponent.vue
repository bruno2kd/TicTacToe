<template>
  <header>
    <div class="container header-container">
      <img src="@/assets/images/SWORD_Health_logo.svg" alt="" />
      <div class="info">
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
  width: 100vw;
  position: fixed;
}

.header-container {
  display: flex;
  justify-content: space-between;
  img {
    height: 2rem;
    margin: 24px 0;
  }
  .info {
    margin: 24px 0;
    text-align: right;
  }
}
</style>
