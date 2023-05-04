<script setup lang="ts">
import { LOADER_SIZE } from '@/common/types'

withDefaults(defineProps<{
  size: LOADER_SIZE
}>(), {
  size: LOADER_SIZE.md
})

</script>

<template>
  <div class="main-loader">
    <img :class="['loader', size]" src="@/assets/images/loader.svg" alt="Loader">
  </div>
</template>

<style lang="scss">
  .main-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .loader {
      &.sm {
        width: 70px;
        height: 70px;
      }

      &.md {
        width: 120px;
        height: 120px;
      }

      &.lg {
        width: 200px;
        height: 200px;
      }
    }
  }
</style>