<template>
  <router-link to="/modify_assist_tools" class="bg-gray-800 py-4 px-4 rounded">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">Assist Tools</h2>
      <div>{{ exposure.value }}</div>
    </div>
  </router-link>
</template>

<script>
import AssistToolsStore from './Store'

export default {
  name: 'AssistToolsMainMenu',

  data() {
    return {
      exposure: AssistToolsStore.state,
    }
  },
}
</script>
