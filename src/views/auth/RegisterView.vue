<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { reactive } from 'vue';
import { ROUTE } from '@/common/routes'

const { t } = useLocale()

const form = reactive({
  phone: '',
  password: '',
  passwordRepetation: ''
})

</script>

<template>
  <div class="register auth-page">
    <div class="register-header">
      <h1 class="register-header__title" v-html="t('page.register.title')"></h1>
      <h2 class="register-header__subtitle">{{ t('page.register.subtitle') }}</h2>
    </div>

    <form class="register-form" @submit.prevent>
      <base-phone-field v-model="form.phone" class="form__item phone" :title="t('form.phone')" />
      <base-password-field v-model="form.password" class="form__item password" :title="t('form.password')" />
      <base-password-field v-model="form.passwordRepetation" class="form__item password-repeatation" :title="t('form.passwordRepetation')" />

      <div class="form-link-wrapper">
        <router-link class="form__link" :to="ROUTE.login">{{ t('page.register.login') }}</router-link>
      </div>

      <base-button class="form__submit">{{ t('action.register') }}</base-button>
    </form>
  </div>
</template>

<style lang="scss">
.register {
  display: flex;
  flex-direction: column;
  max-width: 350px;

  &-header {
    margin-bottom: 40px;

    @include breakpoint(xs) {
      margin-bottom: 24px;
    }

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 1.3;
      color: $primaryColor;
      margin-bottom: 20px;
      text-align: center;

      @include breakpoint(sm) {
        font-size: 32px;
      }

      @include breakpoint(xs) {
        font-size: 28px;
      }

      @include breakpoint(xxs) {
        font-size: 22px;
      }
    }

    &__subtitle {
      font-family: 'Inter';
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.3;
    }
  }

  &-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .form {
    &__item {
      flex: 1;

      &.phone,
      &.password {
        margin-bottom: 15px;
      }
    }

    &-link-wrapper {
      display: flex;
      justify-content: flex-end;
      gap: 5px;
    }

    &__link {
      font-family: 'Inter';
      font-weight: 500;
      font-size: 14px;
      line-height: 1.3;
      text-decoration-line: underline;
    }

    &__submit {
      margin-top: 40px;

      @include breakpoint(xs) {
        margin-top: 24px;
      }
    }
  }
}
</style>