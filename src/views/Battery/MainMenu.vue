<template>
  <div class="flex flex-col space-y-2 text-center">
    <h2 class="font-bold text-xl">Battery</h2>
    <div>{{ voltage }} V</div>
  </div>
</template>

<script>
import Camera from '../../lib/Camera'

export default {
  name: 'BatterySpaceMainMenu',

  data() {
    return {
      voltage: 0.0,
      timer: '',
    }
  },

  created() {
    this.get_battery()
    this.timer = setInterval(this.get_battery, 5000)
  },

  methods: {
    get_battery() {
      Camera.ctrl_get('battery_voltage', (response) => {
        this.voltage = response.value / 10.0
      })
    },
  },
}
</script>
