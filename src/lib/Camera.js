import axios from 'axios'

var Camera = {
  url: '',

  ctrl_get(attribute, callback) {
    axios.get(this.host_url() + '/ctrl/get', {
      params: { k: attribute },
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
    })
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => { console.log(error) })
  },

  host_url() {
    return this.url
  },
}

export default Camera
