import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ModifyInputAudio from '../views/InputAudio/Modify.vue'
import ModifyAssistTools from '../views/AssistTools/Modify.vue'
import ModifyShutter from '../views/Exposure/Modify.vue'
import ModifyFrameRate from '../views/FrameRate/Modify.vue'
import ModifyImage from '../views/Image/Modify.vue'
import ModifyResolution from '../views/Resolution/Modify.vue'
import ModifyWhiteBalance from '../views/WhiteBalance/Modify.vue'

import Connect from '../views/Connect/Main.vue'
import SelectCameraAP from '../views/Connect/SelectCameraAP.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/modify_input_audio',
    name: 'ModifyInputAudio',
    component: ModifyInputAudio,
  },
  {
    path: '/modify_assist_tools',
    name: 'ModifyAssistTools',
    component: ModifyAssistTools,
  },
  {
    path: '/modify_shutter',
    name: 'ModifyShutter',
    component: ModifyShutter
  },
  {
    path: '/modify_frame_rate',
    name: 'ModifyFrameRate',
    component: ModifyFrameRate
  },
  {
    path: '/modify_image',
    name: 'ModifyImage',
    component: ModifyImage
  },
  {
    path: '/modify_resolution',
    name: 'ModifyResolution',
    component: ModifyResolution
  },
  {
    path: '/modify_white_balance',
    name: 'ModifyWhiteBalance',
    component: ModifyWhiteBalance
  },
  {
    path: '/connect',
    name: 'Connect',
    component: Connect
  },
  {
    path: '/select_camera_ap',
    name: 'SelectCameraAP',
    component: SelectCameraAP
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
