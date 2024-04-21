<template>
  <router-link to="/modify_input_audio">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="font-bold text-xl">Input Gain</h2>
      <div id="channels" class="flex flex-row justify-center space-x-4">
        <div v-for="channel in channels" v-bind:key="channel.id" class="channel">
          <div>{{channel.title}}</div>
          <div>{{channel.value}} db</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { useInputAudioStore } from './Store'

export default {
  name: 'InputAudioMainMenu',

  setup() {
    return { channels: useInputAudioStore().$state }
  },
}
</script>
