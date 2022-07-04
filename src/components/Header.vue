<template>
  <header class="header">
    <div class="header__logos">
      <img src="../assets/images/logo.svg" alt="logo" class="header__logo" />
      <img src="../assets/images/logo-2.svg" alt="logo" class="header__logo" />
    </div>
    <nav>
      <ul class="header-menu">
        <li class="header-menu__item">Аналитика</li>
        <li class="header-menu__item">Сообщество</li>
        <li class="header-menu__item">Для организаций</li>
      </ul>
    </nav>

    <div class="header__user-control">
      <button class="header__button">
        <span class="header__desktop-text">Создать заявку</span>
        <span class="header__mobile-text">+ заявка</span>
      </button>
      <a class="header__link">
        <img src="../assets/images/link-img.svg" alt="link-img" />
      </a>
      <button class="header__button-logout">
        <img src="../assets/images/button-img.svg" alt="button-img" />
      </button>
      <button class="header__button-mobile">
        <img src="../assets/images/btn-mobile.svg" alt="button-mobile" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  background: $color-white;
  padding: 20px 164px 20px 162px;

  @media screen and (max-width: $laptop-big) {
    padding: 20px 97px 20px;
  }

  @media screen and (max-width: $laptop-small) {
    padding: 20px 67px 24px;
  }

  @media screen and (max-width: $tablet) {
    padding: 20px 55px 24px;
  }

  @media screen and (max-width: $mobile-big) {
    padding: 18px 42px;
  }

  @media screen and (max-width: $mobile-big - 1px) {
    padding: 15px 27px;
  }

  &__logos {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__logo {
    margin: 0 6px 0 0;

    &:first-child {
      @media screen and (max-width: $laptop-small) {
        width: 38px;
        height: 38px;
      }

      @media screen and (max-width: $mobile-big - 1px) {
        width: 27px;
        height: 27px;
      }
    }

    &:last-child {
      @media screen and (max-width: $mobile-big - 1px) {
        width: 65px;
        height: 38px;
      }
    }
  }

  &__user-control {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
  }

  &__desktop-text {
    @media screen and (max-width: $mobile-middle) {
      display: none;
    }
  }

  &__mobile-text {
    display: none;

    @media screen and (max-width: $mobile-middle) {
      display: block;
    }
  }

  &__link {
    margin: 0 0 0 29px;
    cursor: pointer;

    @media screen and (max-width: $laptop-middle) {
      display: none;
    }
  }

  &__button {
    margin: 0 0 0 29px;
    padding: 12px 33px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: $color-blue;
    border: 1px solid $color-blue;
    border-radius: 123px;

    &:hover {
      background: $color-blue;
      color: $color-white;
    }

    @media screen and (max-width: 519px) {
      margin: 0;
      padding: 12px 24px 10px;
      font-size: 12px;
      line-height: 12px;
    }

    @media screen and (max-width: $mobile-small) {
      font-size: 10px;
      line-height: 10px;
      padding: 9px 19px 6px;
    }
  }

  &__button-logout {
    margin: 0 0 0 29px;

    @media screen and (max-width: $laptop-middle) {
      display: none;
    }
  }

  &__button-mobile {
    margin: 0 0 0 29px;
    display: none;

    @media screen and (max-width: $laptop-middle) {
      display: block;
    }

    @media screen and (max-width: $mobile-big) {
      margin: 0 0 0 25px;
    }
  }
}

.header-menu {
  display: flex;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #575756;

  @media screen and (max-width: $laptop-big) {
    font-size: 16px;
    line-height: 16px;
  }

  @media screen and (max-width: $laptop-middle) {
    display: none;
  }

  &__item {
    margin: 0 0 0 55px;

    &:hover {
      color: $color-blue;
      cursor: pointer;
    }
  }
}
</style>
