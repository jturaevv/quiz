<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';

const { t } = useLocale()

const 
</script>

<template>
  <div class="login auth-page">
    <div class="login-header">
      <h1 class="login-header__title" v-html="t('page.login.title')"></h1>
      <h2 class="login-header__subtitle">{{ t('page.login.subtitle') }}</h2>
    </div>

    <form class="login-form" @submit.prevent>
      <base-text-field class="form__item phone" outlined :title="t('form.phone')" />
    </form>
  </div>
</template>

<style lang="scss">
  
</style>