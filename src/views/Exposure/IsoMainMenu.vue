<template>
  <router-link to="/modify_shutter">
    <div class="flex flex-col space-y-2 text-center">
      <h3>ISO</h3>
      <div>{{iso.value}}</div>
    </div>
  </router-link>
</template>

<script>
import ShutterStore from './Store'

export default {
  name: 'ShutterMainMenu',

  data() {
    return {
      iso: ShutterStore.state.iso,
    }
  },
}
</script>
