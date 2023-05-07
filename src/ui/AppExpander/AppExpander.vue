<script lang="ts" setup>
import { ref, defineProps, VueElement, onMounted, type PropType} from 'vue'
import type AppExpanderItem from './AppExpanderItem.vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Array as PropType<string[]>,
    required: true
  },
  multiple: {
    type: Boolean,
    default: false
  }
})

const accordion = ref<VueElement>()
const children: typeof AppExpanderItem[] = []
let activeList: string[] = [...props.modelValue]

const handler = (event: Event): void => {
  const target = event.target as VueElement
    
  if (!target.classList.contains('app-expander-item__icon')) return
  const dataValue = target.dataset.value as string

  if (defineChildStatus(dataValue)) {
    toggleChild(target, dataValue, false)
    return
  }
    
  if (!props.multiple) {
    resetChild() 
  }
    
  toggleChild(target, dataValue) 
}

const toggleChild = (target: VueElement, dataValue: string, status: boolean = true): void => {
  activeList = [...activeList, dataValue].filter(value => {
    if (status) return true

    return value !== dataValue
  })

  // @ts-ignore
  target.__vueParentComponent.devtoolsRawSetupState.toggle()
  emit('update:modelValue', activeList)
}

const resetChild = (): void => {
  activeList = []
  children.forEach((({ show, reset }) => {
    if (show) reset()
  }))
}

const defineChildStatus = (value: string) => {
  return props.modelValue.includes(value)
}

onMounted(() => {
  if (accordion?.value?.children) {
    for (const child of accordion.value.children) { // @ts-ignore
      children.push(child.__vnode.ctx.devtoolsRawSetupState)
    }
  }
})
</script>

<template>
  <div ref="accordion" class="app-expander" @click="handler">
    <slot />
  </div>
</template>

<style lang="scss" src="./AppExpander.scss"></style>