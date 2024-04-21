import Camera from '../../lib/Camera'

var ImageStore = {
  state: {
    image: { value: '-', opts: [], attribute: 'lut' },
    codec: { value: '-', opts: [], attribute: 'video_encoder' },
  },

  initialize() {
    this.get_image_value()
    this.get_codec_value()
  },

  get_image_value() {
    Camera.ctrl_get(this.state.image.attribute, function(response) {
      this.state.image.value = response.value
      this.state.image.opts = response.opts
    }.bind(this))
  },

  get_codec_value() {
    Camera.ctrl_get(this.state.codec.attribute, function(response) {
      this.state.codec.value = response.value
      this.state.codec.opts = response.opts
    }.bind(this))
  },
}

ImageStore.initialize()

export default ImageStore
