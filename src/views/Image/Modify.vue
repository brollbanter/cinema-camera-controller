<template>
  <div class="grid grid-cols-2 text-center p-8">
    <option_selector title="Codec" v-bind:store="image.codec" />
    <option_selector title="Color Profile" v-bind:store="image.image" />
  </div>
</template>

<script>
import OptionSelector from '../../components/OptionSelector'
import ImageStore from './Store'

export default {
  name: 'ModifyImage',

  components: {
    option_selector: OptionSelector,
  },

  data() {
    return {
      image: ImageStore.state,
    }
  },
}
</script>
