import Camera from '../../lib/Camera'

var InputAudioStore = {
  state: [
    { id: 0, title: 'Left', value: '- db', max: 0, min: 0 },
    { id: 1, title: 'Right', value: '- db', max: 0, min: 0 },
  ],

  initialize() {
    this.get_left_gain()
    this.get_right_gain()
  },

  id_to_attribute(channel_id) {
    return channel_id == 0 ? 'audio_in_l_gain' : 'audio_in_r_gain'
  },

  get_gain(channel_id) {
    Camera.ctrl_get(this.id_to_attribute(channel_id), function(response) {
      this.state[channel_id].value = response.value
      this.state[channel_id].max = response.max
      this.state[channel_id].min = response.min
    }.bind(this))
  },

  get_left_gain() {
    this.get_gain(0)
  },

  get_right_gain() {
    this.get_gain(1)
  },

  increment(channel_id) {
    Camera.ctrl_set(this.id_to_attribute(channel_id), this.state[channel_id].value + 1, function() {
      this.get_gain(channel_id)
    }.bind(this))
  },

  decrement(channel_id) {
    Camera.ctrl_set(this.id_to_attribute(channel_id), this.state[channel_id].value - 1, function() {
      this.get_gain(channel_id)
    }.bind(this))
  },
}

InputAudioStore.initialize()

export default InputAudioStore
