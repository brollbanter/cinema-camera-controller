<template>
  <router-link to="/modify_shutter">
    <div class="flex flex-col space-y-2 text-center">
      <h3 class="font-bold text-xl">F/</h3>
      <div>{{iris.value}}</div>
    </div>
  </router-link>
</template>

<script>
import ShutterStore from './Store'

export default {
  name: 'ShutterMainMenu',

  data() {
    return {
      iris: ShutterStore.state.iris,
    }
  },
}
</script>
