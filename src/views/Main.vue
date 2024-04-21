<template>
  <div class="main_screen">
    <div class="grid grid-cols-2 justify-items-center p-4">
      <input_audio />
      <assist_tools />
    </div>
    <div class="grid grid-cols-4 justify-items-center p-4">
      <shutter />
      <iso />
      <iris />
      <end />
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
import InputAudioMainMenu from './InputAudio/MainMenu'
import AssistToolsMainMenu from './AssistTools/MainMenu'
import ShutterMainMenu from './Exposure/ShutterMainMenu'
import IsoMainMenu from './Exposure/IsoMainMenu'
import IrisMainMenu from './Exposure/IrisMainMenu'
import EndMainMenu from './Exposure/EndMainMenu'
import CodecMainMenu from './Image/CodecMainMenu'
import ImageMainMenu from './Image/ImageMainMenu'

export default {
  name: 'Main',

  components: {
    input_audio: InputAudioMainMenu,
    assist_tools: AssistToolsMainMenu,
    shutter: ShutterMainMenu,
    iso: IsoMainMenu,
    iris: IrisMainMenu,
    end: EndMainMenu,
    codec: CodecMainMenu,
    image_: ImageMainMenu,
  },
}
</script>
