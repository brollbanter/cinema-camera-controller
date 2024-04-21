import Camera from '../../lib/Camera'

var AssistToolsStore = {
  state: { value: '-' },

  initialize() {
    this.get_exposure()
  },

  get_exposure() {
    Camera.ctrl_get('assitool_exposure', function(response) {
      this.state.value = response.value
    }.bind(this))
  },
}

AssistToolsStore.initialize()

export default AssistToolsStore
