<script setup lang="ts">
import MainLogo from '@/components/layout/MainLogo.vue'
import { NAVIGATION_LINKS } from '@/common/constants.js'
import { useLocale } from '@/composables/useLocale'
import LocaleSwitcher from '@/components/layout/LocaleSwitcher.vue'
import UserInfo from '@/components/layout/UserInfo.vue'

const { t } = useLocale()
</script>

<template>
  <header class="wide-header">
    <div class="header-wrapper">
      <main-logo class="header__logo" />

      <nav class="header-navigation">
        <template v-for="link in NAVIGATION_LINKS" :key="link">
          <router-link class="header-navigation__link" exact-active-class="active" :to="link.path">
            {{ t(link.name) }}
          </router-link>
        </template>
      </nav>

      <div class="header-action">
        <locale-switcher class="header-action__switcher" />
        <user-info class="header-action__user-info" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.wide-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 15px 50px;
  background: white;
  box-shadow: 0 10px 15px rgba($color: #000000, $alpha: 0.1);
  transition: 0.2s ease-in-out;
  z-index: 100;

  @include breakpoint(md) {
    padding: 10px 0;
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