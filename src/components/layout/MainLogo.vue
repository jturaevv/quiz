<script setup lang="ts">
import ROUTES from '@/common/routes'

withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md'
})
</script>

<template>
  <router-link :class="['main-logo', size]" :to="ROUTES.home">
    <img class="logo__img" src="@/assets/icons/logo.svg" alt="Main logo">
  </router-link>
</template>

<style lang="scss">
.main-logo {
  display: flex;
  align-items: center;
  justify-content: center;

  &.sm {}
  
  &.md {
    width: 75px;
    height: 75px;

    @include breakpoint(md) {
      width: 65px;
      height: 65px;
    }

    @include breakpoint(sm) {
      width: 55px;
      height: 55px;
    }

    @include breakpoint(xs) {
      width: 45px;
      height: 45px;
    }
  }

  &.lg {}

  .logo {
    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>