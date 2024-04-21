<template>
  <router-link to="/modify_resolution">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">Resolution</h2>
      <div>{{ resolution.value }}</div>
    </div>
  </router-link>
</template>

<script>
import { useResolutionStore } from './Store'

export default {
  name: 'ResolutionMainMenu',

  setup() {
    return { resolution: useResolutionStore() }
  },
}
</script>
