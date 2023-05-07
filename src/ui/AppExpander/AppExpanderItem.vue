<script lang="ts" setup>
import { ref, defineEmits, defineProps } from 'vue'
import SlideInOutAnimation from '../SlideInOutAnimation/SlideInOutAnimation.vue'

const emit = defineEmits(['change'])
const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
})

const show = ref(false)

const toggle = () => {
  show.value = !show.value
  emit('change', show.value)
}

const reset = () => {
  show.value = false
  emit('change', show.value)
}
</script>

<template>
  <div class="app-expander-item">
    <div class="app-expander-item__header">
      <slot name="title">
        {{ props.title }}
      </slot>
      <div
        class="app-expander-item__icon"
        tabindex="0"
        :data-value="props.value"
      >
        <svg
          v-if="!show"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0002 23.6666C11.5279 23.6666 11.1324 23.5066 10.8135 23.1866C10.4935 22.8677 10.3335 22.4721 10.3335 21.9999V13.6666H2.00016C1.52794 13.6666 1.13183 13.5066 0.81183 13.1866C0.492941 12.8677 0.333496 12.4721 0.333496 11.9999C0.333496 11.5277 0.492941 11.1316 0.81183 10.8116C1.13183 10.4927 1.52794 10.3333 2.00016 10.3333H10.3335V1.99992C10.3335 1.5277 10.4935 1.13159 10.8135 0.811586C11.1324 0.492697 11.5279 0.333252 12.0002 0.333252C12.4724 0.333252 12.8685 0.492697 13.1885 0.811586C13.5074 1.13159 13.6668 1.5277 13.6668 1.99992V10.3333H22.0002C22.4724 10.3333 22.8679 10.4927 23.1868 10.8116C23.5068 11.1316 23.6668 11.5277 23.6668 11.9999C23.6668 12.4721 23.5068 12.8677 23.1868 13.1866C22.8679 13.5066 22.4724 13.6666 22.0002 13.6666H13.6668V21.9999C13.6668 22.4721 13.5074 22.8677 13.1885 23.1866C12.8685 23.5066 12.4724 23.6666 12.0002 23.6666Z"
            fill="white"
          />
        </svg>

        <svg
          v-else
          width="24"
          height="4"
          viewBox="0 0 24 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0002 3.66341H2.00016C1.55814 3.66341 1.13421 3.48782 0.821652 3.17526C0.509091 2.86269 0.333496 2.43877 0.333496 1.99674C0.333496 1.55472 0.509091 1.13079 0.821652 0.818234C1.13421 0.505673 1.55814 0.330078 2.00016 0.330078H22.0002C22.4422 0.330078 22.8661 0.505673 23.1787 0.818234C23.4912 1.13079 23.6668 1.55472 23.6668 1.99674C23.6668 2.43877 23.4912 2.86269 23.1787 3.17526C22.8661 3.48782 22.4422 3.66341 22.0002 3.66341Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <slide-in-out-animation v-model="show">
      <div class="app-expander-item__body">
        <slot name="body" />
      </div>
    </slide-in-out-animation>
  </div>
</template>

<style lang="scss" src="./AppExpanderItem.scss"></style>
