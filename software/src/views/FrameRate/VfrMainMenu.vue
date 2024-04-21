<template>
  <router-link to="/modify_frame_rate">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">VFR</h2>
      <div>{{ vfr.value }}</div>
    </div>
  </router-link>
</template>

<script>
import { useFrameRateStore } from './Store'

export default {
  name: 'VfrMainMenu',

  setup() {
    return { vfr: useFrameRateStore().vfr }
  },
}
</script>
