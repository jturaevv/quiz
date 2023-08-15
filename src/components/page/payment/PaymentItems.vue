<script setup lang="ts">
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const phone = ref('')
const cardNumber = ref()
const cardHolder = ref('')
const expireDate = ref()
</script>

<template>
  <div class="payment-page">
    <div class="container">
      <div class="payment-page-wrapper">
        <div class="payment-card">
          <div class="payment__title">Ваши данные</div>
          <div class="payment-info">
            <BaseTextField
              type="text"
              v-model="fullName"
              outlined
              title="Имя"
            />
            <BaseTextField
              type="text"
              v-model="fullName"
              outlined
              title="Фамилия"
            />
          </div>
          <BaseTextField type="email" v-model="email" outlined title="Email" />
          <BasePhoneField
            type="tel"
            v-model="phone"
            outlined
            title="Номер телефона"
          />
          <div class="card-type">
            <div class="card-uz">
              <img src="/images/card-humo.png" alt="Humo" />
            </div>
            <div class="card-uz">
              <img src="/images/card-uz.png" alt="UzCard" />
            </div>
          </div>
          <div class="card-info">
            <BaseNumberField
              type="number"
              v-model="cardNumber"
              outlined
              title="Номер карты"
              class="card__field"
            />
            <div class="card-info-child">
              <BaseTextField
                type="text"
                v-model="cardHolder"
                outlined
                title="Владелец карты"
                class="card__field holder"
              />
              <BaseNumberField
                type="number"
                v-model="expireDate"
                outlined
                title="Годен"
                class="card__field date"
              />
            </div>
          </div>
          <label for="card" class="card__check">
            <input type="checkbox" name="card" id="card" />
            Отправить чек на электронную почту
          </label>
          <BaseButton class="card__btn"> Оплатить </BaseButton>
        </div>
        <div class="payment-bill"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.payment-page {
  padding: 130px 0;

  &-wrapper {
    display: flex;
  }

  .payment {
    &__title {
      font-family: Raleway;
      font-size: 24px;
      font-weight: 700;
      line-height: 130%;
      color: $fontColor;
    }

    &-info {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    &-card {
      width: 50%;
      padding: 0 120px;
      background-color: $palette-third-50;
    }

    &-bill {
      width: 60%;
      background-image: url("/images/payment-bg.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      background-color: $secondaryColor;
    }
  }

  .card {
    &-type {
      display: flex;
      align-items: center;
      gap: 24px;
      margin: 25px 0 35px 0;
    }

    &-uz {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 86px;
      padding: 8px 8px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);

      img {
        width: 50px;
        height: 50px;
        object-fit: contain;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 240px;
      padding: 24px;
      margin-bottom: 24px;
      background-color: #93bfcf;
      border-radius: 10px;

      &-child {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }

    &__field .field__input {
      width: 100%;
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 130%;
      color: $palette-third-55;

      &::placeholder {
        color: $palette-third-55;
      }
    }

    &__field.holder {
      width: 95%;
    }

    &__field.date {
      width: 25%;
    }

    &__btn {
      width: 100%;
      margin-top: 85px;
    }
  }
}
</style>
