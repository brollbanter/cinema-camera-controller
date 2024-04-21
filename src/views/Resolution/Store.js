import Camera from '../../lib/Camera'

var ResolutionStore = {
  state: { value: '-', opts: [], attribute: 'resolution' },

  initialize() {
    this.get_resolution()
  },

  get_resolution() {
    Camera.ctrl_get(this.state.attribute, (response) => {
      this.state.value = response.value
      this.state.opts = response.opts
    })
  },
}

export default ResolutionStore
