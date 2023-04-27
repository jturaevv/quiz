<script setup lang="ts">
import LayoutSidebar from '@/components/layout/ProfileSidebar.vue' 
import LayoutHeader from '@/components/layout/ProfileHeader.vue'

</script>

<template>
  <div class="profile-layout">
    <layout-sidebar class="layout__sidebar" />

    <main class="layout-body">
      <layout-header class="layout-body__header" />

      <div class="layout-body__page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.profile-layout {
  display: flex;
  min-height: 100vh;
  max-height: 100vh;

  .layout {
    &__sidebar {
      --width: 280px;

      max-width: var(--width);
      min-width: var(--width);
    }

    &-body {
      display: flex;
      flex-direction: column;
      flex: 1;
      background-image: url('@/assets/images/profile/page_bg.png');
      background-repeat: no-repeat;
      background-size: 50%;
      background-position: 100%;
      overflow: hidden auto;

      &__header {
        background: $pageColor;
      }

      &__page {
        flex: 1;
      }
    }
  }
}
</style>