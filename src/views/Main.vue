<template>
  <div class="main_screen">
    <div id="row1" class="grid grid-cols-2 justify-items-center p-4">
      <input_audio />
      <div>
        <h2 class="text-center">Assist Tools</h2>
      </div>
    </div>
  </div>
</template>

<script>
import InputAudioMainMenu from './InputAudio/MainMenu.vue'

export default {
  name: 'Main',

  components: {
    input_audio: InputAudioMainMenu,
  },
}
</script>
