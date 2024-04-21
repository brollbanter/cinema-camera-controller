import Camera from '../../lib/Camera'

var FpsStore = {
  state: { value: '-', opts: [], attribute: 'project_fps' },

  initialize() {
    this.get_fps()
  },

  get_fps() {
    Camera.ctrl_get(this.state.attribute, (response) => {
      this.state.value = response.value
      this.state.opts = response.opts
    })
  },
}

FpsStore.initialize()

export default FpsStore
