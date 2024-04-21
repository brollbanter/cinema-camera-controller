import Camera from '../../lib/Camera'

var AssistToolsStore = {
  state: { value: '-', opts: [], attribute: 'assitool_exposure' },

  initialize() {
    this.get_exposure()
  },

  get_exposure() {
    Camera.ctrl_get(this.state.attribute, (response) => {
      this.state.value = response.value
      this.state.opts = response.opts
    })
  },
}

export default AssistToolsStore
