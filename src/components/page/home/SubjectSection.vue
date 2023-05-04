<script setup lang="ts">
import { cardImageRandomizer } from '@/common/helpers'
import SubjectCard from '@/components/subject/SubjectCard.vue'
import { useLocale } from '@/composables/useLocale'
import type { ISubject } from '@/services/tutorial/tutorial.interface'

const { t } = useLocale()

withDefaults(defineProps<{
  list: ISubject[]
  loading?: boolean
}>(), {
  loading: false
})

</script>

<template>
  <section class="home-subject">
    <div class="container">
      <div class="subject-wrapper">
        <div class="subject-header">
          <h2 class="subject-header__title">{{ t('page.home.subject.title') }}</h2>
          <h2 class="subject-header__subtitle">{{ t('page.home.subject.subtitle') }}</h2>
        </div>

        <div v-if="!loading" class="subject-body">
          <div class="subject-list">
            <template v-for="subject, index in list" :key="`subject-${subject.id}`">
              <subject-card class="subject-list__item" :subject="subject" :img-src="cardImageRandomizer(index)" />
            </template>
          </div>
        </div>

        <base-loader v-else />
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

        @include breakpoint(md) {
          font-size: 38px;
          line-height: 48px;
          width: auto;
        }

        @include breakpoint(sm) {
          font-size: 32px;
          line-height: 42px;
        }

        @include breakpoint(xs) {
          font-size: 24px;
          line-height: 32px;
        }
      }

      &__subtitle {
        width: 50%;
        font-family: "Inter";
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;

        @include breakpoint(md) {
          width: auto;
        }
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
    }

    &-list {
      --items-per-row: 2;

      display: grid;
      grid-template-columns: repeat(var(--items-per-row), 1fr);
      grid-gap: 24px;
      align-self: center;
      width: 80%;

      @include breakpoint(lg) {
        width: auto;
      }

      @include breakpoint(md) {
        --items-per-row: 1;
      }

      @include breakpoint(xs) {
        grid-gap: 20px;
      }

      @include breakpoint(xxs) {
        grid-gap: 15px;
      }
    } 
  }
}
</style>