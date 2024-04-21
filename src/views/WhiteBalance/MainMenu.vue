<template>
  <router-link to="/modify_white_balance">
    <div class="flex flex-col space-y-2 text-center">
      <h2>White Balance</h2>
      <div>{{ white_balance.value }}</div>
    </div>
  </router-link>
</template>

<script>
import WhiteBalanceStore from './Store'

export default {
  name: 'WhiteBalanceSpaceMainMenu',

  data() {
    return {
      white_balance: WhiteBalanceStore.state,
    }
  },
}
</script>
