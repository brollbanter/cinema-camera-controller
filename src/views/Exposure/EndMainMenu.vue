<template>
  <router-link to="/modify_shutter">
    <div class="flex flex-col space-y-2 text-center">
      <h3 class="font-bold text-xl">eND</h3>
      <div>{{end.value}}</div>
    </div>
  </router-link>
</template>

<script>
import ShutterStore from './Store'

export default {
  name: 'EndMainMenu',

  data() {
    return {
      end: ShutterStore.state.end,
    }
  },
}
</script>
