import Camera from '../../lib/Camera'

var ShutterStore = {
  state: {
    shutter: { value: '-', opts: [], attribute: 'shutter_time' },
    iso: { value: '-', opts: [], attribute: 'iso' },
    iris: { value: '-', opts: [], attribute: 'iris' },
    end: { value: '-', opts: [], attribute: 'eND' },
  },

  initialize() {
    this.get_shutter_value()
    this.get_iso_value()
    this.get_iris_value()
    this.get_end_value()
  },

  get_shutter_value() {
    Camera.ctrl_get(this.state.shutter.attribute, (response) => {
      this.state.shutter.value = response.value
      this.state.shutter.opts = response.opts
    })
  },

  get_iso_value() {
    Camera.ctrl_get(this.state.iso.attribute, (response) => {
      this.state.iso.value = response.value
      this.state.iso.opts = response.opts
    })
  },

  get_iris_value() {
    Camera.ctrl_get(this.state.iris.attribute, (response) => {
      this.state.iris.value = response.value
      this.state.iris.opts = response.opts
    })
  },

  get_end_value() {
    Camera.ctrl_get(this.state.end.attribute, (response) => {
      this.state.end.value = response.value
      this.state.end.opts = response.opts
    })
  },
}

ShutterStore.initialize()

export default ShutterStore
