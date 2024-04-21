import axios from 'axios'

var InputAudioStore = {
  state: [
    { id: 1, title: 'Left', value: '- db', max: 0, min: 0 },
    { id: 2, title: 'Right', value: '- db', max: 0, min: 0 },
  ],
  initialize() {
    this.get_left_gain()
    this.get_right_gain()
  },
  get_left_gain() {
    axios.get('http://localhost:3000/ctrl/get?k=audio_in_l_gain')
      .then(function(response) {
        this.state[0].value = response.data.value
        this.state[0].max = response.data.max
        this.state[0].min = response.data.min
      }.bind(this))
      .catch(function(error) { console.log(error) })
  },
  get_right_gain() {
    axios.get('http://localhost:3000/ctrl/get?k=audio_in_r_gain')
      .then(function(response) {
        this.state[1].value = response.data.value
        this.state[1].max = response.data.max
        this.state[1].min = response.data.min
      }.bind(this))
      .catch(function(error) { console.log(error) })
  },
  increment(channel_id) {
    var channel = this.state.find(({id}) => id == channel_id)
    axios.get('http://localhost:3000/ctrl/set', {params: channel_id == 1 ? {audio_in_l_gain: channel.value + 1} : {audio_in_r_gain: channel.value + 1}})
      .then(function() {
        if (channel_id == 1) {
          this.get_left_gain()
        } else {
          this.get_right_gain()
        }
      }.bind(this))
      .catch(function(error) { console.log(error) })
  },
  decrement(channel_id) {
    var channel = this.state.find(({id}) => id == channel_id)
    axios.get('http://localhost:3000/ctrl/set', {params: channel_id == 1 ? {audio_in_l_gain: channel.value - 1} : {audio_in_r_gain: channel.value - 1}})
      .then(function() {
        if (channel_id == 1) {
          this.get_left_gain()
        } else {
          this.get_right_gain()
        }
      }.bind(this))
      .catch(function(error) { console.log(error) })
  },
}

InputAudioStore.initialize()

export default InputAudioStore
