<template>
  <div class="text-center p-8">
    <option_selector title="VFR" v-bind:store="vfr" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector'
import VfrStore from './Store'

export default {
  name: 'ModifyVfr',

  components: {
    option_selector: OptionSelector,
  },

  data() {
    return {
      vfr: VfrStore.state,
    }
  },
}
</script>
