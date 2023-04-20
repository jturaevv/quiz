import { ref, watch } from 'vue'

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const init = localStorage.getItem(key)
  const variable = ref<T>(init ? JSON.parse(init) : defaultValue)
  
  watch(
    () => variable.value, 
    (to: any) => {
        localStorage.setItem(key, JSON.stringify(to))
    }, 
    { deep: true }
  )

  return variable
}