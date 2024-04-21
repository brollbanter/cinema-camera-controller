var express = require('express')
var router = express.Router()
var fs = require('fs')
var child_process = require('child_process')
require('dotenv-flow').config()

function get_camera_state() {
  try {
    return JSON.parse(fs.readFileSync('camera_state.json', 'utf-8'))
  }
  catch {
    var state = {
      wifi: 'unconfigured',
      wifi_ssid: '',
      camera_url: process.env.CAMERA_URL,
    }
    set_camera_state(state)
    return state
  }
}

function set_camera_state(state) {
  fs.writeFileSync('camera_state.json', JSON.stringify(state))
}

router.get('/connection_status', (req, res) => {
  var state = get_camera_state()
  if (state.wifi === 'connecting') {
    if (state.wifi_connection_started + 60000 < Date.now()) {
      state.wifi_ssid = ''
      state.wifi = 'failed_to_connect'
      set_camera_state(state)
    } else {
      try {
        if (process.env.MOCK_SERVER != 'true') {
          var output = child_process.execSync('iwgetid').toString()
        } else {
          if (state.wifi_connection_started + 5000 < Date.now()) {
            output = state.wifi_ssid
          } else {
            output = 'not connected'
          }
        }
      }
      catch {
        output = 'not connected'
      }
      if (output.match(RegExp(state.wifi_ssid))) {
        state.wifi = 'connected'
        delete state.wifi_connection_started
        set_camera_state(state)
      }
    }
  }
  res.send(state)
})

router.get('/camera_ssid', (req, res) => {
  if (process.env.MOCK_SERVER != 'true') {
    var ssids = child_process.execSync("sudo iwlist wlan0 scan | grep ESSID | awk 'match($0, /\"ZCAM.*\"/) {print substr($0, RSTART+1, RLENGTH-2)}' | sort | uniq")
      .toString()
      .split('\n')
      .filter((str) => { return str !== '' })

    res.send(ssids)
  } else {
    var ssids = ['ZCAM-003', 'ZCAM-004', 'ZCAM-005']
    var sleep = new Promise(resolve => setTimeout(resolve, 5000))
    sleep.then(() => { res.send(ssids) })
  }
})

router.post('/camera_ssid', (req, res) => {
  state = get_camera_state()
  state.wifi_ssid = req.body.ssid
  state.wifi = 'connecting'
  state.wifi_connection_started = Date.now()
  set_camera_state(state)

  if (process.env.MOCK_SERVER != 'true') {
    child_process.execSync(`bin/wpa_edit ${req.body.ssid}`)
  }

  res.send("ok")
})

router.get('/exit_ui', (_req, res) => {
  child_process.execSync('pkill -f chromium; true')
  res.send("ok")
})

module.exports = router
