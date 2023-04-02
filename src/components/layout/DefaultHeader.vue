<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';
import MainLogo from '@/components/layout/MainLogo.vue'
import { NAVIGATION_LINKS } from '@/services/constants/common'
import { useLocale } from '@/composables/useLocale'
import LocaleSwitcher from '@/components/layout/LocaleSwitcher.vue'
import UserInfo from '@/components/layout/UserInfo.vue'

const { t } = useLocale()

const isScrolled = ref(false)

function scrollHandler() {
  const { top } = document.body.getBoundingClientRect()

  isScrolled.value = top < -10 
}

onBeforeMount(() => {
  document.addEventListener('scroll', scrollHandler)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <header :class="['main-header', { active: isScrolled }]">
    <div class="container">
      <div class="header-wrapper">
        <main-logo class="header__logo" />

        <nav class="header-navigation">
          <template v-for="link in NAVIGATION_LINKS" :key="link">
            <router-link class="header-navigation__link" active-class="active" :to="link.path">
              {{ t(link.name) }}
            </router-link>
          </template>
        </nav>

        <div class="header-action">
          <locale-switcher class="header-action__switcher" />
          <user-info class="header-action__user-info" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.main-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 15px 0;
  transition: 0.2s ease-in-out;
  z-index: 100;

  &.active {
    background: white;
    box-shadow: 0 10px 15px rgba($color: #000000, $alpha: 0.1);
  }

  .header {
    &-wrapper {
      display: flex;
      gap: 100px;
    }

    &-navigation {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      gap: 50px;

      @include breakpoint(md) {
        display: none;
      }

      &__link {
        font-family: 'Inter';
        font-weight: 600;
        line-height: 130%;
        text-transform: uppercase;
        transition: 0.2s;

        &.active,
        &:hover {
          color: $primaryColor;
        }
      }
    }

    &-action {
      display: flex;
      align-items: center;
      gap: 30px;

      &__switcher {
        @include breakpoint(md) {
          display: none;
        }
      }

      &__user-info {
        @include breakpoint(md) {
          display: none;
        }
      }
    }
  }
}
</style>