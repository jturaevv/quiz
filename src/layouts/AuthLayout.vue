<script setup lang="ts">
</script>

<template>
  <div class="auth-layout">
    <div class="layout-image">
      <img src="@/assets/images/auth/auth_bg.png" alt="Auth image">
    </div>

    <main class="layout-page-wrapper">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
.auth-layout {
  display: flex;
  min-height: 100vh;
  max-height: 100vh;

  @include breakpoint(xs) {
    max-height: none;
  }

  .layout {
    &-image {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      background: $secondaryColor;

      @include breakpoint(xs) {
        display: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &-page-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 600px;
      flex: 1;
      padding: 24px;

      @include breakpoint(md) {
        max-width: 450px;
      }

      @include breakpoint(sm) {
        max-width: 350px;
        padding: 15px;
      }

      @include breakpoint(xs) {
        max-width: 100%;
      }
    }
  }
}
</style>