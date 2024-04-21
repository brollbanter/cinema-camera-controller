<template>
  <router-link to="/modify_resolution" class="bg-gray-800 py-4 px-4 rounded">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">Resolution</h2>
      <div>{{ resolution.value }}</div>
    </div>
  </router-link>
</template>

<script>
import ResolutionStore from './Store'

export default {
  name: 'ResolutionMainMenu',

  data() {
    return {
      resolution: ResolutionStore.state,
    }
  },
}
</script>
