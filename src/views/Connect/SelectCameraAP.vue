<template>
  <div>
    <div v-if="cameraSSIDs !== null">
      <div v-if="cameraSSIDs.length > 0">
        <div class="text-4xl text-center">Select camera to connect to:</div>
        <div class="flex justify-center">
          <ul v-if="!SSIDSelected" class="flex-col inline-block border-b-2 border-gray-500 pt-4">
            <li v-for="camera_ssid in cameraSSIDs" :key="camera_ssid" v-on:click="select_camera(camera_ssid)" class="w-36 min-w-max text-xl p-3 border-r-2 border-l-2 border-t-2 border-gray-500">{{ camera_ssid }}</li>
          </ul>
        </div>
      </div>
      <div v-else class="flex flex-col items-center">
        <div class="w-9/12 text-2xl text-center">No cameras found on network. Check to make sure camera is powered on and in wifi mode</div>
        <div v-on:click="get_camera_ssids()" class="text-3xl bg-gray-600 mt-16 py-4 px-8 rounded">Retry</div>
      </div>
    </div>
    <div v-else class="text-4xl text-center">Scanning network for cameras...</div>
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
