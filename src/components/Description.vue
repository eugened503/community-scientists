<template>
  <section class="description">
    <h2 class="description__title">Как это работает</h2>
    <div class="cards">
      <div class="card-wrapper" v-for="(item, index) in items" :key="index">
        <figure class="card">
          <img class="card__image" :src="item.image" alt="card" />
          <figcaption class="card__title">
            {{ item.title }}
          </figcaption>
        </figure>
        <img
          v-show="index < 3"
          class="card__arrow"
          src="../assets/images/coolicon.svg"
          alt="arrow"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DescriptionView",
  data() {
    return {
      items: [
        {
          image: require("../assets/images/card1.svg"),
          title: "Оцените привлекательность темы",
        },
        {
          image: require("../assets/images/card2.svg"),
          title: "Выполните совместные исследования",
        },
        {
          image: require("../assets/images/card3.svg"),
          title: "Улучшите написанную работу",
        },
        {
          image: require("../assets/images/card4.svg"),
          title: "Продвиньте свою работу",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
