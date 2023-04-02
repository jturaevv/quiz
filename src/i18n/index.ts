import { createI18n } from 'vue-i18n'
import ru from './locales/ru.json'
import en from './locales/en.json'
import uz from './locales/uz.json'
import { AVAILABLE_LOCALE } from '@/services/constants/common'

let locale = 'ru' 
const storageLocale = localStorage.getItem('locale')

if (storageLocale && Object.keys(AVAILABLE_LOCALE).includes(storageLocale)) {
  locale = storageLocale
}

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'ru',
  allowComposition: true,
  messages: {
    ru,
    en,
    uz
  }
})

export default i18n