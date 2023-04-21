<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { useAuthStore } from '@/stores/auth'
import type { IRegisterForm } from '@/common/types'
import StepOne from '@/components/page/register/StepOne.vue'
import StepTwo from '@/components/page/register/StepTwo.vue'
import { useRouter } from 'vue-router'
import { ROUTE } from '@/common/routes'
import { Message, Toast } from '@/plugins/toastify'
import { AUTH_ERROR_FIELD, AUTH_NON_FIELD_ERROR_STATUS, VERIFICATION_CODE_ERROR_STATUS } from '@/services/auth/auth.interface'

const { t } = useLocale()
const router = useRouter()
const authStore = useAuthStore()

const step = ref(1)
const form = reactive<IRegisterForm>({
  phone: '',
  password: '',
  passwordRepetation: '',
  code: null
})

async function submitStepOne(): Promise<void> {
  try {
    await authStore.registerStepOne({
      phone_number: form.phone
    })
    

    Toast.success(t(Message.SUCCESS.REGISTER.VERIFICATION_CODE))
    step.value++
  } catch (error) { // @ts-ignore
    const data = error.response.data

    if (data[AUTH_ERROR_FIELD.NON_FIELD_ERROR].includes(AUTH_NON_FIELD_ERROR_STATUS.USER_EXIST)) {
      Toast.error(t(Message.ERROR.REGISTER.USER_EXIST))
    }

    form.password = ''
    form.passwordRepetation = ''
  }

}

async function submitStepTwo(): Promise<void> {
  try {
    await authStore.registerStepTwo({
      phone_number: form.phone,
      password: form.password,
      code: form.code!,
    })
    
    Toast.success(t(Message.SUCCESS.REGISTER.USER_CREATED))
    router.push(ROUTE.home)
  } catch (error) {// @ts-ignore
    const data = error.response.data

    if (data[AUTH_ERROR_FIELD.VERIFICATION_CODE].includes(VERIFICATION_CODE_ERROR_STATUS.INVALID_CODE)) {
      Toast.error(t(Message.ERROR.REGISTER.INVALID_CODE))
    }

    form.code = null 
  }
}

</script>

<template>
  <div class="register auth-page">
    <div class="register-header">
      <h1 class="register-header__title" v-html="t('page.register.title')"></h1>
      <h2 class="register-header__subtitle">{{ t('page.register.subtitle') }}</h2>
    </div>

    <div class="register-body">
      <step-one v-if="step === 1" v-model="form" @form:submit="submitStepOne" />
      <step-two v-else-if="step === 2" v-model="form" @form:submit="submitStepTwo" />
    </div>
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
}
</style>