import Camera from '../../lib/Camera'

var VfrStore = {
  state: { value: '-', opts: [], attribute: 'movvfr' },

  initialize() {
    this.get_vfr()
  },

  get_vfr() {
    Camera.ctrl_get(this.state.attribute, (response) => {
      this.state.value = response.value
      this.state.opts = response.opts
    })
  },
}

VfrStore.initialize()

export default VfrStore
