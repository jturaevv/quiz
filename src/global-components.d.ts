import BaseDropdown from '@/ui/BaseDropdown.vue'
import BaseButton from '@/ui/BaseButton.vue'
import BaseVideoPlayer from '@/ui/BaseVideoPlayer.vue'
import BaseTextField from '@/ui/BaseTextField.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseDropdown: typeof BaseDropdown
    BaseButton: typeof BaseButton
    BaseVideoPlayer: typeof BaseVideoPlayer
    BaseTextField: typeof BaseTextField
  }
}