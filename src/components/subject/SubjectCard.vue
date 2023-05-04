<script setup lang="ts">
import { ROUTE } from '@/common/routes'
import type { ISubject } from '@/services/tutorial/tutorial.interface'

defineProps<{
  subject: ISubject
  imgSrc: string
}>()

</script>

<template>
  <router-link :to="ROUTE.home" class="subject-card">
    <div class="card__image">
      <img :src="imgSrc" alt="Subject image">
    </div>

    <div class="card__name">{{ subject.name }}</div>

    <svg class="card__arrow">
      <use xlink:href="@/assets/icons/sprite.svg#arrow-icon" />
    </svg>
  </router-link>
</template>

<style lang="scss">
.subject-card {
  --card-image-size: 120px;
  --card-padding-left: 15px;
  --card-padding-y: 14px;

  position: relative;
  display: flex;
  align-items: center;
  min-height: 75px;
  padding-left: calc(var(--card-padding-left) + var(--card-image-size));
  padding-top: var(--card-padding-y);
  padding-bottom: var(--card-padding-y);
  padding-right: 24px;
  background: #FFFFFF;
  border: 2px solid $palette-third-70 ;
  border-radius: 10px;
  transition: 0.2s;
  overflow: hidden;
  cursor: pointer;

  @include breakpoint(md) {
    --card-padding-y: 24px;
  }

  @include breakpoint(sm) {
    --card-padding-y: 12px;
    --card-image-size: 75px;
    min-height: 60px;
  }

  @include breakpoint(xxs) {
    --card-padding-y: 10px;
    --card-image-size: 60px;
    min-height: 50px;
  }

  &:hover {
    color: $primaryColor;
    border-color: $palette-fourth-20;
  }
  
  .card {
    &__image {
      position: absolute;
      left: 15px;
      top: 50%;
      width: var(--card-image-size);
      height: var(--card-image-size);
      min-width: var(--card-image-size);
      min-height: var(--card-image-size);
      margin-right: 15px;
      transform: translateY(-50%);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__name {
      flex: 1;
      font-size: 18px;
      font-weight: 700;
      line-height: 23px;
      margin: 0 15px;

      @include breakpoint(sm) {
        font-size: 16px;
        line-height: 21px;
      }

      @include breakpoint(xxs) {
        font-size: 14px;
        line-height: 18px;
      }
    }

    &__arrow {
      transform: rotate(-90deg);
      width: 20px;
      height: 20px;
    }
  }
}
</style>