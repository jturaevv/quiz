<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { useTutorialStore } from '@/stores/tutorial'
import { Toast } from '@/plugins/toastify'
import { TOAST_MESSAGE } from '@/plugins/toastify/types'
import { LOADER_SIZE } from '@/common/types'
import { ROUTE } from '@/common/routes'

const { t } = useLocale()
const tutorialStore = useTutorialStore()

const isLoading = ref(false)

onBeforeMount(async () => {
  if(tutorialStore.subjects.length) return

  isLoading.value = true
  
  try {
    await tutorialStore.getSubjectList()
  } catch (error) {
    Toast.error(TOAST_MESSAGE.ERROR.DEFAULT)
  }
  
  isLoading.value = false
})

</script>

<template>
  <div class="tutorial-sidebar">
    <h2 class="sidebar__title">{{ t('page.subject.title') }}</h2>

    <div v-if="!isLoading" class="sidebar-list">
      <template v-for="subject in tutorialStore.subjects" :key="subject.id">
        <router-link class="sidebar-list__item" :to="ROUTE.subject(subject.id)" active-class="active">
          <span>{{ subject.name }}</span>
        </router-link>
      </template>
    </div>

    <base-loader v-else :size="LOADER_SIZE.sm" />
  </div>
</template>

<style lang="scss">
.tutorial-sidebar {
  padding: 50px;

  .sidebar {
    &__title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 30px;
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 20px;

      &__item {
        position: relative;
        padding: 2px 10px 2px 0;
        font-weight: 700;
        font-size: 18px;
        color: $palette-second-70;
        
        span {
          display: block;
          transition: 0.2s ease;
        }

        &.active {
          color: $primaryColor;

          span {
            transform: translateX(10px);
          }

          &::before {
            opacity: 1;
          }
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 3px;
          background: currentColor;
          border-radius: 34px;
          opacity: 0;
          transition: 0.2s opacity;
        }
      }
    }
  }
}
</style>