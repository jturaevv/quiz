<script setup lang="ts">
import ProfileCard from '@/components/page/profile/ProfileCard.vue'
</script>

<template>
  <div class="dashboard profile-page">
    <profile-card :score="3" v-for="i in 6" :key="i" />
  </div>
</template>

<style lang="scss">
.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 40px;
}
</style>
