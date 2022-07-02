<template>
  <section class="banner">
    <div class="banner__info">
      <h1 class="banner__info-title">
        Сообщество взаимопомощи между учёными со всего мира
      </h1>
      <p class="banner__text">
        Удобный сервис, который подберёт для вас коллег и поможет наладить с
        ними взаимовыгодное сотрудничество в областях совместных исследований,
        соавторства, рецензирования и повышения индекса цитирования.
      </p>
      <button class="banner__button">Присоединиться</button>
    </div>
    <img
      src="../assets/images/scientists.png"
      alt="scientists"
      class="banner__image"
    />
  </section>
</template>

<script>
export default {
  name: "BannerView",
};
</script>

<style scoped lang="scss">
.banner {
  background: url(../assets/images/banner-bg.jpg);
}
h3 {
  margin: 40px 0 0;
}
</style>
