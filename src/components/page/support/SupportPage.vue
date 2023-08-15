<script setup lang="ts">
import { ref } from 'vue'
import AppExpander from '@/ui/AppExpander/AppExpander.vue'
import AppExpanderItem from '@/ui/AppExpander/AppExpanderItem.vue'

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
</script>

<template>
  <div class="support-page">
    <div class="container">
      <div class="support-wrapper">
        <h2 class="support__title">
          Часто задаваемые <br />
          <span>вопросы</span>
        </h2>
        <div class="support-body">
          <div class="support-card">
            <p class="support__description">
              Не смогли найти ответ на интересующий вас вопрос? Напишите нам в
              телеграмме
            </p>
            <div class="support-img">
              <img src="/images/support-img.png" alt="" />
            </div>
            <BaseButton> Написать </BaseButton>
          </div>
          <div class="support-questions">
            <app-expander v-model="expanders">
              <app-expander-item
                v-for="(item, index) in expandItems"
                :key="index"
                :value="`loan-expander-${index}`"
              >
                <template #title>
                  <p class="support-expander__title">{{ item.title }}</p>
                </template>
                <template #body>
                  <p class="support-expander__subtitle">{{ item.bodyText }}</p>
                </template>
              </app-expander-item>
            </app-expander>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.support-page {
  padding: 130px 0;

  .support {
    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-family: Raleway;
      font-size: 40px;
      font-weight: 700;
      line-height: 130%; /* 52px */
      color: #060c0e;

      span {
        color: $primaryColor;
      }
    }

    &-body {
      display: flex;
      justify-content: flex-end;
      margin-top: 60px;
      margin-bottom: 80px;
      gap: 150px;
    }

    &-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 305px;
      height: fit-content;
      padding: 30px 0;
      gap: 30px;
      background-color: #ffd9cb;
      border: 2px solid #eb6440;
      border-radius: 10px;
    }

    &__description {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
      color: #000;
      text-align: center;
    }

    &-img {
      width: 134px;
      height: 134px;
      border: 2px solid #eb6440;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &-questions {
      width: 60%;
    }

    &-expander__title {
      font-family: Raleway;
      font-size: 24px;
      font-weight: 700;
      line-height: 130%;
      color: $fontColor;
    }

    &-expander__subtitle {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
      color: $fontColor;
    }
  }
}
</style>
