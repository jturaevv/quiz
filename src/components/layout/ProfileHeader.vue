<script setup lang="ts">
import MainLogo from '@/components/layout/MainLogo.vue'
</script>

<template>
  <div class="profile-header">
    <main-logo class="header__logo" />

    <span>Actions</span>
  </div>
</template>

<style lang="scss">
  .profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px 10px 110px;
    border-bottom: 2px solid $palette-third-60;
  }
</style>