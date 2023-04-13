<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section class="about-media">
    <div class="container">
      <div class="media-wrapper">
        <div class="media__title" v-html="t('page.about.media.title')" />

        <base-video-player
          class="media__video"
          src="video/demo-video.mp4"
          poster="images/video-poster.png"
          controls
          :volume="0.6"
          type="video/mp4"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-media {
  padding: 40px 0 80px;
  background: $palette-third-55;
  
  @include breakpoint(sm) {
    padding: 20px 0 40px;
  }

  .media {
    &-wrapper {
      display: flex;
      flex-direction: column;  
    }

    &__title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 60px;

      @include breakpoint(md) {
        font-size: 38px;
      }

      @include breakpoint(sm) {
        font-size: 28px;
        margin-bottom: 40px;
      }

      @include breakpoint(xs) {
        font-size: 24px;
      }

      @include breakpoint(xxs) {
        font-size: 20px;
      }

      span {
        color: $primaryColor;
      }
    }

    &__video {
      align-self: center;
      max-width: 820px;
      max-height: 500px;

      @include breakpoint(md) {
        max-width: 100%;
        max-height: auto;
        width: 100%;
      }

      @include breakpoint(sm) {
        height: 400px;
      }

      @include breakpoint(xs) {
        height: 300px;
      }

      @include breakpoint(xxs) {
        height: 250px;
      }
    }
  }
}
</style>