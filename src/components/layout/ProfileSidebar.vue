<script setup lang="ts">
import { computed } from 'vue'
import { DEFAULT_AVATAR } from '@/common/constants'
import { useLocale } from '@/composables/useLocale'
import { useUserStore } from '@/stores/user'
import { PROFILE_LINKS } from '@/common/constants'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { ROUTE } from '@/common/routes'

const { t } = useLocale()
const userStore = useUserStore()
const authStore = useAuthStore()
const router = useRouter()

const SPRITE = await import('@/assets/icons/sprite.svg')

const user = computed(() => {
  return userStore.user
})

const userAvatar = computed(() => {
  if (!user.value?.photo) return DEFAULT_AVATAR.default

  return user.value.photo
})

function defineLinkIcon(path: string): string {
  return `${SPRITE}#${path}`
}

function logout(): void {
  router.push(ROUTE.defaultIndex)
  authStore.logout()
}

</script>

<template>
  <div class="profile-sidebar">
    <div class="sidebar-user">
      <div class="sidebar-user__image">
        <img :src="userAvatar" alt="User avatar">
      </div>

      <h3 class="sidebar-user__content">
        <span v-if="user?.firstName">{{ t('page.profile.greeting.exist', { name: user.firstName }) }}</span>
        <span v-else>{{ t('page.profile.greeting.notExist') }}</span>
      </h3>
    </div>

    <div class="sidebar-link-list">
      <template v-for="link in PROFILE_LINKS" :key="link.path">
        <router-link class="sidebar__link" :to="link.path" exact-active-class="active" exact>
          <svg class="sidebar__link-icon">
            <use :href="defineLinkIcon(link.icon)" />
          </svg>
  
          <div class="sidebar__link-text">{{ t(link.name) }}</div>
        </router-link>
      </template>

      <div class="sidebar__link logout" @click="logout">
        <svg class="sidebar__link-icon">
          <use :href="defineLinkIcon('logout-icon')" />
        </svg>

        <div class="sidebar__link-text">{{ t('action.logout') }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.profile-sidebar {
  display: flex;
  flex-direction: column;
  background: $palette-third-60;
  border-radius: 0px 20px 20px 0px;
  padding: 24px 35px;
  overflow: hidden auto;


  .sidebar {
    &-user {
      --box-size: 200px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: var(--box-size);
      height: var(--box-size);
      min-height: var(--box-size);
      min-width: var(--box-size);
      margin-bottom: 20px;
      background-image: url('@/assets/images/profile/profile_bg.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      &__image {
        --image-size: 80px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--image-size);
        height: var(--image-size);
        min-width: var(--image-size);
        min-height: var(--image-size);
        border: 2px solid $palette-first-50;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__content {
        font-weight: 700;
        font-size: 18px;
        line-height: 1.15;
        text-align: center;
        color: $primaryColor;
        margin-top: 20px;
      }
    }

    &-link-list {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 15px;
    }

    &__link {
      display: flex;
      align-items: center;
      padding: 5px;
      color: $palette-second-60;
      cursor: pointer;
      transition: 0.2s;

      &.active,
      &:hover {
        color: $primaryColor;
      }

      &.logout {
        margin-top: auto;
      }

      &-icon {
        width: 30px;
        height: 30px;
        margin-right: 20px;
      }

      &-text {
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
}
</style>