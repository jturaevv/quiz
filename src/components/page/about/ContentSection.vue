<script setup lang="ts">
import { CARDS } from '@/mock/aboutCard'
import { useLocale } from '@/composables/useLocale';

const { t } = useLocale()
</script>

<template>
  <section class="about-content">
    <div class="container">
      <h2 class="content__title">{{ t('page.about.content.title') }}</h2>

      <div class="content-card__list">
        <template v-for="card, index in CARDS" :key="`about-content-card-${index}`">
          <div class="card">
            <h4 class="card__title">{{ t(card.title) }}</h4>
            <p class="card__info">{{ t(card.info) }}</p>
            <div class="card__image">
              <img :src="card.image.default" alt="About Content Card image">
            </div>
          </div>
        </template>
      </div>

      <div class="content-info">
        <div class="content-info__image">
          <img src="@/assets/images/about/info-image.png" alt="About info image">
        </div>

        <div class="content-info-body">
          <h4 class="content-info__title">{{ t('page.about.content.info.title') }}</h4>
          <p class="content-info__text" v-html="t('page.about.content.info.text')" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-content {
  padding: 80px 0;

  .content {
    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    &-card__list {
      --cards-per-row: 3;

      display: grid;
      grid-template-columns: repeat(var(--cards-per-row), 1fr);
      grid-gap: 24px;
      margin: 20px 0;
    }

    &-info {
      display: flex;
      gap: 24px;
      margin-top: 60px;

      &__image {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        border: 2px solid $primaryColor;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-body {
        width: 50%;
      }

      &__title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 40px;
      }

      &__text {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
      }
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    padding: 30px 30px 0 30px;
    background: #FFFFFF;
    border: 2px solid $palette-third-60;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: -5px 5px 10px rgba($color: #000000, $alpha: 0.1);
      transform: translate(5px, -5px);
    }

    &__title {
      font-size: 22px;
      font-weight: 700;
      color: $palette-first-50;
      margin-bottom: 30px;
    }

    &__info {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 20px;
    }

    &__image {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      height: 230px;
      margin-top: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>