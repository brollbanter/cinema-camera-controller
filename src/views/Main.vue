<template>
  <div class="main_screen">
    <div class="grid grid-cols-5">
      <div class="col-span-4 grid grid-cols-2 justify-items-center p-2">
        <input_audio class="w-40 bg-gray-800 p-4 rounded" />
        <assist_tools class="w-40 bg-gray-800 p-4 rounded" />
      </div>
      <div class="flex flex-row-reverse" >
        <div class="flex flex-row justify-center items-center w-24 h-24 p-4">
          <router-link to="/connect"><cog_icon size="3x"/></router-link>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 justify-items-center p-2">
      <shutter class="w-40 bg-gray-800 p-4 rounded" />
      <iso class="w-40 bg-gray-800 p-4 rounded" />
      <iris class="w-40 bg-gray-800 p-4 rounded" />
      <end class="w-40 bg-gray-800 p-4 rounded" />
    </div>
    <div class="grid grid-cols-5 justify-items-center p-2">
      <fps class="w-32 bg-gray-800 p-4 rounded" />
      <vfr class="w-32 bg-gray-800 p-4 rounded" />
      <codec class="w-32 bg-gray-800 p-4 rounded" />
      <image_ class="w-32 bg-gray-800 p-4 rounded" />
      <resolution class="w-32 bg-gray-800 p-4 rounded" />
    </div>
    <div class="grid grid-cols-3 justify-items-center p-2">
      <card_space class="w-48 bg-gray-800 p-4 rounded" />
      <white_balance class="w-48 bg-gray-800 p-4 rounded" />
      <battery class="w-48 bg-gray-800 p-4 rounded" />
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
import FpsMainMenu from './FrameRate/FpsMainMenu'
import VfrMainMenu from './FrameRate/VfrMainMenu'
import CodecMainMenu from './Image/CodecMainMenu'
import ImageMainMenu from './Image/ImageMainMenu'
import ResolutionMainMenu from './Resolution/MainMenu'
import CardSpaceMainMenu from './CardSpace/MainMenu'
import WhiteBalanceMainMenu from './WhiteBalance/MainMenu'
import BatteryMainMenu from './Battery/MainMenu'
import { CogIcon } from '@vue-hero-icons/solid'

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
    cog_icon: CogIcon,
  },
}
</script>
