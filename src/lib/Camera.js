import axios from 'axios'

var Camera = {
  host_url: 'http://192.168.1.21:3000',

  ctrl_get(attribute, callback) {
    axios.get(this.host_url + '/ctrl/get', { params: { k: attribute }})
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => { console.log(error) })
  },

  ctrl_set(attribute, value, callback) {
    axios.get(this.host_url + '/ctrl/set', { params: { [attribute]: value }})
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => { console.log(error) })
  },
}

export default Camera
