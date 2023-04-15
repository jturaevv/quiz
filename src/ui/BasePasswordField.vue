<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Rules } from '@/common/types';

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
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

const type = ref<'password' | 'text'>('password')

</script>

<template>
  <base-input v-model="value" :type="type" :title="title" :outlined="outlined" :rules="rules" :color="color"
    :disabled="disabled" />
</template>