<template>
  <section class="community">
    <h2 class="community__title">Сообщество</h2>
    <p class="community__subtitle">Тысячи учёных уже предлагают свою помощь</p>

    <div class="scientists">
      <article
        class="scientists-card"
        v-for="(item, index) in items"
        :key="index"
      >
        <ul class="scientists-card__tabs">
          <li
            v-for="(tab, index) in item.tabs"
            :key="index"
            class="scientists-card__tab"
          >
            {{ tab.text }}
          </li>
        </ul>
        <h3 class="scientists-card__title">
          {{ item.title }}
        </h3>
        <div class="scientists-card__comment">
          <h4 class="scientists-card__comment-title">Комментарий</h4>
          <p class="scientists-card__comment-text">
            {{ item.comment }}
          </p>
        </div>
        <div class="scientists-card__award">
          <h4 class="scientists-card__award-title">Вознаграждение</h4>
          <ul class="scientists-card__award-tabs">
            <li
              class="scientists-card__award-item"
              :class="{ price: item.price }"
              v-for="(item, index) in item.award"
              :key="index"
            >
              <span v-show="item.text">{{ item.text }}</span>
              <span v-show="item.price"> {{ item.price }}</span>
            </li>
          </ul>
        </div>
        <div class="scientists-card__keys-wrapper">
          <ul class="scientists-card__keys">
            <li
              class="scientists-card__keys-item"
              v-for="(item, index) in item.keys"
              :key="index"
            >
              <img
                class="scientists-card__keys-image"
                :src="item.image"
                alt="key-image"
                v-if="item.image"
              />
              {{ item.text }}
            </li>
          </ul>
        </div>
        <div class="scientists-card__scientist">
          <img
            class="scientists-card__scientist-image"
            :src="item.avatar"
            alt="scientist"
          />
          <div class="scientists-card__scientist-info">
            <h4 class="scientists-card__scientist-name">{{ item.name }}</h4>
            <p class="scientists-card__scientist-text">{{ item.degree }}</p>
            <p class="scientists-card__scientist-text">
              {{ item.university }}
            </p>
          </div>
          <div
            v-show="!item.cooperation"
            class="scientists-card__scientist-rating"
          >
            <img
              class="scientists-card__rating-image"
              src="../assets/images/star.svg"
              alt="scientist"
            />
            {{ item.rating }}
          </div>
        </div>
        <div class="scientists-card__footer">
          <button class="scientists-card__button-left" v-if="item.cooperation">
            <img
              class="scientists-card__button-image"
              src="../assets/images/done.svg"
              alt="key-image"
            />
            Сотрудничество предложено
          </button>
          <button class="button-passive scientists-card__button-left" v-else>
            Предложить сотрудничество
          </button>
          <button class="scientists-card__button-right">
            <!-- <img src="../assets/images/arrow.svg" alt="key-image" /> -->
            <arrow-svg />
          </button>
        </div>
      </article>
    </div>
    <button class="community__button">Смотреть все</button>
  </section>
</template>

