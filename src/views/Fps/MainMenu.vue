<template>
  <router-link to="/modify_fps" class="bg-gray-800 py-4 px-4 rounded">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">FPS</h2>
      <div>{{ fps.value }}</div>
    </div>
  </router-link>
</template>

<script>
import FpsStore from './Store'

export default {
  name: 'FpsMainMenu',

  data() {
    return {
      fps: FpsStore.state,
    }
  },
}
</script>
