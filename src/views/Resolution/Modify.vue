<template>
  <div class="text-center p-8">
    <option_selector title="Resolution" v-bind:store="resolution" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector.vue'
import { useResolutionStore } from './Store'

export default {
  name: 'ModifyResolution',

  components: {
    option_selector: OptionSelector,
  },

  setup() {
    return { resolution: useResolutionStore() }
  },
}
</script>
