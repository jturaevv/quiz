<script setup lang="ts"></script>

<template>
  <div class="result-section">
    <h2 class="result__title">Ваш <span>результат</span></h2>
    <div class="result-body">
      <figure class="pie-chart">
        <h3 class="caption-inside">71%</h3>
      </figure>
      <div class="result-info">
        <h3 class="info__title first">Затраченное время</h3>
        <p class="info__subtitle">7 мин. 52 сек.</p>
        <h3 class="info__title second">Количество правильных ответов</h3>
        <p class="info__subtitle">12 из 15</p>
        <h3 class="info__title third">Рекомендация</h3>
        <p class="info__text">
          Отличная работа! Ваш результат выше среднего, что означает, что вы
          хорошо справились с тестом. Не останавливайтесь на достигнутом,
          продолжайте развиваться и улучшать свои навыки. Рекомендуем вам
          поучаствовать в дополнительных тренировках и проектах, которые помогут
          вам стать еще лучше в вашей области. И не забывайте оценивать свой
          прогресс, чтобы продолжать двигаться вперед. Будьте настойчивы и
          целеустремленны, и мы уверены, что вы будете добиваться успеха во всем,
          что делаете. Удачи вам!
        </p>
        <div class="info-buttons">
          <base-button secondary>Вернуться к уроку</base-button>
          <base-button>Пройти тест заново</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.result-section {
  .result {
    &__title {
      font-weight: 700;
      font-size: 40px;

      span {
        color: $primaryColor;
      }
    }

    &-body {
      display: flex;
      justify-content: space-between;
      gap: 50px;
    }

    &-info {
      width: 50%;

      .info {
        &__title {
          font-weight: 700;
          font-size: 24px;
          line-height: 130%;
          color: #000000;
          margin-bottom: 10px;

          &.second {
            margin-top: 40px;
          }

          &.third {
            margin-top: 40px;
          }
        }

        &__subtitle {
          font-family: "Inter";
          font-weight: 400;
          font-size: 16px;
          color: #000000;
        }

        &-text {
          font-family: "Inter";
          font-weight: 400;
          font-size: 16px;
          margin-top: 10px;
          color: #000000;
        }

        &-buttons {
          display: flex;
          align-items: center;
          margin-top: 40px;
          gap: 20px;
        }
      }
    }
  }

  .pie-chart {
    background: radial-gradient(circle closest-side,
        white 0,
        white 52.8%,
        transparent 52.8%,
        transparent 60%,
        #eff5f5 0),
      conic-gradient(#203d48 92%, #203d48 83%, #a9ccd9 75%, #a9ccd9 100%);
    position: relative;
    width: 500px;
    min-height: 350px;
  }

  .pie-chart .caption-inside {
    font-weight: 700;
    font-size: 48px;
    line-height: 130%;
    color: #000000;
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    left: 33%;
  }
}
</style>
