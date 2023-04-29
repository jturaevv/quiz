<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { DEFAULT_AVATAR } from '@/common/constants.js'
import { ROUTE } from '@/common/routes'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const { t } = useLocale()
const router = useRouter()
const userStore = useUserStore()

const userAvatar = computed(() => {
  if (userStore.user?.photo) return userStore.user.photo

  return DEFAULT_AVATAR.default
})
const isAuthorized = computed(() => !!userStore.user)

</script>

<template>
  <div class="user-info">
    <div v-if="isAuthorized" class="user-avatar" @click="router.push(ROUTE.profileIndex)">
      <img :src="userAvatar" alt="User avatar" class="user-avatar__img">
    </div>

    <base-button v-else @click="router.push(ROUTE.login)">{{ t('action.signIn') }}</base-button>
  </div>
</template>

<style lang="scss">
  .user-info {
    .user {
      &-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        min-width: 60px;
        min-height: 60px;
        border: 2px solid $primaryColor;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;

        &__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>