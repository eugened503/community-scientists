<template>
  <section class="community">
    <h2 class="community__title">Сообщество</h2>
    <p class="community__subtitle">Тысячи учёных уже предлагают свою помощь</p>

    <div class="scientists">
      <article class="scientists-card">
        <ul class="scientists-tabs">
          <li class="scientists-tabs__item">Цитировать других</li>
          <li class="scientists-tabs__item">Neuro/Psycho</li>
        </ul>
        <h3 class="scientists-card__title">
          Вопросы проектирования трансатлантического межнационального
          продуктопровода в условиях нарастающей коронавирусной пандемии
        </h3>
        <div class="comment">
          <h4 class="comment__title">Комментарий</h4>
          <p class="comment__text">
            Могу ещё помочь со статистической обработкой
          </p>
        </div>
        <div class="award">
          <h4 class="award__title">Вознаграждение</h4>
          <ul class="award-tabs">
            <li class="award-tabs__item">Процитировать других</li>
            <li class="award-tabs__item">Принять в соавторы</li>
            <li class="award-tabs__item">+1</li>
          </ul>
        </div>
        <div class="keys-wrapper">
          <ul class="keys">
            <li class="keys__item">
              <img
                class="keys__image"
                src="../assets/images/key-image.svg"
                alt="key-image"
              />
              первый длинный ключ
            </li>
            <li class="keys__item">
              <img
                class="keys__image"
                src="../assets/images/key-image.svg"
                alt="key-image"
              />
              второй ключ
            </li>
            <li class="keys__item">+1</li>
          </ul>
        </div>
        <div class="scientist">
          <img
            class="scientist__image"
            src="../assets/images/ava.jpg"
            alt="scientist"
          />
          <div class="scientist__info">
            <h4 class="scientist__name">Артём Белоусов</h4>
            <p class="scientist__degree">учёный (кандидат наук)</p>
            <p class="scientist__university">
              Санкт-Петербургский горный университет
            </p>
          </div>
        </div>
        <div class="card-footer">
          <button class="card-footer__button-left">
            <img src="../assets/images/done.svg" alt="key-image" />
            Сотрудничество предложено
          </button>
          <button class="card-footer__button-right">
            <img src="../assets/images/arrow.svg" alt="key-image" />
          </button>
        </div>
      </article>
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
          tabs: [{ text: "Цитировать других" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: " Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Процитировать других" },
            { text: "Принять в соавторы" },
          ],
          keys: [
            {
              text: "первый длинный ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "второй ключ",
              image: require("../assets/images/key-image.svg"),
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: true,
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
