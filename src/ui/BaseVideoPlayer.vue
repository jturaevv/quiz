<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'

withDefaults(defineProps<{
  src: string,
  type: string,
  poster?: string,
  controls?: boolean,
  volume?: number,
}>(), {
  controls: false,
  volume: 1,
  poster: 'images/video-poster.png'
})
</script>

<template>
  <video-player
    class="base-video-player"
    :src="src"
    :poster="poster"
    :volume="volume"
    :type="type"
    controls
  >
    <slot />
  </video-player> 
</template>

<style src="video.js/dist/video-js.css"></style>
<style lang="scss">
.base-video-player {
  border: 2px solid $palette-fourth-40;
  border-radius: 10px;
  overflow: hidden;

  .vjs-poster img {
    background: $secondaryColor;
  }
}
</style>