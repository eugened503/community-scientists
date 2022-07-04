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

<style lang="scss">
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 68px 174px 55px 162px;
  background: url(../assets/images/banner-bg.jpg);

  &__info {
    //margin: 100px 0 0;
  }

  &__info-title {
    margin: 0;
    max-width: 77%;
    font-weight: 700;
    font-size: 50px;
    line-height: 105.5%;
    color: $color-black;
  }

  &__text {
    max-width: 77%;
    margin: 33px 0 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: $color-black;
  }

  &__button {
    margin: 33px 0 0;
    padding: 15px 43px;
    background: $color-blue;
    border-radius: 123px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: $color-white;
    border: 1px solid transparent;

    &:hover {
      background: $color-white;
      color: $color-blue;
      border: 1px solid $color-blue;
    }
  }

  &__image {
    max-width: 50%;
    align-self: center;
    //height: 100%;
  }
}
</style>
