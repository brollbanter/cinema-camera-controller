<template>
  <div class="text-center p-8">
    <option_selector title="Assist Tools" v-bind:store="assist_tools" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector'
import AssistToolsStore from './Store'

export default {
  name: 'ModifyAssistTools',

  components: {
    option_selector: OptionSelector,
  },

  data() {
    return {
      assist_tools: AssistToolsStore.state,
    }
  },
}
</script>
