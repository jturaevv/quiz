import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { DEFAULT_LOCALE, STORAGE, type AVAILABLE_LOCALE } from '@/common/constants'
import { useLocalStorage } from '@/composables/useLocalStorage'

export const useLocale = () => {
  const { t, locale, availableLocales } = useI18n()
  const storageLocale = useLocalStorage<string>(STORAGE.LOCALE, DEFAULT_LOCALE)

  const setLocale = (lang: AVAILABLE_LOCALE) => {
    locale.value = lang
    storageLocale.value = lang
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