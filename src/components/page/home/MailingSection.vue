<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

</script>

<template>
  <div class="home-mailing">
    <div class="container">
      <div class="mailing-wrapper">
        <h2 class="mailing__title" v-html="t('page.home.mailing.title')" />
        <h3 class="mailing__subtitle">{{ t('page.home.mailing.subtitle') }}</h3>
        <input type="text" class="mailing__input">
        <base-button class="mailing__btn">{{ t('action.send') }}</base-button>
        <div class="mailing__image">
          <img src="@/assets/images/home/mailing-image-1.png" alt="Mailing image background">
        </div>
        <div class="mailing__image">
          <img src="@/assets/images/home/mailing-image-2.png" alt="Mailing image background">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-mailing {
  position: relative;
  padding: 50px 0;
  background: $secondaryColor;
  height: 356px;

  @include breakpoint(lg) {
    height: auto;
  }

  .mailing {
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-self: center;
      width: 40%;

      @include breakpoint(lg) {
        width: 50%;
      }

      @include breakpoint(md) {
        width: auto;
      }
    }

    &__title {
      order: 1;
      flex: 1 0 100%;
      font-size: 40px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30px;
      
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
        margin-bottom: 15px;
      }

      span {
        color: $primaryColor;
      }
    }

    &__subtitle {
      order: 2;
      flex: 1 0 100%;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.3125;
      text-align: center;
      margin-bottom: 40px;

      @include breakpoint(xxs) {
        font-size: 13px;
      }
    }

    &__input {
      order: 5;
      flex: 1;
    }
    
    &__btn {
      order: 6;
      margin-left: 10px;
      
      @include breakpoint(xs) {
        flex: 1;
      }
    }

    &__image {
      position: absolute;
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      order: 3;
      height: 80%;
      transform: translateY(-50%);

      @include breakpoint(lg) {
        height: 55%;
      }

      @include breakpoint(md) {
        position: static;
        height: auto;
        transform: translateY(0);
        flex: 1 0 100%;
        margin: 40px 0;
      }

      @include breakpoint(xs) {
        order: 5;
      }

      &:first-of-type {
        left: 0;

        @include breakpoint(md) {
          display: none;
        }
      }

      &:last-of-type {
        right: 0;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        
        @include breakpoint(md) {
          width: 50%;
          height: 50%;
        }
      }
    }
  }
}
</style>