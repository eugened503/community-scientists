<template>
  <header class="header">
    <div class="header__logos">
      <img src="../assets/images/logo.svg" alt="logo" class="header__logo" />
      <img src="../assets/images/logo-2.svg" alt="logo" class="header__logo" />
    </div>
    <ul class="header__menu">
      <li>Аналитика</li>
      <li>Сообщество</li>
      <li>Для организаций</li>
    </ul>

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
h3 {
  margin: 40px 0 0;
}
</style>
