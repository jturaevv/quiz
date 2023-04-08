<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="about-video">
    <div class="container">
      <div class="video-wrapper">
        <div class="video__title" v-html="t('page.about.video.title')" />

        <base-video-player
          src="/video/demo-video.mp4"
          poster="images/video-poster.png"
          controls
          :volume="0.6"
          type="video/mp4"
        />     
      </div>
    </div>
  </section>
</template>