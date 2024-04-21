<template>
  <div class="text-center p-8">
    <option_selector title="Assist Tools" v-bind:store="assist_tools" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector.vue'
import { useAssistToolsStore } from './Store'

export default {
  name: 'ModifyAssistTools',

  components: {
    option_selector: OptionSelector,
  },

  setup() {
    return { assist_tools: useAssistToolsStore() }
  },
}
</script>
