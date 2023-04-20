<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
import { reactive } from 'vue'
import { ROUTE } from '@/common/routes'
import { useAuthStore } from '@/stores/auth'
import type { ILoginForm } from '@/common/types'
import { useRouter } from 'vue-router'
import { Toast, Message } from '@/plugins/toastify'

const { t } = useLocale()
const authStore = useAuthStore()
const router = useRouter()

const form = reactive<ILoginForm>({
  phone: '',
  password: ''
})

async function submitHandler() {
  try {
    await authStore.login({
      phone_number: form.phone,
      password: form.password,
    })

    router.push(ROUTE.home)
  } catch (error) {
    Toast.error(t(Message.NOT_VALID_CREDENTIALS))
  }

}

</script>

<template>
  <div class="login auth-page">
    <div class="login-header">
      <h1 class="login-header__title" v-html="t('page.login.title')"></h1>
      <h2 class="login-header__subtitle">{{ t('page.login.subtitle') }}</h2>
    </div>

    <base-form class="login-form" form-id="login-form" @submit="submitHandler">
      <base-phone-field v-model="form.phone" class="form__item phone" :title="t('form.phone')" />
      <base-password-field v-model="form.password" class="form__item password" :title="t('form.password')" />

      <div class="form-link-wrapper">
        <router-link class="form__link" :to="ROUTE.register">{{ t('page.login.register') }}</router-link>
        <router-link class="form__link" to="">{{ t('page.login.forgotPassword') }}</router-link>
      </div>

      <base-button class="form__submit" type="submit">{{ t('action.login') }}</base-button>
    </base-form>
  </div>
</template>

<style lang="scss">
.login {
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

      span {
        color: $primaryColor;
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

      &.phone {
        margin-bottom: 15px;
      }
    }

    &-link-wrapper {
      display: flex;
      justify-content: space-between;
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