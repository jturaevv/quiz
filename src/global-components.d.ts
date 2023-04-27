import BaseDropdown from '@/ui/BaseDropdown.vue'
import BaseButton from '@/ui/BaseButton.vue'
import BaseVideoPlayer from '@/ui/BaseVideoPlayer.vue'
import BaseInput from '@/ui/BaseInput.vue'
import BasePasswordField from '@/ui/BasePasswordField.vue'
import BasePhoneField from '@/ui/BasePhoneField.vue'
import BaseForm from '@/ui/BaseForm.vue'
import BaseNumberField from '@/ui/BaseNumberField.vue'
import BaseTextField from '@/ui/BaseTextField.vue'


declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseDropdown: typeof BaseDropdown
    BaseButton: typeof BaseButton
    BaseVideoPlayer: typeof BaseVideoPlayer
    BaseInput: typeof BaseInput
    BasePasswordField: typeof BasePasswordField
    BasePhoneField: typeof BasePhoneField
    BaseForm: typeof BaseForm
    BaseNumberField: typeof BaseNumberField
    BaseTextField: typeof BaseTextField
  }
}