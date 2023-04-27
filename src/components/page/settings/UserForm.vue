<script setup lang="ts">
import { computed } from 'vue'
import { RULE } from '@/common/rules'
import { useLocale } from '@/composables/useLocale'
import { useUserStore } from '@/stores/user'
import type { IUserUpdateForm } from '@/services/user/user.interface'

const { t } = useLocale()
const userStore = useUserStore()

const emit = defineEmits<{
  (e: 'update:modelValue', value: IUserUpdateForm): void
  (e: 'form:submit'): void
}>()

const props = defineProps<{
  modelValue: IUserUpdateForm
}>()

const form = computed({
  get() {
    return props.modelValue
  },
  set(newValue: IUserUpdateForm) {
    emit('update:modelValue', newValue)
  }
})

</script>

<template>
  <base-form class="user-form" form-id="user-update-form" @submit="emit('form:submit')">
    <div class="form__field-list">
      <base-text-field v-model="form.name" :title="t('form.name')" :rules="RULE.required()" />

      <base-text-field v-model="form.surname" :title="t('form.surname')" :rules="RULE.required()" />

      <base-phone-field v-model="form.phone" :title="t('form.phone')" :disabled="!!userStore.user?.phoneNumber" />

      <base-text-field v-model="form.email" :title="t('form.email')" :rules="[...RULE.required(), ...RULE.email()]" />

      <base-number-field v-model="form.age" :title="t('form.age')" :rules="[...RULE.required(), ...RULE.minNumber(0)]" />
    </div>

    <div class="form__actions">
      <base-button type="submit">{{ t('action.save') }}</base-button>
    </div>

  </base-form>
</template>

<style lang="scss">
.user-form {
  flex: 1;
  min-width: 300px;

  .form {
    &__actions {
      display: flex;
      justify-content: flex-end;
      gap: 25px;
    }
  }
}
</style>