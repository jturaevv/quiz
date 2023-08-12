<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  advantages: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="premium-card">
    <h4 class="card__title">{{ props.title }}</h4>
  </div>
</template>

<style lang="scss"></style>
