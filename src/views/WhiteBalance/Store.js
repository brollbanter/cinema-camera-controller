import Camera from '../../lib/Camera'

var WhiteBalanceStore = {
  state: { value: '-', opts: [], attribute: 'wb' },

  initialize() {
    this.get_white_balance()
  },

  get_white_balance() {
    Camera.ctrl_get(this.state.attribute, (response) => {
      this.state.value = response.value
      this.state.opts = response.opts
    })
  },
}

export default WhiteBalanceStore
