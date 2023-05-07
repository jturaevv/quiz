<script setup lang="ts">
import { ROUTE } from '@/common/routes'
import { useLocale } from '@/composables/useLocale'
import { useRoute, useRouter } from 'vue-router'

const { t } = useLocale()
const router = useRouter()
const route = useRoute()

function redirectHandler() {
  console.log('route.params :>> ', route.params)
  const { subjectId, lessonId } = route.params

  router.push(ROUTE.questions(subjectId as string, lessonId as string))
}
</script>

<template>
  <div class="lesson tutorial-page">
    <h2 class="lesson__title">
      Существующая теория <br />
      <span>предоставляет</span>
    </h2>
    <base-video-player
      class="lesson__video"
      src="video/demo-video.mp4"
      poster="images/video-poster.png"
      controls
      :volume="0.6"
      type="video/mp4"
    />
    <div class="lesson-subcontent">
      <h4 class="subcontent__title">
        Существующая теория <span>предоставляет</span>
      </h4>
      <p class="subcontent__text">
        Как принято считать, явные признаки победы институционализации,
        инициированные исключительно синтетически, заблокированы в рамках своих
        собственных рациональных ограничений. Как принято считать, явные
        признаки победы институционализации, инициированные исключительно
        синтетически, заблокированы в рамках своих собственных рациональных
        ограничений. Как принято считать, явные признаки победы
        институционализации, инициированные исключительно синтетически,
        заблокированы в рамках своих собственных рациональных ограничений.
        <br />
        Как принято считать, явные признаки победы институционализации,
        инициированные исключительно синтетически, заблокированы в рамках своих
        собственных рациональных ограничений. <br />
        Высокий уровень вовлечения представителей целевой аудитории является
        четким доказательством простого факта: выбранный нами инновационный путь
        не оставляет шанса для экономической целесообразности принимаемых
        решений. Имеется спорная точка зрения, гласящая примерно следующее:
        интерактивные прототипы лишь.
      </p>
      <base-button  @click="redirectHandler">{{ t("action.test") }}</base-button>
    </div>
  </div>
</template>

<style lang="scss">
.lesson {
  display: flex;
  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 130%;
    color: #060c0e;
    margin-bottom: 60px;

    span {
      color: $primaryColor;
    }
  }

  &__video {
    width: 700px;
    height: 430px;
    margin-bottom: 40px;
  }

  .subcontent {
    &__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 30px;
      color: #060c0e;
    }

    &__text {
      font-family: "Inter";
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      margin-bottom: 40px;
      color: #060c0e;
    }
  }
}
</style>
