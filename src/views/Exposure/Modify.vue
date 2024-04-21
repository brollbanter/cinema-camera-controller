<template>
  <div class="grid grid-cols-4 text-center p-8">
    <option_selector title="Shutter" v-bind:store="shutter.shutter" />
    <option_selector title="ISO" v-bind:store="shutter.iso" />
    <option_selector title="F/" v-bind:store="shutter.iris" />
    <option_selector title="eND" v-bind:store="shutter.end" />
  </div>
</template>

<script>
import VerticalOptSelect from '../../components/VerticalOptSelect'
import ShutterStore from './Store'

export default {
  name: 'ModifyImage',

  components: {
    option_selector: VerticalOptSelect,
  },

  data() {
    return {
      shutter: ShutterStore.state,
    }
  },
}
</script>
