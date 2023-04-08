<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';

const { t } = useLocale()
</script>

<template>
  <section class="about-intro">
    <div class="container">
      <div class="intro-wrapper">
        <h1 class="intro__title" v-html="t('page.about.intro.title')" />
        <h3 class="intro__subtitle">{{ t('page.about.intro.subtitle') }}</h3>
        <div class="intro__image">
          <img src="@/assets/images/about/intro-image.png" alt="Aboout page intro image">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-intro {
  display: flex;
  flex: 1;
  padding: 200px 0 80px;
  background: $secondaryColor;

  @include breakpoint(md) {
    padding: 120px 0 60px;
  }

  @include breakpoint(sm) {
    padding: 110px 0 40px;
  }
  
  @include breakpoint(xxs) {
    padding: 100px 0 40px;
  }

  .intro {
    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    }

    &__title {
      font-size: 48px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 30px;

      @include breakpoint(md) {
        font-size: 36px;
      }

      @include breakpoint(sm) {
        font-size: 32px;
      }

      @include breakpoint(xs) {
        font-size: 28px;
      }

      @include breakpoint(xxs) {
        margin-bottom: 20px;
        font-size: 24px;
      }

      span {
        color: $primaryColor;
      }
    }

    &__subtitle {
      width: 40%;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.3;
      margin-bottom: 40px;

      @include breakpoint(md) {
        width: 70%;
        margin-bottom: 30px;
      }

      @include breakpoint(sm) {
        width: auto;
      }

      @include breakpoint(xxs) {
        font-size: 14px;
      }
    }

    &__image {
      display: flex;
      width: 100%;
      border: 2px solid #EB6440;
      border-radius: 10px;
      overflow: hidden;

      @include breakpoint(sm) {
        height: 400px;
      }
      
      @include breakpoint(xxs) {
        height: 300px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>