import Camera from '../../lib/Camera'
import { defineStore } from 'pinia'

export const useInputAudioStore = defineStore('inputAudio', {
  state: () => ({
    audio_in_l_gain: { id: 0, title: 'Left', value: '-', max: 0, min: 0 },
    audio_in_r_gain: { id: 1, title: 'Right', value: '-', max: 0, min: 0 },
  }),

  actions: {
    initialize() {
      this.get_left_gain()
      this.get_right_gain()
    },

    get_gain(channel_id) {
      Camera.ctrl_get(channel_id, (response) => {
        this.$state[channel_id].value = response.value
        this.$state[channel_id].max = response.max
        this.$state[channel_id].min = response.min
      })
    },

    get_left_gain() {
      this.get_gain('audio_in_l_gain')
    },

    get_right_gain() {
      this.get_gain('audio_in_r_gain')
    },

    id_to_attribute(channel_id) {
      return channel_id == 0 ? 'audio_in_l_gain' : 'audio_in_r_gain'
    },

    increment(channel_id) {
      Camera.ctrl_set(channel_id, this.$state[channel_id].value + 1, () => {
        this.get_gain(channel_id)
      })
    },

    decrement(channel_id) {
      Camera.ctrl_set(channel_id, this.$state[channel_id].value - 1, () => {
        this.get_gain(channel_id)
      })
    },
  },
})
