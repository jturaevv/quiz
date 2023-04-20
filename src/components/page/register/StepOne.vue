<script setup lang="ts">
import { computed } from 'vue'
import type { IRegisterForm } from '@/common/types'
import { useLocale } from '@/composables/useLocale'
import { ROUTE } from '@/common/routes'

const { t } = useLocale()

const emit = defineEmits<{
  (e: 'update:modelValue', value: IRegisterForm): void,
  (e: 'form:submit'): void,
}>()
const props = defineProps<{
  modelValue: IRegisterForm
}>()

const form = computed({
  get() {
    return props.modelValue
  },
  set(newValue: IRegisterForm) {
    emit('update:modelValue', newValue)
  }
})

function submit() {
  emit('form:submit')
}

</script>

<template>
  <base-form class="register-form" form-id="register-form-step-one" @submit="submit">
    <base-phone-field v-model="form.phone" class="form__item phone" :title="t('form.phone')" />
    <base-password-field v-model="form.password" class="form__item password" :title="t('form.password')" />
    <base-password-field v-model="form.passwordRepetation" class="form__item password-repeatation"
      :title="t('form.passwordRepetation')" />

    <div class="form-link-wrapper">
      <router-link class="form__link" :to="ROUTE.login">{{ t('page.register.login') }}</router-link>
    </div>

    <base-button type="submit" class="form__submit">{{ t('action.register') }}</base-button>
  </base-form>
</template>

<style lang="scss" scoped>
.register-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

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