<script>
import ArrowSvg from "@/components/ArrowSvg.vue";
export default {
  name: "DescriptionView",
  components: { ArrowSvg },
  data() {
    return {
      items: [
        {
          tabs: [{ text: "Цитировать других" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Процитировать других" },
            { text: "Принять в соавторы" },
            { text: "+1" },
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
            {
              text: "+1",
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: true,
          rating: "4.4",
        },
        {
          tabs: [
            { text: "Повысить цитируемость своих статей" },
            { text: "Medicine/Pharma" },
          ],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [{ text: "Оплата деньгами" }, { price: "$2500" }],
          keys: [
            {
              text: "первый ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "второй ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "третий ключ",
              image: require("../assets/images/key-image.svg"),
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
        {
          tabs: [{ text: "Оплата деньгами" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Оплата деньгами" },
            { price: "$2500" },
            { text: "+2" },
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
          cooperation: false,
          rating: "4.4",
        },
        {
          tabs: [{ text: "Цитировать других" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Процитировать других" },
            { text: "Принять в соавторы" },
            { text: "+1" },
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
            {
              text: "+1",
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
        {
          tabs: [
            { text: "Повысить цитируемость своих статей" },
            { text: "Medicine/Pharma" },
          ],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [{ text: "Оплата деньгами" }, { price: "$2500" }],
          keys: [
            {
              text: "первый и очень сильно длинный ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "+1",
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
        {
          tabs: [{ text: "Оплата деньгами" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Процитировать других" },
            { text: "Принять в соавторы" },
            { text: "+1" },
          ],
          keys: [
            {
              text: "первый и очень сильно длинный ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "+1",
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.community {
  margin: 145px 137.5px 0 141.5px;
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #383838;
  }

  &__subtitle {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 45px;
    text-align: center;
    margin: 15px 0 0;
    color: #464646;
  }

  .scientists {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -12px 0 0;
  }

  .scientists-card {
    flex: 1;
    margin: 47px percentage(23.5/1688) 0;
    padding: 14px 25px 25px;
    background: $color-white;
    box-shadow: 0px 3px 17px rgba(43, 123, 211, 0.06);
    border-radius: 10px;

    &__tabs {
      display: flex;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 900;
      font-size: 11px;
      line-height: 13px;
      text-align: center;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    &__tab {
      padding: 10px 15px 8px;
      border-radius: 75px;
      max-width: 248px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;

      &:first-child {
        color: #bc9300;
        background: #fdffe7;
      }

      &:last-child {
        margin: 0 0 0 10px;
        color: #00a880;
        background: #ebfffa;
      }
    }

    &__title {
      margin: 27px 0 0;
      font-weight: 600;
      font-size: 18px;
      line-height: 19px;
      color: $color-black;
    }

    &__comment {
      margin: 27px 0 0;
    }

    &__comment-title {
      font-weight: 500;
      font-size: 15px;
      line-height: 15px;
      color: #505050;
    }

    &__comment-text {
      margin: 10px 0 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.005em;
      color: $color-black;
    }

    &__award {
      margin: 27px 0 0;
    }

    &__award-title {
      font-weight: 500;
      font-size: 15px;
      line-height: 15px;
      color: #505050;
    }

    &__award-tabs {
      display: flex;
      margin: 10px 0 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: #3a85f4;
    }

    &__award-item {
      margin: 0 10px 0 0;
      padding: 9px 16.5px 7px;
      //padding: 9px 21px 7px;
      border: 1px solid #3a85f4;
      border-radius: 75px;
      cursor: pointer;

      &:last-child {
        margin: 0;
      }
    }

    &__keys-wrapper {
      margin: 54px 0 0;
      padding: 0 0 15px;
      border-bottom: 1px solid #cadcf8;
    }

    &__keys {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      text-transform: lowercase;
      color: #2f2f2f;
    }

    &__keys-item {
      display: flex;
      align-items: center;
      margin: 0 15px 0 0;
      padding: 8px 15px;
      //padding: 9px 21px 7px;
      background: #f3f3f3;
      border-radius: 75px;
      cursor: pointer;

      &:last-child {
        margin: 0;
      }
    }

    &__keys-image {
      margin: 0 8px 0 0;
    }

    &__scientist {
      display: flex;
      align-items: center;
      margin: 18px 0 0;
      padding: 0 0 16px;
      border-bottom: 1px solid #cadcf8;
    }

    &__scientist-image {
      border-radius: 50%;
      margin: 0 11px 0 0;
    }

    &__scientist-name {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: $color-black;
    }

    &__scientist-text {
      margin: 4px 0 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: $color-black;
    }

    &__scientist-rating {
      display: flex;
      align-items: center;
      margin: 0 0 0 auto;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: $color-blue;
    }

    &__rating-image {
      margin: 0 5px 0 0;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      margin: 15px 0 0;
    }

    &__button-left {
      padding: 12px 27px 10px 25px;
      background: #d9d9d9;
      border-radius: 123px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: $color-white;
      border: 1px solid transparent;
      pointer-events: none;
    }

    .button-passive {
      background: $color-blue;
      pointer-events: inherit;

      &:hover {
        background: $color-white;
        color: $color-blue;
        border: 1px solid $color-blue;
      }
    }

    &__button-image {
      margin: 0 7px 0 0;
    }

    &__button-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 41px;
      height: 41px;
      border-radius: 50%;
      border: 1.5px solid $color-blue;

      &:hover {
        background: $color-blue;
        color: $color-white;

        svg path {
          stroke: $color-white;
        }
      }
    }

    .price {
      border: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      padding: 9px 0 7px;
      color: #2f2f2f;
      pointer-events: none;
    }
  }

  &__button {
    display: block;
    margin: 49px auto 0;
    padding: 15px 63px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border: 2px solid $color-blue;
    border-radius: 123px;
    color: $color-blue;

    &:hover {
      background: $color-blue;
      color: $color-white;
    }
  }
}
</style>
