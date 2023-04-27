import { toast, type ToastOptions, type ToastPromiseParams } from 'vue3-toastify'
import { TOAST_MESSAGE } from './types'

const DEFAULT_OPTIONS: ToastOptions = {
  pauseOnHover: true,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  progress: undefined,
  transition: 'bounce',
  theme: 'light',
}

export namespace Toast {
  export const info = (message: string, options: ToastOptions = {}) => {
    toast.info(message, {
      ...options,
      ...DEFAULT_OPTIONS,
    })
  }

  export const success = (message: string, options: ToastOptions = {}) => {
    toast.success(message, {
      ...options,
      ...DEFAULT_OPTIONS,
    })
  }

  export const error = (message: string, options: ToastOptions = {}) => {
    toast.error(message, {
      ...options,
      ...DEFAULT_OPTIONS,
    })
  }

  export const warn = (message: string, options: ToastOptions = {}) => {
    toast.warn(message, {
      ...options,
      ...DEFAULT_OPTIONS,
    })
  }

  export const promise = async (request: Promise<any>, messageParams: ToastPromiseParams, options: ToastOptions = {}) => {
    return await toast.promise(
      request,
      messageParams, 
      {
        ...options,
        ...DEFAULT_OPTIONS,
      }
    )
  }
}

export const Message = TOAST_MESSAGE