<template>
  <router-link to="/modify_frame_rate">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">FPS</h2>
      <div>{{ fps.value }}</div>
    </div>
  </router-link>
</template>

<script>
import { useFrameRateStore } from './Store'

export default {
  name: 'FpsMainMenu',

  setup() {
    return { fps: useFrameRateStore().fps }
  },
}
</script>
