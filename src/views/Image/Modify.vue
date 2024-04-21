<template>
  <div class="grid grid-cols-2 text-center p-8">
    <option_selector title="Codec" v-bind:store="image.codec" />
    <option_selector title="Color Profile" v-bind:store="image.image" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector.vue'
import { useImageStore } from './Store'

export default {
  name: 'ModifyImage',

  setup() {
    return { image: useImageStore() }
  },

  components: {
    option_selector: OptionSelector,
  },
}
</script>
