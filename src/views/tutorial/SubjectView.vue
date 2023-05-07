<script setup lang="ts">
import { ref } from 'vue'
import AppExpander from '@/ui/AppExpander/AppExpander.vue'
import AppExpanderItem from '@/ui/AppExpander/AppExpanderItem.vue'
import { useLocale } from '@/composables/useLocale'
import { useRoute, useRouter } from 'vue-router'
import { ROUTE } from '@/common/routes'

const { t } = useLocale()
const router = useRouter()
const route = useRoute()

const expanders = ref([])
const expandItems = [
  {
    title: 'Существующая теория предоставляет',
    bodyText:
      'Как принято считать, явные признаки победы институционализации, инициированные исключительно синтетически, заблокированы в рамках своих собственных рациональных ограничений.',
  },
  {
    title: 'Существующая теория предоставляет',
    bodyText:
      'Как принято считать, явные признаки победы институционализации, инициированные исключительно синтетически, заблокированы в рамках своих собственных рациональных ограничений.',
  },
  {
    title: 'Существующая теория предоставляет',
    bodyText:
      'Как принято считать, явные признаки победы институционализации, инициированные исключительно синтетически, заблокированы в рамках своих собственных рациональных ограничений.',
  },
  {
    title: 'Существующая теория предоставляет',
    bodyText:
      'Как принято считать, явные признаки победы институционализации, инициированные исключительно синтетически, заблокированы в рамках своих собственных рациональных ограничений.',
  },
  {
    title: 'Существующая теория предоставляет',
    bodyText:
      'Как принято считать, явные признаки победы институционализации, инициированные исключительно синтетически, заблокированы в рамках своих собственных рациональных ограничений.',
  },
  {
    title: 'Существующая теория предоставляет',
    bodyText:
      'Как принято считать, явные признаки победы институционализации, инициированные исключительно синтетически, заблокированы в рамках своих собственных рациональных ограничений.',
  },
]

function redirectHandler() {
  console.log('route', route.params)
  
  const subjectId = route.params.id as string
  const lessonId = 1
  router.push(ROUTE.lesson(subjectId, lessonId))
}
</script>

<template>
  <div class="subject tutorial-page">
    <h2 class="subject__title">
      Существующая <br />
      теория <br />
      <span>предоставляет</span>
    </h2>
    <p class="subject__subtitle">
      Как принято считать, явные признаки победы институционализации,
      инициированные исключительно синтетически, заблокированы в рамках своих
      собственных рациональных ограничений.
    </p>

    <app-expander v-model="expanders">
      <app-expander-item
        v-for="(item, index) in expandItems"
        :key="index"
        :value="`loan-expander-${index}`"
      >
        <template #title>
          <p class="loan-expander__title">{{ item.title }}</p>
        </template>
        <template #body>
          <p class="loan-expander__subtitle">{{ item.bodyText }}</p>
          <base-button @click="redirectHandler">
            {{ t("action.learn") }}
          </base-button>
        </template>
      </app-expander-item>
    </app-expander>
  </div>
</template>

<style lang="scss">
.subject {
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 130%;
    color: #060c0e;

    span {
      color: $primaryColor;
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    width: 50%;
    margin-top: 30px;
    margin-bottom: 80px;

    color: #060c0e;
  }
  .loan-expander {
    &__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      color: #060c0e;
    }

    &__subtitle {
      width: 65%;
      padding-bottom: 17px;
    }
  }
}
</style>
