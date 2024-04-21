<template>
  <div class="text-center p-8">
    <option_selector title="White Balance" v-bind:store="white_balance" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector'
import WhiteBalanceStore from './Store'

export default {
  name: 'ModifyWhiteBalance',

  components: {
    option_selector: OptionSelector,
  },

  data() {
    return {
      white_balance: WhiteBalanceStore.state,
    }
  },
}
</script>
