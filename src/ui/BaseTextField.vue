<script setup lang="ts">
import type { Rules } from '@/common/types';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: string 
  title: string
  outlined?: boolean,
  rules?: Rules
}>(), {
  outlined: false,
  rules: () => []
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isToched = ref(false)
const errorMessage = ref<string | null>(null)

const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

const placeholder = computed(() => {
  if (props.outlined) return ''

  return props.title
})

const label = computed(() => {
  if (!props.outlined) return ''

  return props.title
})

function onChangeHandler(event: Event): void {
  if (!isToched.value) return

  for(let i = 0; i < props.rules.length; i++) {
    const rule = props.rules[i]

    // @ts-ignore
    const error = rule(event.target.value)

    if (error) {
      errorMessage.value = error
      break
    }
    
    errorMessage.value = null
  }
}

function onBlurHandler(): void {
  isToched.value = true
}
</script> 

<template>
  <div class="base-text-field">
    <div class="field-input-wrapper">
      <div v-if="label" class="field__label">{{ label }}</div>
      <input v-model="value" class="field__input" type="text" :placeholder="placeholder" @input="onChangeHandler" @blur="onBlurHandler">
    </div>

    <div v-if="errorMessage" class="field__error">
      <slot name="error" :error="errorMessage">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>