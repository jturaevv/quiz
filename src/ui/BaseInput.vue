<script setup lang="ts">
import type { Rules } from '@/common/types'
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string | number | null;
    title: string;
    outlined?: boolean;
    rules?: Rules;
    disabled?: boolean;
    color?: string;
    type: string;
  }>(),
  {
    outlined: false,
    rules: () => [],
    disabled: false,
    color: '#C0D2D3',
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void;
}>()

const isToched = ref(false)
const isFocused = ref(false)
const errorMessage = ref<string | null>(null)

const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})

const placeholder = computed(() => {
  if (!props.outlined) return ''

  return props.title
})

const label = computed(() => {
  if (props.outlined) return ''

  return props.title
})

function onChangeHandler(): void {
  if (!isToched.value) return

  validate()
}

function validate() {
  errorMessage.value = ''

  if (!isToched.value) isToched.value = true

  for (let rule of props.rules) {
    const error = rule(value.value)

    if (error !== true) {
      errorMessage.value = error
      return false
    }
  }

  return true
}

function onFocusHandler(): void {
  isFocused.value = true
}

function onBlurHandler(): void {
  isToched.value = true
  isFocused.value = false
}

defineExpose({ validate })
</script>

<template>
  <div
    :class="[
      'base-field form__element',
      {
        error: errorMessage,
        focused: isFocused,
        disabled: disabled,
        filled: value,
      },
    ]"
    :style="{ color }"
  >
    <div class="field-input-wrapper">
      <div v-if="label" class="field__label">{{ label }}</div>
      <input
        v-model="value"
        class="field__input"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="onChangeHandler"
        @focus="onFocusHandler"
        @blur="onBlurHandler"
      />
    </div>

    <div v-if="errorMessage" class="field__error">
      <slot name="error" :error="errorMessage">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.base-field {
  --padding-x: 12px;
  --padding-y: 6px;

  display: flex;
  flex-direction: column;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  padding: 24px 0;

  &.focused {
    color: $fontColor !important;
  }

  &.filled,
  &.focused {
    .field {
      &__label {
        top: 0;
        font-size: 14px;
        color: $fontColor;
        transform: translateY(-100%);
      }
    }
  }

  &.error {
    color: rgb(235, 51, 51) !important;

    .field {
      &-input-wrapper {
        animation: $errorAnimation;
      }
    }
  }

  &.disabled {
    .field {
      &__input {
        cursor: not-allowed;
      }
    }
  }

  .field {
    &-input-wrapper {
      position: relative;
      display: flex;
    }

    &__label {
      position: absolute;
      top: 50%;
      left: var(--padding-x);
      transition: 0.2s ease;
      transform: translateY(-50%);
      pointer-events: none;
    }

    &__input {
      flex: 1;
      padding-top: var(--padding-y);
      padding-right: var(--padding-x);
      padding-bottom: var(--padding-y);
      padding-left: var(--padding-x);
      font-family: "Inter";
      font-weight: 500;
      font-size: 14px;
      color: currentColor;
      background: none;
      border: none;
      border-bottom: 2px solid;
      outline: none;
      transition: 0.2s ease;

      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type="number"] {
        appearance: textfield;
      }
    }

    &__error {
      font-family: "Inter";
      font-size: 11px;
      font-weight: 600;
      line-height: 1.5;
      padding-top: 5px;
      padding-right: var(--padding-x);
      padding-left: var(--padding-x);
    }
  }
}
</style>
