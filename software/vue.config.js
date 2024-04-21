const configureAPI = require('./server/configure')

module.exports = {
  devServer: {
    before: configureAPI
  }
}
