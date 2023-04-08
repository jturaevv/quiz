<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';

const { t } = useLocale()

</script>

<template>
  <section class="home-intro">
    <div class="container">
      <div class="intro-wrapper">
        <div class="intro-content">
          <h1 class="intro-content__title" v-html="t('page.home.intro.title')" />
          <h3 class="intro-content__subtitle">{{ t('page.home.intro.subtitle') }}</h3>
          <input type="text" class="intro-content__search">
        </div>

        <div class="intro-media">
          <img class="intro-media__image" src="@/assets/images/home/intro_image.svg" alt="Intro image">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-intro {
  display: flex;
  flex: 1;
  min-height: 100vh;
  padding: 130px 0;
  background: $secondaryColor;

  @include breakpoint(sm) {
    padding: 100px 0 0;
  }

  @include breakpoint(xs) {
    min-height: auto;
    max-height: 100vh;
    overflow: hidden;
  }

  .intro {
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;

      @include breakpoint(md) {
        flex-direction: column;
      }

      @include breakpoint(xs) {
        display: block;        
      }
    }

    &-content {
      @include breakpoint(md) {
        margin-bottom: 20px;
      }

      &__title {
        font-weight: 700;
        font-size: 48px;
        line-height: 130%;
        margin-bottom: 30px;

        @include breakpoint(xl) {
          font-size: 40px;
        }

        @include breakpoint(lg) {
          font-size: 36px;
        }

        @include breakpoint(md) {
          font-size: 42px;
        }

        @include breakpoint(sm) {
          font-size: 32px;
          margin-bottom: 25px;
        }

        @include breakpoint(xs) {
          font-size: 28px;
        }

        @include breakpoint(xxs) {
          font-size: 22px;
          margin-bottom: 15px;
        }

        span {
          color: $primaryColor;
        }
      }

      &__subtitle {
        font-family: "Inter";
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        margin-bottom: 30px;
        
        @include breakpoint(xxs) {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }

    &-media {
      min-width: 45%;
      
      @include breakpoint(md) {
        min-width: 100%;
      }

      &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>