<script setup lang="ts">
import MainHeader from '@/components/layout/DefaultHeader.vue'
</script>

<template>
  <div class="default-layout">
    <main-header class="layout-header" />

    <main class="layout-main">
      <router-view />
    </main>

    <footer class="layout-footer">
      Default footer
    </footer>
  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .layout {
    &-header {}

    &-main {
      display: flex;
      flex: 1;
    }

    &-footer {
      display: none;
    }
  }
}
</style>