<template>
  <div class="text-center p-8">
    <h2 class="text-4xl font-bold" >Audio Menu</h2>
    <div id="channels" class="grid grid-cols-2">
      <div v-for="channel in channels" v-bind:key="channel.id" class="channel space-y-2">
        <div>Max: {{channel.max}} db</div>
        <button v-on:click="increment(channel.id)" class="text-3xl bg-green-700 py-4 px-8 rounded">+</button>
        <div class="text-2xl">{{channel.value}} db</div>
        <button v-on:click="decrement(channel.id)" class="text-3xl bg-red-700 py-4 px-8 rounded">-</button>
        <div>Min: {{channel.min}} db</div>
      </div>
    </div>
  </div>
</template>

<script>
import InputAudioStore from './Store'

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
