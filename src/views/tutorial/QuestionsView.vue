<script setup lang="ts">
import { ref } from 'vue'
import QuizSection from '@/components/page/questions/QuizSection.vue'
import ResultSection from '@/components/page/questions/ResultSection.vue'

const isFinished = ref(false)
// const isFinished = ref(true)
</script>

<template>
  <div class="questions-page page">
    <div class="container">
      <div class="questions-wrapper">
        <quiz-section v-if="!isFinished" />
        <result-section v-else />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.questions {
  &-page {
    padding: 150px 0;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
}
</style>
