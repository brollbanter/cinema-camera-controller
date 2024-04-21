<template>
  <div class="grid grid-cols-2 text-center p-8">
    <option_selector title="FPS" v-bind:store="frame_rate.fps" />
    <option_selector title="VFR" v-bind:store="frame_rate.vfr" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector.vue'
import { useFrameRateStore } from './Store'

export default {
  name: 'ModifyFrameRate',

  components: {
    option_selector: OptionSelector,
  },

  setup() {
    return { frame_rate: useFrameRateStore() }
  },
}
</script>
