<template>
  <header id="header">
    <div class="container header">
      <img src="@/assets/images/SWORD_Health_logo.svg" alt="" />
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
  width: 100vw;
  position: fixed;
  z-index: 1;
}
/* TODO: header transparent in js */

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
