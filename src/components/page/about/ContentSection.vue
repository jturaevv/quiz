<script setup lang="ts">
import { CARDS } from '@/mock/aboutCard'
import { useLocale } from '@/composables/useLocale'

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

  @include breakpoint(sm) {
    padding: 40px 0;
  }

  .content {
    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 15px;

      @include breakpoint(md) {
        font-size: 36px;
      }

      @include breakpoint(sm) {
        font-size: 28px;
      }

      @include breakpoint(xs) {
        font-size: 24px;
      }

      @include breakpoint(xxs) {
        font-size: 20px;
      }
    }

    &-card__list {
      --cards-per-row: 3;

      display: grid;
      grid-template-columns: repeat(var(--cards-per-row), 1fr);
      grid-gap: 24px;
      margin: 20px 0;

      @include breakpoint(md) {
        --cards-per-row: 1;
      }
    }

    &-info {
      display: flex;
      gap: 24px;
      margin-top: 60px;

      @include breakpoint(md) {
        flex-direction: column-reverse;
        margin-top: 40px;
      }

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

          @include breakpoint(xs) {
            min-height: 400px;
          }

          @include breakpoint(xxs) {
            min-height: 300px;
          }
        }
      }

      &-body {
        width: 50%;

        @include breakpoint(md) {
          width: auto;
        }
      }

      &__title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 40px;

        @include breakpoint(xs) {
          font-size: 20px;
        }
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
    padding: 30px 30px 0;
    max-width: 500px;
    background: #FFFFFF;
    border: 2px solid $palette-third-60;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;

    @include breakpoint(md) {
      margin: 0 auto;
    }

    @include breakpoint(xs) {
      padding: 24px 24px 0;
    }

    &:hover {
      box-shadow: -5px 5px 10px rgba($color: #000000, $alpha: 0.1);
      transform: translate(5px, -5px);
    }

    &__title {
      font-size: 22px;
      font-weight: 700;
      color: $palette-first-50;
      margin-bottom: 30px;

      @include breakpoint(xs) {
        margin-bottom: 24px;
        font-size: 20px;
      }
    }

    &__info {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 20px;

      @include breakpoint(xs) {
        margin-bottom: 15px;
        font-size: 14px;
      }
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