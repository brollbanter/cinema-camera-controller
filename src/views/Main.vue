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
      <fps />
      <vfr />
      <codec />
      <image_ />
      <resolution />
    </div>
    <div class="grid grid-cols-3 justify-items-center p-4">
      <card_space />
      <white_balance />
      <battery />
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
import FpsMainMenu from './Fps/MainMenu'
import VfrMainMenu from './Vfr/MainMenu'
import CodecMainMenu from './Image/CodecMainMenu'
import ImageMainMenu from './Image/ImageMainMenu'
import ResolutionMainMenu from './Resolution/MainMenu'
import CardSpaceMainMenu from './CardSpace/MainMenu'
import WhiteBalanceMainMenu from './WhiteBalance/MainMenu'
import BatteryMainMenu from './Battery/MainMenu'

export default {
  name: 'Main',

  components: {
    input_audio: InputAudioMainMenu,
    assist_tools: AssistToolsMainMenu,
    shutter: ShutterMainMenu,
    iso: IsoMainMenu,
    iris: IrisMainMenu,
    end: EndMainMenu,
    fps: FpsMainMenu,
    vfr: VfrMainMenu,
    codec: CodecMainMenu,
    image_: ImageMainMenu,
    resolution: ResolutionMainMenu,
    card_space: CardSpaceMainMenu,
    white_balance: WhiteBalanceMainMenu,
    battery: BatteryMainMenu,
  },
}
</script>
