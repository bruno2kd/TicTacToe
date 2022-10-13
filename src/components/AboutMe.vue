<template>
  <div class="container aboutme">
    <div class="aboutme__main">
      <img src="@/assets/images/bruno_kern.jpeg" alt="Bruno's Picture" />
      <div class="aboutme__main--info">
        <p class="bold">Bruno Kern</p>
        <p>Location: Porto Alegre, RS, Brasil</p>
        <p>Occupation: Software Developer</p>
      </div>
    </div>
    <div class="aboutme__description">
      <p>About me:</p>
      <p>
        I am a self-taught qualified professional full stack developer with five
        years of experience on building complex apps. I am a team player with
        great communication skills and analytical capabilities learned on a
        previous academic career.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutme {
  padding-top: $header-height;
  display: flex;
  justify-content: space-between;
  padding: 128px 0;

  .aboutme__main {
    display: flex;
    img {
      border-radius: 50%;
      height: 200px;
      width: 200px;
    }
    .aboutme__main--info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 24px;

      p {
        font-size: 1.2rem;
        padding: 8px;
      }
    }
  }
  .aboutme__description {
    text-align: right;
    width: 50%;
    padding: 64px 0 64px 48px;

    p {
      font-size: 1.2rem;
    }
  }
}
</style>
