<template>
  <div class="flex flex-col space-y-2 text-center">
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
      timer: '',
    }
  },

  created() {
    this.get_remaining()
    this.timer = setInterval(this.get_remaining, 5000)
  },

  methods: {
    get_remaining() {
      Camera.rec_get('remain', (response) => {
        this.card_space = response.msg
      })
    },
  },
}
</script>
