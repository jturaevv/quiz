import { createI18n } from 'vue-i18n'
import ru from './locales/ru.json'
import en from './locales/en.json'
import uz from './locales/uz.json'
import { AVAILABLE_LOCALE, DEFAULT_LOCALE, STORAGE } from '@/common/constants'
import { useLocalStorage } from '@/composables/useLocalStorage'

const storageLocale = useLocalStorage<string>(STORAGE.LOCALE, DEFAULT_LOCALE)
let locale = storageLocale.value

if (storageLocale.value && Object.keys(AVAILABLE_LOCALE).includes(storageLocale.value)) {
  locale = storageLocale.value
}

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: DEFAULT_LOCALE,
  allowComposition: true,
  messages: {
    ru,
    en,
    uz
  }
})

export default i18n