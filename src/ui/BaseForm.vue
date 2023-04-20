<script setup lang="ts">
import { onBeforeUpdate, ref } from 'vue'

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'update:modelValue', value: boolean): void
}>()
const props = defineProps<{
  formId: string
}>()

const form = ref<Element | null>()

function defineFormRef(el: Element) {
  form.value = el

  return props.formId
}

function submitHandler() {
  emit('submit')
}

onBeforeUpdate(() => {
  form.value = null
})
</script>

<template>
  <form :ref="defineFormRef" @submit.prevent="submitHandler">
    <slot />
  </form>
</template>