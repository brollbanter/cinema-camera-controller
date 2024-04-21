import Camera from '../../lib/Camera'
import { defineStore } from 'pinia'

export const useAssistToolsStore = defineStore('assistTools', {
  state: () => ({ value: '-', opts: [], attribute: 'assitool_exposure', }),

  actions: {
    initialize() {
      this.get_exposure()
    },

    get_exposure() {
      Camera.ctrl_get(this.attribute, (response) => {
        this.value = response.value
        this.opts = response.opts
      })
    },
  },
})
