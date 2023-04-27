<script setup lang="ts">
import UserSection from '@/components/page/settings/UserSection.vue'
import type { IUserUpdateForm } from '@/services/user/user.interface'
import { useUserStore } from '@/stores/user'
import { Toast, Message } from '@/plugins/toastify'
import { useLocale } from '@/composables/useLocale'
import { ref } from 'vue'

const { t } = useLocale()
const userStore = useUserStore()

const isLoading = ref(false)

function updateUser(form: IUserUpdateForm): void {

  if (isLoading.value) return

  const formData = new FormData()

  formData.append('first_name', form.name)
  formData.append('last_name', form.surname)
  formData.append('mail', form.email)
  form.age && formData.append('age', form.age.toString())
  form.photo instanceof File && formData.append('photo', form.photo)

  isLoading.value = true

  Toast.promise(
    userStore.updateUser({
      id: userStore.user!.id,
      formData
    }),
    {
      pending: t(Message.PENDING.DEFAULT.WAITING),
      success: t(Message.SUCCESS.USER.UPDATED),
      error: t(Message.ERROR.USER.SOMETHING_WRONG)
    }
  ).finally(() => {
    isLoading.value = false
  })

}
</script>

<template>
  <div class="settings profile-page">
    <user-section @user:update="updateUser" />
  </div>
</template>