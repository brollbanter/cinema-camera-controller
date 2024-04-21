<template>
  <div class="flex flex-col space-y-2 text-center">
    <h2 class="font-bold text-xl">Battery</h2>
    <div>Cam: {{ camVoltage }}V&nbsp;&nbsp;&nbsp;Ctrl: {{ c3Percent }}%</div>
  </div>
</template>

<script>
import Camera from '../../lib/Camera'
import axios from 'axios'

export default {
  name: 'BatterySpaceMainMenu',

  data() {
    return {
      camVoltage: 0.0,
      c3Percent: 0,
      timer: '',
    }
  },

  created() {
    this.get_battery()
    this.timer = setInterval(this.get_battery, 5000)
  },

  unmounted() {
    clearInterval(this.timer)
  },

  methods: {
    get_battery() {
      Camera.ctrl_get('battery_voltage', (response) => {
        this.camVoltage = response.value / 10.0
      })
      axios.get('/api/controller_battery')
        .then((response) => {
          this.c3Percent = response.data.percent
        })
        .catch((error) => { console.error(error) })
    },
  },
}
</script>
