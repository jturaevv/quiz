<script setup lang="ts"></script>

<template>
  <div class="card-premium">
    <div class="card__img">
      <img src="/images/card-premium.png" alt="" />
    </div>
    <h4 class="card__title">Премиум+</h4>
    <p class="card__subtitle">Для тех кто хочет большего</p>
    <h4 class="card__price">$15</h4>
    <ul class="card-list">
      <li class="card__advantages">Доступ ко всем урокам</li>
      <li class="card__advantages">Доступ к полному прогрессу</li>
      <li class="card__advantages">Отсутствие рекламы</li>
      <li class="card__advantages">Иконка PRO</li>
      <li class="card__advantages">Круглосуточная поддержка</li>
    </ul>
    <BaseButton class="card__btn"> Отправить </BaseButton>
  </div>
</template>

<style lang="scss">
.card-premium {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 416px;
  padding: 62px 43px;
  gap: 30px;
  transform: translateY(-5%);
  border: 2px solid #ffd9cb;
  border-radius: 10px;
  background: $primaryColor;
  box-shadow: 0px 8px 16px 0px rgba(32, 0, 0, 0.2);
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
      color: $pageColor;
    }

    &__subtitle {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
      color: $pageColor;
    }

    &__price {
      font-family: Raleway;
      font-size: 30px;
      font-weight: 700;
      line-height: 130%;
      color: $pageColor;
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
      color: $pageColor;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        transform: translateX(100%);
        width: 16px;
        height: 16px;
        background-image: url("/images/card-checkmark.png");
        border-radius: 50%;
      }
    }

    &__btn {
      background-color: #ffd9cb;
      color: $primaryColor;
    }
  }
}
</style>
