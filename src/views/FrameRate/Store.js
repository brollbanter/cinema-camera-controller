import Camera from '../../lib/Camera'

var FrameRateStore = {
  state: {
    fps: { value: '-', opts: [], attribute: 'project_fps' },
    vfr: { value: '-', opts: [], attribute: 'movvfr' },
  },

  initialize() {
    this.get_fps()
    this.get_vfr()
  },

  get_fps() {
    Camera.ctrl_get(this.state.fps.attribute, (response) => {
      this.state.fps.value = response.value
      this.state.fps.opts = response.opts
    })
  },

  get_vfr() {
    Camera.ctrl_get(this.state.vfr.attribute, (response) => {
      this.state.vfr.value = response.value
      this.state.vfr.opts = response.opts
    })
  },
}

export default FrameRateStore
