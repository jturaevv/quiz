<script setup lang="ts">
import { ref, watch } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { DEFAULT_AVATAR } from '@/common/constants'

const { t } = useLocale()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | File | null): void
}>()

const props = defineProps<{
  modelValue: string | File | null
}>()

const userAvatarInput = ref<HTMLInputElement | null>(null)
const userAvatar = ref(DEFAULT_AVATAR.default)

watch(() => props.modelValue, (newValue) => {
  if (!newValue) {
    userAvatar.value = DEFAULT_AVATAR.default
    return
  }
  
  convertFileToUrl(newValue)
}, { immediate: true })

function openFolder() {
  userAvatarInput.value?.click()
}

function handleFileSelect(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]

  if (file) {
    emit('update:modelValue', file)
  }
}

function convertFileToUrl (value: string | File): void {
  if (typeof value === 'string') {
    userAvatar.value = value
    return 
  }

  if (value && value.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.readAsDataURL(value)
    reader.onload = () => {
      userAvatar.value = reader.result as string
    }
  }
}

</script>

<template>
  <div class="user-avatar">
    <div class="avatar__image">
      <img :src="userAvatar" alt="User Avatar">
    </div>

    <base-button class="avatar__btn" secondary @click="openFolder">{{ t('action.update') }}</base-button>

    <input class="avatar__input" ref="userAvatarInput" type="file" accept=".jpg, .jpeg, .png" @change="handleFileSelect">
  </div>
</template>

<style lang="scss">
.user-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;

  .avatar {
    &__image {
      --image-size: 160px;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--image-size);
      height: var(--image-size);
      min-width: var(--image-size);
      min-height: var(--image-size);
      border: 2px solid $palette-first-50;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__btn {
      margin-top: 35px;
    }

    &__input {
      visibility: hidden;
      position: absolute;
      pointer-events: none;
    }
  }
}
</style>