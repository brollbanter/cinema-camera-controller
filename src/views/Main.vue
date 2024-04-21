<template>
  <div class="main_screen">
    <div class="grid grid-cols-2 justify-items-center p-4">
      <input_audio />
      <assist_tools />
    </div>
    <div class="grid grid-cols-5 justify-items-center p-4">
      <div><h3>FPS</h3></div>
      <div><h3>VFR</h3></div>
      <codec />
      <image_ />
      <div><h3>Resolution</h3></div>
    </div>
  </div>
</template>

<script>
import InputAudioMainMenu from './InputAudio/MainMenu.vue'
import AssistToolsMainMenu from './AssistTools/MainMenu.vue'
import CodecMainMenu from './Image/CodecMainMenu.vue'
import ImageMainMenu from './Image/ImageMainMenu.vue'

export default {
  name: 'Main',

  components: {
    input_audio: InputAudioMainMenu,
    assist_tools: AssistToolsMainMenu,
    codec: CodecMainMenu,
    image_: ImageMainMenu,
  },
}
</script>
