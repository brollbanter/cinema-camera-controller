import Camera from '../../lib/Camera'
import { defineStore } from 'pinia'

export const useResolutionStore = defineStore('resolution', {
  state: () => ({ value: '-', opts: [], attribute: 'resolution' }),

  actions: {
    initialize() {
      this.get_resolution()
    },

    get_resolution() {
      Camera.ctrl_get(this.attribute, (response) => {
        this.value = response.value
        this.opts = response.opts
      })
    },
  },
})
