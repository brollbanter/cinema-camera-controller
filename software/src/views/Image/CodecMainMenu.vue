<template>
  <router-link to="/modify_image">
    <div class="flex flex-col space-y-2 text-center">
      <h3 class="font-bold text-xl">Codec</h3>
      <div>{{image.codec.value}}</div>
    </div>
  </router-link>
</template>

<script>
import { useImageStore } from './Store'

export default {
  name: 'CodecMainMenu',

  setup() {
    return { image: useImageStore() }
  },
}
</script>
