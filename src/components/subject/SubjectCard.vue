<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

</script>

<template>
  <div class="subject-card">
    <div class="card__image">
      <img src="@/assets/images/subject/subject-1.png" alt="Subject image">
    </div>

    <div class="card__name">{{ t('page.home.subject.demoName') }}</div>

    <svg class="card__arrow">
      <use xlink:href="@/assets/icons/sprite.svg#arrow-icon" />
    </svg>
  </div>
</template>

<style lang="scss">
.subject-card {
  display: flex;
  align-items: center;
  padding: 15px;
  background: #FFFFFF;
  border: 2px solid $palette-third-70 ;
  border-radius: 10px;
  
  .card {
    &__image {
      width: 120px;
      height: 120px;
      min-width: 120px;
      min-height: 120px;
      margin-right: 15px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__name {}

    &__arrow {
      width: 20px;
      height: 20px;
    }
  }
}
</style>