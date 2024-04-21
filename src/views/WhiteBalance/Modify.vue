<template>
  <div class="text-center p-8">
    <option_selector title="White Balance" v-bind:store="white_balance" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector.vue'
import { useWhiteBalanceStore } from './Store'

export default {
  name: 'ModifyWhiteBalance',

  components: {
    option_selector: OptionSelector,
  },

  setup() {
    return { white_balance: useWhiteBalanceStore() }
  },
}
</script>
