<template>
  <div class="adjust_input_audio text-center p-8">
    <h2>Audio Menu</h2>
    <div id="channels" class="grid grid-cols-2">
      <div v-for="channel in channels" v-bind:key="channel.id" class="channel space-y-2">
        <div>Max: {{channel.max}} db</div>
        <button v-on:click="increment(channel.id)" class="bg-green-500 py-1 px-4 rounded">+</button>
        <div>{{channel.value}} db</div>
        <button v-on:click="decrement(channel.id)" class="bg-red-500 py-1 px-4 rounded">-</button>
        <div>Min: {{channel.min}} db</div>
      </div>
    </div>
  </div>
</template>

<script>
import InputAudioStore from './Store.js'

export default {
  name: 'ModifyInputAudio',

  data() {
    return {
      channels: InputAudioStore.state,
    }
  },

  methods: {
    increment(channel_id) {
      InputAudioStore.increment(channel_id)
    },

    decrement(channel_id) {
      InputAudioStore.decrement(channel_id)
    },
  }
}
</script>
