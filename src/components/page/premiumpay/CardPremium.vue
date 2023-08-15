<script setup lang="ts"></script>

<template>
  <div class="card-business">
    <div class="card__img">
      <img src="/images/card-business.png" alt="" />
    </div>
    <h4 class="card__title">Премиум</h4>
    <p class="card__subtitle">Для тех кто хочет большего</p>
    <h4 class="card__price">$10</h4>
    <ul class="card-list">
      <li class="card__advantages">Доступ ко всем урокам</li>
      <li class="card__advantages">Доступ к полному прогрессу</li>
      <li class="card__advantages">Отсутствие рекламы</li>
      <li class="card__advantages">Иконка PRO</li>
      <li class="card__advantages not-support">Отсуствие поддержки</li>
    </ul>
    <BaseButton> Отправить </BaseButton>
  </div>
</template>

<style lang="scss">
.card-business {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 416px;
  padding: 62px 43px;
  gap: 30px;
  border-radius: 10px;
  border: 2px solid $primaryColor;
  background: #ffd9cb;
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
        background-image: url("/images/card-checkmark-2.png");
        border-radius: 50%;
      }

      &.not-support::before {
        content: "";
        position: absolute;
        left: 0;
        transform: translateX(100%);
        width: 16px;
        height: 16px;
        background-color: #a57f71;
        border-radius: 50%;
      }
    }
  }
}
</style>
