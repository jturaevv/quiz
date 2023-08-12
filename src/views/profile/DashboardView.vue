<script setup lang="ts">
import ProfileCard from '@/components/page/profile/ProfileCard.vue'
</script>

<template>
  <div class="dashboard profile-page">
    <profile-card class="dashboard__card" v-for="i in 6" :key="i" :score="3" />
  </div>
</template>

<style lang="scss">
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 24px;
  row-gap: 40px;

  &__card {}
}
</style>
