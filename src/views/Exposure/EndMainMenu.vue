<template>
  <router-link to="/modify_shutter">
    <div class="flex flex-col space-y-2 text-center">
      <h3 class="font-bold text-xl">eND</h3>
      <div>{{end.value}}</div>
    </div>
  </router-link>
</template>

<script>
import { useShutterStore } from './Store'

export default {
  name: 'EndMainMenu',

  setup() {
    return { end: useShutterStore().end }
  },
}
</script>
