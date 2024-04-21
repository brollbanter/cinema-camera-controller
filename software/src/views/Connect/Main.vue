<template>
  <div>
    <div v-if="!failed_to_connect" class="flex flex-col items-center">
      <div class="w-9/12 text-4xl text-center">Connecting to camera: {{ wifi_ssid }}</div>
    </div>
    <div v-else class="flex flex-col items-center">
      <div class="text-4xl text-center">Failed to connect.</div>
      <router-link to='/select_camera_ap' class="text-3xl bg-gray-600 mt-16 py-4 px-8 rounded">Reconnect</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Camera from '../../lib/Camera'

export default {
  name: 'Connect',

  data() {
    return {
      wifi_ssid: '-',
      failed_to_connect: false,
    }
  },

  mounted() {
    this.get_connection_status()
  },

  methods: {
    get_connection_status() {
      axios.get('/api/connection_status')
        .then((response) => {
          this.wifi_ssid = response.data.wifi_ssid
          if (response.data.wifi === 'unconfigured') {
            this.$router.push({ name: 'SelectCameraAP' })
          } else if (response.data.wifi === 'connected') {
            Camera.url = response.data.camera_url
            this.$router.push({ name: 'Home' })
          } else if (response.data.wifi === 'connecting') {
            setTimeout(this.get_connection_status, 1000)
          } else if (response.data.wifi === 'failed_to_connect') {
            this.failed_to_connect = true
          }
        })
        .catch((error) => { console.log(error) })
    },
  },
}
</script>
