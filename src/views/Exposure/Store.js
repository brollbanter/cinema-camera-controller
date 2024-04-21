import Camera from '../../lib/Camera'
import { defineStore } from 'pinia'

export const useShutterStore = defineStore('shutter', {
  state: () => ({
    shutter: { value: '-', opts: [], attribute: 'shutter_time' },
    iso: { value: '-', opts: [], attribute: 'iso' },
    iris: { value: '-', opts: [], attribute: 'iris' },
    end: { value: '-', opts: [], attribute: 'eND' },
  }),

  actions: {
    initialize() {
      this.get_shutter_value()
      this.get_iso_value()
      this.get_iris_value()
      this.get_end_value()
    },

    get_shutter_value() {
      Camera.ctrl_get(this.shutter.attribute, (response) => {
        this.shutter.value = response.value
        this.shutter.opts = response.opts
      })
    },

    get_iso_value() {
      Camera.ctrl_get(this.iso.attribute, (response) => {
        this.iso.value = response.value
        this.iso.opts = response.opts
      })
    },

    get_iris_value() {
      Camera.ctrl_get(this.iris.attribute, (response) => {
        this.iris.value = response.value
        this.iris.opts = response.opts
      })
    },

    get_end_value() {
      Camera.ctrl_get(this.end.attribute, (response) => {
        this.end.value = response.value
        this.end.opts = response.opts
      })
    },
  },
})
