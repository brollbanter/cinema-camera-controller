<template>
  <router-link to="/modify_shutter">
    <div class="flex flex-col space-y-2 text-center">
      <h3>Shutter</h3>
      <div>{{shutter.value}}</div>
    </div>
  </router-link>
</template>

<script>
import ShutterStore from './Store'

export default {
  name: 'ShutterMainMenu',

  data() {
    return {
      shutter: ShutterStore.state.shutter,
    }
  },
}
</script>
