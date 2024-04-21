import Camera from '../../lib/Camera'
import { defineStore } from 'pinia'

export const useWhiteBalanceStore = defineStore('whiteBalance', {
  state: () => ({ value: '-', opts: [], attribute: 'wb', }),

  actions: {
    initialize() {
      this.get_white_balance()
    },

    get_white_balance() {
      Camera.ctrl_get(this.attribute, (response) => {
        this.value = response.value
        this.opts = response.opts
      })
    },
  },
})
