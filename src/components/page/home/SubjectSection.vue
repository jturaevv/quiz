<script setup lang="ts">
import SubjectCard from '@/components/subject/SubjectCard.vue'
import { useLocale } from '@/composables/useLocale';

const { t } = useLocale()

</script>

<template>
  <section class="home-subject">
    <div class="container">
      <div class="subject-wrapper">
        <div class="subject-header">
          <h2 class="subject-header__title">{{ t('page.home.subject.title') }}</h2>
          <h2 class="subject-header__subtitle">{{ t('page.home.subject.subtitle') }}</h2>
        </div>

        <div class="subject-body">
          <div class="subject-list">
            <template v-for="card in 12" :key="card">
              <subject-card class="subject-list__item" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-subject {
  padding: 80px 0;

  .subject {
    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        width: 50%;
        margin-bottom: 40px;
        font-size: 40px;
        font-weight: 700;
        line-height: 52px;
        text-align: center;
      }

      &__subtitle {
        width: 50%;
        font-family: "Inter";
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
      }
    }

    &-body {
      margin-top: 40px;
    }

    &-list {
      --items-per-row: 2;

      display: grid;
      grid-template-columns: repeat(var(--items-per-row), 1fr);
    } 
  }
}
</style>