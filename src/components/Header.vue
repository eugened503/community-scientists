<template>
  <header class="header">
    <div class="header__logos">
      <img src="../assets/images/logo.svg" alt="logo" class="header__logo" />
      <img src="../assets/images/logo-2.svg" alt="logo" />
    </div>
    <nav>
      <ul class="header-menu">
        <li class="header-menu__item">Аналитика</li>
        <li class="header-menu__item">Сообщество</li>
        <li class="header-menu__item">Для организаций</li>
      </ul>
    </nav>

    <div class="header__user-control">
      <button class="header__button">Создать заявку</button>
      <a class="header__link">
        <img src="../assets/images/link-img.svg" alt="link-img" />
      </a>
      <button class="header__button-logout">
        <img src="../assets/images/button-img.svg" alt="button-img" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  background: $color-white;
  padding: 20px 164px 20px 162px;

  &__logos {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin: 0 6px 0 0;
  }

  &__user-control {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
  }

  &__link {
    margin: 0 0 0 29px;
  }

  &__button {
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
  }

  &__button-logout {
    margin: 0 0 0 29px;
  }
}

.header-menu {
  display: flex;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #575756;

  &__item {
    margin: 0 0 0 55px;
  }
}
</style>
