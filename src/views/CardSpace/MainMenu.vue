<template>
  <div class="flex flex-col space-y-2 text-center bg-gray-800 py-4 px-4 rounded">
    <h2 class="font-bold text-xl">Card Space</h2>
    <div>{{ card_space }} minutes</div>
  </div>
</template>

<script>
import Camera from '../../lib/Camera'

export default {
  name: 'CardSpaceMainMenu',

  data() {
    return {
      card_space: 0,
    }
  },

  created() {
    Camera.rec_get('remain', (response) => {
      this.card_space = response.msg
    })
  },
}
</script>
