import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { AVAILABLE_LOCALE } from '@/common/constants'

export const useLocale = () => {
  const { t, locale, availableLocales } = useI18n()

  const setLocale = (lang: AVAILABLE_LOCALE) => {
    locale.value = lang
    localStorage.setItem('locale', lang)
  }

  const currentLocale = computed((): AVAILABLE_LOCALE => {
    return locale.value as AVAILABLE_LOCALE
  })
  
  return {
    t,
    setLocale,
    availableLocales,
    currentLocale
  }
}