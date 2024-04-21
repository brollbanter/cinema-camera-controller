<template>
  <div>
    <div v-if="cameraSSIDs !== null">
      <div>Select Camera to Connect to</div>
      <div>
        <ul v-for="camera_ssid in cameraSSIDs" :key="camera_ssid">
          <li v-on:click="select_camera(camera_ssid)">{{ camera_ssid }}</li>
        </ul>
      </div>
    </div>
    <div v-else>Scanning...</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SelectCameraAP',

  data() {
    return {
      cameraSSIDs: null,
    }
  },

  mounted() {
    axios.get('/api/camera_ssid')
      .then((response) => {
        this.cameraSSIDs = response.data
      })
      .catch((error) => { console.log(error) })
  },

  methods: {
    select_camera(camera_ssid) {
      axios.post('/api/camera_ssid', { ssid: camera_ssid }).
        then((response) => {
          console.log(response)
          this.$router.push({ name: 'Connect' })
        })
        .catch((error) => { console.log(error) })

      console.log('camera_selected', camera_ssid)
    },
  },
}
</script>
