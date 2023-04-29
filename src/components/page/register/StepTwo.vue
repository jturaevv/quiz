<script setup lang="ts">
import { computed } from 'vue'
import type { IRegisterForm } from '@/common/types'
import { useLocale } from '@/composables/useLocale'
import { RULE } from '@/common/rules'

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
  <base-form class="register-form" form-id="register-form-step-two" @submit="submit">
    <base-number-field v-model="form.code" class="form__item code" :title="t('form.code')" :rules="RULE.required()" />

    <div class="form__actions">
      <base-button type="submit" class="form__submit">{{ t('action.register') }}</base-button>
    </div>
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

      &.code {
        margin-bottom: 15px;
      }
    }

    &__actions {
      display: flex;
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