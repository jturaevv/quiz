<script setup lang="ts">
import CardFree from './CardFree.vue'
import CardPremiumPlus from './CardPremiumPlus.vue'
import CardPremium from './CardPremium.vue'
</script>

<template>
  <div class="premium-payment">
    <div class="container">
      <div class="premium-wrapper">
        <div class="premium-texts">
          <h2 class="premium__title">Премиум <span>аккаунт</span></h2>
          <p class="premium__subtitle">
            Высокий уровень вовлечения представителей целевой аудитории является
            четким доказательством простого факта: выбранный нами инновационный
            путь не оставляет шанса для экономической целесообразности
            принимаемых решений. Имеется спорная точка зрения, гласящая примерно
            следующее: интерактивные прототипы лишь.
          </p>
        </div>
        <div class="premium-cards">
          <CardFree />
          <CardPremiumPlus />
          <CardPremium />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.premium-payment {
  padding: 130px 0;

  .premium {
    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &-texts {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-family: Raleway;
      font-size: 48px;
      font-weight: 700;
      line-height: 130%;
      color: $fontColor;

      span {
        color: $primaryColor;
      }
    }

    &__subtitle {
      width: 50%;
      margin: 30px 0 60px 0;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: $fontColor;
    }

    &-cards {
      display: flex;
      gap: 24px;
    }
  }
}
</style>
