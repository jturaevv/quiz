<script setup lang="ts">
import BaseButton from '@/ui/BaseButton.vue'
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
          <div class="premium-card">
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
          <div class="premium-card premium">
            <div class="card__img">
              <img src="/images/card-premium.png" alt="" />
            </div>
            <h4 class="card__title premium">Премиум+</h4>
            <p class="card__subtitle premium">Для тех кто хочет большего</p>
            <h4 class="card__price premium">$15</h4>
            <ul class="card-list">
              <li class="card__advantages premium">Доступ ко всем урокам</li>
              <li class="card__advantages premium">
                Доступ к полному прогрессу
              </li>
              <li class="card__advantages premium">Отсутствие рекламы</li>
              <li class="card__advantages premium">Иконка PRO</li>
              <li class="card__advantages premium">Круглосуточная поддержка</li>
            </ul>
            <BaseButton class="card__btn"> Отправить </BaseButton>
          </div>
          <div class="premium-card business">
            <div class="card__img">
              <img src="/images/card-business.png" alt="" />
            </div>
            <h4 class="card__title">Премиум</h4>
            <p class="card__subtitle">Для тех кто хочет большего</p>
            <h4 class="card__price">$10</h4>
            <ul class="card-list">
              <li class="card__advantages business">Доступ ко всем урокам</li>
              <li class="card__advantages business">
                Доступ к полному прогрессу
              </li>
              <li class="card__advantages business">Отсутствие рекламы</li>
              <li class="card__advantages business">Иконка PRO</li>
              <li class="card__advantages not-support">Отсуствие поддержки</li>
            </ul>
            <BaseButton> Отправить </BaseButton>
          </div>
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

    &-card {
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

          &.premium {
            color: $pageColor;
          }
        }

        &__subtitle {
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 130%;

          &.premium {
            color: $pageColor;
          }
        }

        &__price {
          font-family: Raleway;
          font-size: 30px;
          font-weight: 700;
          line-height: 130%;

          &.premium {
            color: $pageColor;
          }
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

          &.premium {
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

          &.business::before {
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
            background-color: #A57F71;
            border-radius: 50%;
          }
        }
      }

      &.premium {
        transform: translateY(-5%);
        border: 2px solid #ffd9cb;
        background: $primaryColor;
        box-shadow: 0px 8px 16px 0px rgba(32, 0, 0, 0.2);

        .card__btn {
          background: #ffd9cb;
          color: $primaryColor;
        }
      }

      &.business {
        border: 2px solid $primaryColor;
        background: #ffd9cb;
      }
    }
  }
}
</style>
