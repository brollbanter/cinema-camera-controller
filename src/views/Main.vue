<template>
  <div class="main_screen">
    <div id="row1" class="grid grid-cols-2 justify-items-center p-4">
      <input_audio />
      <assist_tools />
    </div>
  </div>
</template>

<script>
import InputAudioMainMenu from './InputAudio/MainMenu.vue'
import AssistToolsMainMenu from './AssistTools/MainMenu.vue'

export default {
  name: 'Main',

  components: {
    input_audio: InputAudioMainMenu,
    assist_tools: AssistToolsMainMenu,
  },
}
</script>
