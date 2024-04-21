import Camera from '../../lib/Camera'
import { defineStore } from 'pinia'

export const useImageStore = defineStore('image', {
  state: () => ({
    image: { value: '-', opts: [], attribute: 'lut' },
    codec: { value: '-', opts: [], attribute: 'video_encoder' },
  }),

  actions: {
    initialize() {
      this.get_image_value()
      this.get_codec_value()
    },

    get_image_value() {
      Camera.ctrl_get(this.image.attribute, (response) => {
        this.image.value = response.value
        this.image.opts = response.opts
      })
    },

    get_codec_value() {
      Camera.ctrl_get(this.codec.attribute, (response) => {
        this.codec.value = response.value
        this.codec.opts = response.opts
      })
    },
  },
})
