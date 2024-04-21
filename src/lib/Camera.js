import * as rax from 'retry-axios'
import axios from 'axios'

rax.attach();

var Camera = {

  ctrl_get(attribute, callback) {
    axios.get(this.host_url() + '/ctrl/get', {
      params: { k: attribute },
      raxConfig: { retry: 10, noResponseRetries: 10, retryDelay: 1000 },
    })
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => { console.log(error) })
  },

  ctrl_set(attribute, value, callback) {
    axios.get(this.host_url() + `/ctrl/set?${attribute}=${value}`)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => { console.log(error) })
  },

  rec_get(attribute, callback) {
    axios.get(this.host_url() + '/ctrl/rec', {
      params: { action: attribute },
      raxConfig: { retry: 10, noResponseRetries: 10, retryDelay: 1000 },
    })
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => { console.log(error) })
  },

  host_url() {
    if (process.env.VUE_APP_CAMERA_URL) {
      return process.env.VUE_APP_CAMERA_URL
    } else {
      return 'http://localhost:3030'
    }
  },
}

export default Camera
