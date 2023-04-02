<script setup lang="ts">

withDefaults(defineProps<{
  list?: any[]
  itemLabel?: string
  title?: string
}>(), {
  list: () => [],
  itemLabel: 'label',
  title: ''
})

</script>

<template>
  <div class="base-dropdown" tabindex="0">
    <div class="dropdown-header">
      <slot name="header">{{ title }}</slot>
    </div>

    <div class="dropdown-body">
      <slot>
        <template v-for="item, index in list" :key="index">
          <div class="dropdown__item">
            <slot name="item-content" :item="item" :index="index">{{ item[itemLabel] }}</slot>
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.base-dropdown {
  position: relative;
  display: flex;

  .dropdown {
    &-header {
      display: flex;
    }
  }
}
</style>