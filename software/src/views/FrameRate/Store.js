import Camera from '../../lib/Camera'
import { defineStore } from 'pinia'

export const useFrameRateStore = defineStore('frameRate', {
  state: () => ({
    fps: { value: '-', opts: [], attribute: 'project_fps' },
    vfr: { value: '-', opts: [], attribute: 'movvfr' },
  }),

  actions: {
    initialize() {
      this.get_fps()
      this.get_vfr()
    },

    get_fps() {
      Camera.ctrl_get(this.fps.attribute, (response) => {
        this.fps.value = response.value
        this.fps.opts = response.opts
      })
    },

    get_vfr() {
      Camera.ctrl_get(this.vfr.attribute, (response) => {
        this.vfr.value = response.value
        this.vfr.opts = response.opts
      })
    },
  },
})
