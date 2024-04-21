<template>
  <div class="text-center p-8">
    <h2 class="text-4xl font-bold" >Audio Menu</h2>
    <div id="channels" class="grid grid-cols-2">
      <div v-for="(channel, id) in channels.$state" v-bind:key="id" class="channel space-y-2">
        <div>Max: {{channel.max}} db</div>
        <button v-on:click="channels.increment(id)" class="text-3xl bg-green-700 py-4 px-8 rounded">+</button>
        <div class="text-2xl">{{channel.value}} db</div>
        <button v-on:click="channels.decrement(id)" class="text-3xl bg-red-700 py-4 px-8 rounded">-</button>
        <div>Min: {{channel.min}} db</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useInputAudioStore } from './Store'

export default {
  name: 'ModifyInputAudio',

  setup() {
    return { channels: useInputAudioStore() }
  },
}
</script>
