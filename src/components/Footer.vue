<template>
  <footer class="footer">
    <div class="copyright">
      <h4 class="copyright__title">Authortie</h4>
      <p class="copyright__subtitle">&#169; <span>Все права защищены</span></p>
    </div>
    <nav>
      <ul class="footer-menu">
        <li class="footer-menu__item">Политика конфиденциальности</li>
        <li class="footer-menu__item">Аналитика</li>
        <li class="footer-menu__item">Сообщество</li>
        <li class="footer-menu__item">Для организаций</li>
      </ul>
    </nav>
    <div class="social-networks">
      <ul class="social-networks__list">
        <li class="social-networks__item">
          <img
            class="social-networks__image"
            src="../assets/images/facebook.svg"
            alt="key-image"
          />
        </li>
        <li class="social-networks__item">
          <img
            class="social-networks__image"
            src="../assets/images/instagram.svg"
            alt="key-image"
          />
        </li>
        <li class="social-networks__item">
          <img
            class="social-networks__image"
            src="../assets/images/telegram.svg"
            alt="key-image"
          />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
