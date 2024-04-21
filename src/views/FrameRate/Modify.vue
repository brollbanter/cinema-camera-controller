<template>
  <div class="grid grid-cols-2 text-center p-8">
    <option_selector title="FPS" v-bind:store="frame_rate.fps" />
    <option_selector title="VFR" v-bind:store="frame_rate.vfr" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector'
import FrameRateStore from './Store'

export default {
  name: 'ModifyFrameRate',

  components: {
    option_selector: OptionSelector,
  },

  data() {
    return {
      frame_rate: FrameRateStore.state,
    }
  },
}
</script>
