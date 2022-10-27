<template>
  <footer>
    <div class="footer-list container">
      <div class="footer-list__item">
        <p class="footer-list__item--title">About page</p>
        <p class="footer-list__item--subtitle">
          Play Tic-Tac-Toe or Connect Four anytime!
        </p>
        <p class="footer-list__item--subtitle">Created by @brunokern</p>
      </div>
      <div class="footer-list__item">
        <p class="footer-list__item--title">Contacts</p>
        <p class="footer-list__item--subtitle">(+351) 123 456 789</p>
        <p class="footer-list__item--subtitle">
          Rua Sá da Bandeira, 111, Porto
        </p>
      </div>
      <div class="footer-list__item">
        <p class="footer-list__item--title">Stay in touch</p>
        <nav class="footer-list__item--img-group">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/images/facebook.svg" alt="facebook logo" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/images/twitter.svg" alt="twitter logo" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/images/instagram.svg" alt="instagram logo" />
          </a>
        </nav>
        <div class="footer-list__item--input-group">
          <input type="text" placeholder="Subscribe to our games..." />
          <button>
            <img src="@/assets/images/send.svg" alt="send" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: $light-gray;
  height: 250px;
  width: 100%;
  margin: 0;
  @media screen and (max-width: $mobile-break) {
    height: 530px;
  }
}

.footer-list {
  @include centered;
  padding: 48px 32px;
  justify-content: space-between;
  .footer-list__item {
    @media screen and (max-width: $mobile-break) {
      @include column-centered;
      margin: 12px 0;
    }
  }
  .footer-list__item--title {
    font-size: 1.2rem;
    padding: 12px 0;
  }
  .footer-list__item--subtitle {
    font-size: 1rem;
    padding: 8px 0;
  }
  .footer-list__item--img-group {
    text-align: left;
    margin: 12px 0;
    img {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 8px;
      cursor: pointer;
    }
  }
  .footer-list__item--input-group {
    display: flex;
    align-items: center;
    input[type="text"] {
      border: 2px solid $dark-gray;
      border-right: none;
      padding: 0.2rem;
      height: 2rem;
      margin-right: 0;
      outline: none;
    }
    button {
      border: 2px solid $dark-gray;
      background-color: $dark-gray;
      height: 2rem;
      width: 2rem;
      cursor: pointer;
      img {
        height: 1rem;
      }
      &:hover {
        background-color: $primary-btn;
        border-color: $primary-btn;
      }
    }
  }
  @media screen and (max-width: $mobile-break) {
    @include column-centered;
  }
}
</style>
