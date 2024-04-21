import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ModifyInputAudio from '../views/InputAudio/Modify.vue'
import ModifyAssistTools from '../views/AssistTools/Modify.vue'
import ModifyImage from '../views/Image/Modify.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
    path: '/modify_image',
    name: 'ModifyImage',
    component: ModifyImage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
