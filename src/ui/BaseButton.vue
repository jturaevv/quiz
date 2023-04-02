<script setup lang="ts">

withDefaults(defineProps<{
  secondary?: boolean
  disabled?: boolean
}>(), {
  secondary: false,
  disabled: false,
})

</script>

<template>
  <button :class="['base-button', { secondary }]" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss">
.base-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: $primaryColor;
  border: 2px solid $primaryColor;
  border-radius: 10px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: white;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &.secondary {
    background: transparent;
    color: $primaryColor;
  }
}
</style>