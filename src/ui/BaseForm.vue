<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

const emit = defineEmits<{
  (e: 'submit'): void
}>()

function getChildComponents(): HTMLCollection {
  return instance!.vnode.el!.getElementsByClassName('form__element')
}

function validateChildComponents(children: HTMLCollection) {
  let isValid = true

  // @ts-ignore
  for (const child of children) {
    if (!child.__vnode.ctx.exposed.validate()) {
      isValid = false
    }
  }

  return isValid
}

function submitHandler() {
  const children = getChildComponents()
  
  if (!validateChildComponents(children)) return
  
  emit('submit')
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <slot />
  </form>
</template>