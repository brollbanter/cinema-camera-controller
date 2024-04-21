<template>
  <div class="flex flex-col space-y-2 text-center">
    <h2>Assist Tools</h2>
    <div>{{exposure.value}}</div>
  </div>
</template>

<script>
import AssistToolsStore from './Store.js'
export default {
  name: 'AssistToolsMainMenu',

  data() {
    return {
      exposure: AssistToolsStore.state,
    }
  },
}
</script>
