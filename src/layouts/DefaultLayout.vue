<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="default-layout">
    <header class="layout-header">Default header</header>

    <main class="layout-main">
      <RouterView />
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
      flex: 1;
    }

    &-footer {}
  }
}
</style>