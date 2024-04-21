import axios from 'axios'

var Camera = {
  host_url: 'http://localhost:3000',
  ctrl_get(attribute, callback) {
    axios.get(this.host_url + '/ctrl/get', { params: { k: attribute }})
      .then(function(response) {
        callback(response.data)
      })
      .catch(function(error) { console.log(error) })
  },

  ctrl_set(attribute, value, callback) {
    axios.get(this.host_url + '/ctrl/set', { params: { [attribute]: value }})
      .then(function(response) {
        callback(response.data)
      })
      .catch(function(error) { console.log(error) })
  },
}

export default Camera
