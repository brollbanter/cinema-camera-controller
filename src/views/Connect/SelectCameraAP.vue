<template>
  <div>
    <div v-if="cameraSSIDs !== null">
      <div v-if="cameraSSIDs.length > 0">
        <div>Select camera to connect to:</div>
        <div v-if="!SSIDSelected">
          <ul v-for="camera_ssid in cameraSSIDs" :key="camera_ssid">
            <li v-on:click="select_camera(camera_ssid)">{{ camera_ssid }}</li>
          </ul>
        </div>
      </div>
      <div v-else>
        <div>No cameras found on network. Check to make sure camera is powered on and in wifi mode</div>
        <div v-on:click="get_camera_ssids()">Retry</div>
      </div>
    </div>
    <div v-else>Scanning network for cameras...</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SelectCameraAP',

  data() {
    return {
      cameraSSIDs: null,
      SSIDSelected: false,
    }
  },

  mounted() {
    this.get_camera_ssids()
  },

  methods: {
    get_camera_ssids() {
      this.cameraSSIDs = null
      this.SSIDSelected = false
      axios.get('/api/camera_ssid')
        .then((response) => {
          this.cameraSSIDs = response.data
        })
        .catch((error) => { console.log(error) })
    },

    select_camera(camera_ssid) {
      this.SSIDSelected = true
      axios.post('/api/camera_ssid', { ssid: camera_ssid }).
        then(() => {
          this.$router.push({ name: 'Connect' })
        })
        .catch((error) => { console.log(error) })
    },
  },
}
</script>
