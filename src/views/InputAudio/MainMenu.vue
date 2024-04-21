<template>
  <router-link to="/modify_input_audio">
    <div class="input_audio flex flex-col space-y-2 text-center">
      <h2>Input Gain</h2>
      <div id="channels" class="flex flex-row space-x-4">
        <div v-for="channel in channels" v-bind:key="channel.id" class="channel">
          <div>{{channel.title}}</div>
          <div>{{channel.value}} db</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import InputAudioStore from './Store.js'

export default {
  name: 'InputAudioMainMenu',

  data() {
    return {
      channels: InputAudioStore.state,
    }
  },
}
</script>
