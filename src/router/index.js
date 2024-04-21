import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ModifyInputAudio from '../views/InputAudio/Modify.vue'
import ModifyAssistTools from '../views/AssistTools/Modify.vue'
import ModifyShutter from '../views/Exposure/Modify.vue'
import ModifyFps from '../views/Fps/Modify.vue'
import ModifyVfr from '../views/Vfr/Modify.vue'
import ModifyImage from '../views/Image/Modify.vue'
import ModifyResolution from '../views/Resolution/Modify.vue'
import ModifyWhiteBalance from '../views/WhiteBalance/Modify.vue'

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
    path: '/modify_fps',
    name: 'ModifyFps',
    component: ModifyFps
  },
  {
    path: '/modify_vfr',
    name: 'ModifyVfr',
    component: ModifyVfr
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
