<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { useUserStore } from '@/stores/user'
import type { IUser, IUserUpdateForm } from '@/services/user/user.interface'
import UserAvatar from '@/components/page/settings/UserAvatar.vue'
import UserForm from '@/components/page/settings/UserForm.vue'

const { t } = useLocale()
const userStore = useUserStore()

const emit = defineEmits<{
  (e: 'user:update', form: IUserUpdateForm): void
}>()

const form = reactive<IUserUpdateForm>({
  name: '',
  surname: '',
  phone: '',
  email: '',
  age: null,
  photo: null,
})

watch(() => userStore.user!, (newValue: IUser) => {
  init(newValue)
}, { immediate: true })

function submitHandler() {
  emit('user:update', form)
}

function init(newValue: IUser): void {
  form.name = newValue.firstName
  form.surname = newValue.lastName
  form.phone = newValue.phoneNumber
  form.email = newValue.mail
  form.age = newValue.age
  form.photo = newValue.photo
}
</script>

<template>
  <section class="user-section">
    <h2 class="section__title">{{ t('page.settings.user.title') }}</h2>

    <div class="section-body">
      <user-avatar v-model="form.photo" />

      <user-form v-model="form" @form:submit="submitHandler" />
    </div>

  </section>
</template>

<style lang="scss">
.user-section {
  .section {
    &__title {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 20px;
    }

    &-body {
      display: flex;
      width: fit-content;
      padding: 60px 100px;
      background: #FFFFFF;
      border-radius: 10px;
    }
  }
}
</style>