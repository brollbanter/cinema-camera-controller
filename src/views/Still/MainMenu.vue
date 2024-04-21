<template>
  <div v-on:click="stillCapture()" class="flex flex-col space-y-2 text-center">
    <h2 class="font-bold text-xl">Shutter Release</h2>
    <div>{{ store.count }}</div>
  </div>
</template>

<script>
import Camera from '../../lib/Camera'
import { useStillStore } from './Store'

export default {
  name: 'ShutterRelease',

  setup() {
    return { store: useStillStore() }
  },

  methods: {
    stillCapture() {
      Camera.ctrl_still('cap', (response) => {
        if (response.code === 0) {
          this.store.count++
        }
      })
    },
  },
}
</script>
