<script setup lang="ts">
import WideHeader from '@/components/layout/WideHeader.vue'
import TutorialSidebar from '@/components/layout/TutorialSidebar.vue'

</script>

<template>
  <div class="tutorial-layout">
    <wide-header class="layout-header" />

    <main class="layout-main">
      <div class="layout__sidebar">
        <tutorial-sidebar />
      </div>
      
      <div class="layout-body">
        <div class="layout__page">
          <router-view />
        </div>
  
        <footer class="layout-footer">
          Default footer
        </footer>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.tutorial-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  .layout {
    &-header {
      position: static;
    }

    &-main {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    &-body {
      display: flex;
      flex-direction: column;
      overflow: hidden auto;
    }

    &__sidebar {
      --width: 350px;

      background: $palette-third-60;
      max-width: var(--width);
      min-width: var(--width);
      overflow: hidden auto;
    }

    &__page {
      flex: 1;
    }

    &-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 300px;
      font-size: 48px;
    }
  }
}
</style>