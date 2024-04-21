<template>
  <div class="text-center p-8">
    <option_selector title="Resolution" v-bind:store="resolution" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector'
import ResolutionStore from './Store'

export default {
  name: 'ModifyResolution',

  components: {
    option_selector: OptionSelector,
  },

  data() {
    return {
      resolution: ResolutionStore.state,
    }
  },
}
</script>
