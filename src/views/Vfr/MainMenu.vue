<template>
  <router-link to="/modify_vfr">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">VFR</h2>
      <div>{{ vfr.value }}</div>
    </div>
  </router-link>
</template>

<script>
import VfrStore from './Store'

export default {
  name: 'VfrMainMenu',

  data() {
    return {
      vfr: VfrStore.state,
    }
  },
}
</script>
