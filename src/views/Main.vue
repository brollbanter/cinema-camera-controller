<template>
  <div class="main_screen">
    <div class="grid grid-cols-5">
      <div class="col-span-4 grid grid-cols-2 justify-items-center p-2">
        <input_audio class="w-40 bg-gray-800 p-4 rounded" />
        <assist_tools class="w-40 bg-gray-800 p-4 rounded" />
      </div>
      <div class="flex flex-row-reverse" >
        <div class="flex flex-row justify-center items-center bg-gray-800 w-24 h-24 p-4">
          <router-link to="/connect"><cog_icon class="h-16 w-16 fill-gray-400"/></router-link>
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
import InputAudioMainMenu from './InputAudio/MainMenu.vue'
import AssistToolsMainMenu from './AssistTools/MainMenu.vue'
import ShutterMainMenu from './Exposure/ShutterMainMenu.vue'
import IsoMainMenu from './Exposure/IsoMainMenu.vue'
import IrisMainMenu from './Exposure/IrisMainMenu.vue'
import EndMainMenu from './Exposure/EndMainMenu.vue'
import FpsMainMenu from './FrameRate/FpsMainMenu.vue'
import VfrMainMenu from './FrameRate/VfrMainMenu.vue'
import CodecMainMenu from './Image/CodecMainMenu.vue'
import ImageMainMenu from './Image/ImageMainMenu.vue'
import ResolutionMainMenu from './Resolution/MainMenu.vue'
import CardSpaceMainMenu from './CardSpace/MainMenu.vue'
import WhiteBalanceMainMenu from './WhiteBalance/MainMenu.vue'
import BatteryMainMenu from './Battery/MainMenu.vue'
import Camera from '../lib/Camera.js'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'
import { useImageStore} from './Image/Store.js'
import { useAssistToolsStore } from './AssistTools/Store.js'
import { useInputAudioStore } from './InputAudio/Store.js'
import { useShutterStore } from './Exposure/Store.js'
import { useFrameRateStore } from './FrameRate/Store.js'
import { useResolutionStore } from './Resolution/Store.js'
import { useWhiteBalanceStore } from './WhiteBalance/Store.js'

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
    cog_icon: Cog6ToothIcon,
  },

  created() {
    if (Camera.url === '') {
      this.$router.push({ name: 'Connect' })
    } else {
      useAssistToolsStore().initialize()
      useImageStore().initialize()
      useInputAudioStore().initialize()
      useShutterStore().initialize()
      useFrameRateStore().initialize()
      useResolutionStore().initialize()
      useWhiteBalanceStore().initialize()
    }
  },
}
</script>
