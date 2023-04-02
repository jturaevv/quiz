<script setup lang="ts">
import { computed, ref } from 'vue';
import { useLocale } from '@/composables/useLocale';
import type { AVAILABLE_LOCALE } from '@/services/constants/common';

const { currentLocale, t, availableLocales, setLocale } = useLocale()

const switcher = ref()
const list = computed(() => availableLocales.filter((locale) => locale !== currentLocale.value) as AVAILABLE_LOCALE[])

function clickHandler(status: boolean) {
  if (!switcher.value) return
  
  if (status) {
    switcher.value.focus()
  } else {
    switcher.value.blur()
  }
}

function updateLocale(locale: AVAILABLE_LOCALE) {
  setLocale(locale)
  clickHandler(false)
}

</script>

<template>
  <div ref="switcher" class="locale-switcher" tabindex="0">
    <div class="switcher-wrapper">
      <svg class="switcher__icon" key="locale-switcher-icon">
        <use xlink:href="@/assets/icons/sprite.svg#arrow-icon" />
      </svg>
  
      <div class="switcher-locales" key="locale-switcher-list">
        <div class="switcher-locales__item current-locale">{{ t(`locales.${currentLocale}.short`) }}</div>
        <template v-for="locale in list" :key="locale">
          <div class="switcher-locales__item" @click="updateLocale(locale)">{{ t(`locales.${locale}.short`) }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.locale-switcher {
  min-height: 40px;
  max-height: 40px;
  min-width: 100px;
  
  &:hover,
  &:focus {
    .switcher-wrapper {
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
      background: white;
    }
  }

  &:focus {
    .switcher-locales__item {
      display: block;
    }

    .switcher__icon {
      rotate: -180deg;
    }
  }

  .switcher {
    &-wrapper {
      display: flex;
      padding: 10px;
      border-radius: 10px;
      transition: 0.2s ease-in-out box-shadow;
      cursor: pointer;

    }

    &__icon {
      width: 20px;
      height: 15px;
      margin: 3px 10px 3px 0;
      transition: 0.2s;
    }

    &-locales {
      display: flex;
      flex-direction: column;
      gap: 8px;

      &__item {
        display: none;
        font-family: 'Inter';
        font-weight: 600;
        line-height: 130%;
        text-transform: uppercase;

        &:hover {
          color: $primaryColor;
        }
        
        &.current-locale {
          display: block;
          color: $fontColor;
        }
      }
    }
  }
}
</style>