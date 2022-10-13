<template>
  <section class="container profile">
    <div class="profile__main">
      <img src="@/assets/images/bruno_kern.jpeg" alt="Bruno's Picture" />
      <div class="profile__main--info">
        <p class="bold">Bruno Kern</p>
        <p>Location: Porto Alegre, RS</p>
        <p>Country: Brazil</p>
        <p>Occupation: Software Developer</p>
      </div>
    </div>
    <div class="profile__description">
      <p>About me:</p>
      <p>
        I am a self-taught qualified professional full stack developer with five
        years of experience on building complex apps. I am a team player with
        great communication skills and analytical capabilities learned on a
        previous academic career.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile {
  padding-top: $header-height;
  display: flex;
  justify-content: space-between;
  padding: 128px 32px 48px;

  .profile__main {
    @include centered;
    img {
      border-radius: 50%;
      height: 200px;
      width: 200px;
      @media screen and (max-width: $mobile-break) {
        align-items: center;
      }
    }
    .profile__main--info {
      display: flex;
      flex-direction: column;
      padding-left: 24px;

      p {
        font-size: 1.2rem;
        padding: 8px;
      }

      @media screen and (max-width: $mobile-break) {
        align-items: center;
        padding: 0;
      }
    }
    @media screen and (max-width: $mobile-break) {
      @include column-centered;
      margin: 0 auto;
    }
  }
  .profile__description {
    text-align: right;
    width: 50%;
    padding: 64px 0 64px 32px;

    p {
      font-size: 1.2rem;
      padding-bottom: 8px;
    }

    @media screen and (max-width: $mobile-break) {
      display: none;
    }
  }
}
</style>
