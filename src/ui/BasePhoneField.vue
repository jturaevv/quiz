<script setup lang="ts">
import { computed } from 'vue'
import type { Rules } from '@/common/types'
import { convertFromPhoneFormat, convertToPhoneFormat } from '@/common/helpers'


const props = withDefaults(defineProps<{
  modelValue: string
  title: string
  outlined?: boolean
  rules?: Rules
  disabled?: boolean
  color?: string
}>(), {
  outlined: false,
  rules: () => [],
  disabled: false,
  color: '#C0D2D3'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  get() {
    return convertToPhoneFormat(props.modelValue)
  },
  set(newValue) {
    emit('update:modelValue', convertFromPhoneFormat(newValue))
  }
})

const handlePhoneInput = (event: KeyboardEvent) => {
  const keyCode = event.which

  if (event.ctrlKey && keyCode === 86) {
    event.preventDefault()
  }

  const allowedKeyCodes = [
    46, // delete
    8, // backspace
    9, // tab
    13, // enter
    37, // arrow left
    39, // arrow right
    ...Array.from({ length: 10 }, (_, i) => i + 48), // digits 0-9
    ...Array.from({ length: 10 }, (_, i) => i + 96) // numpad digits 0-9
  ]

  if (!allowedKeyCodes.includes(keyCode)) {
    event.preventDefault()
  }
}


</script>

<template>
  <base-input v-model="value" type="text" :title="title" :outlined="outlined" :rules="rules" :color="color"
    :disabled="disabled" @keydown="handlePhoneInput" />
</template>