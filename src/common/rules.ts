import { useLocale } from '@/composables/useLocale'
import { EMAIL_REGEX } from './constants'
import type { Rules } from './types'

export namespace RULE {
  export function required(customMessage?: string): Rules {
    const { t } = useLocale()

    return [
      (value: any) => ((typeof value === 'string' ? value.trim() : value) !== '' && value !== null && value !== undefined) || customMessage || t('validation.required')
    ]
  }

  export function email (customMessage?: string): Rules {
    const { t } = useLocale()

    return [
      (value: any) => EMAIL_REGEX.test(value) || customMessage || t('validation.email')
    ]
  }

  export function minNumber (min: number, customMessage?: string): Rules {
    const { t } = useLocale()

    return [
      (value: number) => value > min || customMessage || t('validation.minNumber', { min })
    ]
  }

  export function phone (customMessage?: string): Rules {
    const { t } = useLocale()

    return [
      (value: string) => value.length === 19 || customMessage || t('validation.phone')
    ]
  }

  export function password (min: number = 8, customMessage?: string): Rules {
    const { t } = useLocale()

    return [
      (value: string) => value.length >= min || customMessage || t('validation.password', { min })
    ]
  }

  export function passwordRepeat (password: string, customMessage?: string): Rules {
    const { t } = useLocale()

    return [
      (value: string) => value === password || customMessage || t('validation.passwordRepeat')
    ]
  }
}