<script setup lang="ts">
// import questionApp from './questionApp.vue'
import resultApp from './resultApp.vue'
</script>

<template>
  <div class="questions-page page">
    <div class="container">
      <div class="questions-wrapper">
        <!-- <question-app /> -->
        <resultApp />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.questions {
  &-page {
    padding: 150px 0;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    text-align: center;
    margin-bottom: 40px;
    color: #060c0e;
  }

  &-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
