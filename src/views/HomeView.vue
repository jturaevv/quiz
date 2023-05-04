<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue'
import IntroSection from '@/components/page/home/IntroSection.vue'
import SubjectSection from '@/components/page/home/SubjectSection.vue'
import MailingSection from '@/components/page/home/MailingSection.vue'
import { useTutorialStore } from '@/stores/tutorial'

const tutorialStore = useTutorialStore()

const isLoading = reactive({
  subjects: false
})

onBeforeMount(() => {
  isLoading.subjects = true

  tutorialStore.getSubjectList()
    .finally(() => {
      isLoading.subjects = false
    })

})

</script>

<template>
  <div class="home page">
    <intro-section />
    <subject-section :loading="isLoading.subjects" :list="tutorialStore.subjects" />
    <mailing-section />
  </div>
</template>