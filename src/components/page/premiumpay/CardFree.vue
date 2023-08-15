<script setup lang="ts"></script>

<template>
  <div class="card-free">
    <div class="card__img">
      <img src="/images/card-free.png" alt="" />
    </div>
    <h4 class="card__title">Простой</h4>
    <p class="card__subtitle">
      Подходить для ознакомления с уроками и системой
    </p>
    <h4 class="card__price">$0</h4>
    <ul class="card-list">
      <li class="card__advantages">Доступно только 2 категории</li>
      <li class="card__advantages">Отсуствие полного прогресса</li>
      <li class="card__advantages">Присуствие рекламы</li>
    </ul>
  </div>
</template>

<style lang="scss">
.card-free {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 416px;
  padding: 62px 43px;
  gap: 30px;
  border-radius: 10px;
  border: 2px solid $palette-third-60;
  background: $palette-third-5;
  overflow: hidden;

  .card {
    &__img {
      position: absolute;
      top: 0;
      right: 0;
    }

    &__title {
      font-family: Raleway;
      font-size: 30px;
      font-weight: 700;
      line-height: 130%;
      color: $fontColor;
    }

    &__subtitle {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
    }

    &__price {
      font-family: Raleway;
      font-size: 30px;
      font-weight: 700;
      line-height: 130%;
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &__advantages {
      display: flex;
      align-items: center;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
      color: $fontColor;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        transform: translateX(100%);
        width: 16px;
        height: 16px;
        background-color: #000;
        border-radius: 50%;
      }
    }
  }
}
</style>
