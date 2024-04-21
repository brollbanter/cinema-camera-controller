<template>
  <div class="text-center p-8">
    <option_selector title="FPS" v-bind:store="fps" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector'
import FpsStore from './Store'

export default {
  name: 'ModifyFps',

  components: {
    option_selector: OptionSelector,
  },

  data() {
    return {
      fps: FpsStore.state,
    }
  },
}
</script>
