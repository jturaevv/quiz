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
    :src="src"
    :poster="poster"
    controls
    :volume="volume"
    :type="type"
  /> 
</template>

<style src="video.js/dist/video-js.css"></style>
<style lang="scss">
  
</style>