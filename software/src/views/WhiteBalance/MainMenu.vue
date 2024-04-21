<template>
  <router-link to="/modify_white_balance">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">White Balance</h2>
      <div>{{ white_balance.value }}</div>
    </div>
  </router-link>
</template>

<script>
import { useWhiteBalanceStore } from './Store'

export default {
  name: 'WhiteBalanceSpaceMainMenu',

  setup() {
    return { white_balance: useWhiteBalanceStore() }
  },
}
</script>
