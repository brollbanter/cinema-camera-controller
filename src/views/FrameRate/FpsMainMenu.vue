<template>
  <router-link to="/modify_frame_rate">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">FPS</h2>
      <div>{{ fps.value }}</div>
    </div>
  </router-link>
</template>

<script>
import FrameRateStore from './Store'

export default {
  name: 'FpsMainMenu',

  data() {
    return {
      fps: FrameRateStore.state.fps,
    }
  },

  beforeMount() {
    FrameRateStore.initialize()
  },
}
</script>
