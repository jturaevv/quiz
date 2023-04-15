<script setup lang="ts">
import { computed } from 'vue';
import type { Rules } from '@/common/types';
import { convertFromPhoneFormat, convertToPhoneFormat } from '@/common/helpers';

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

const checkPhoneValidity = (event: KeyboardEvent) => {
  const keycode = event.which;
  
  if (event.ctrlKey && keycode === 86) {
    event.preventDefault();
  }

  if (
    !(
      !event.shiftKey &&
      (keycode === 46 ||
        keycode === 8 ||
        keycode === 9 ||
        keycode === 13 ||
        keycode === 37 ||
        keycode === 39 ||
        (keycode >= 48 && keycode <= 57) ||
        (keycode >= 96 && keycode <= 105))
    )
  ) {
    event.preventDefault();
  }
};

</script>

<template>
  <base-input v-model="value" type="text" :title="title" :outlined="outlined" :rules="rules" :color="color"
    :disabled="disabled" @keydown="checkPhoneValidity" />
</template>