
const path = require('path')
module.exports = {
  devServer: {
    port: 8081,
    proxy: 'http://_http._tcp.insider-server.dev.svc.cluster.local'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/variables.styl'),
        path.resolve(__dirname, 'src/assets/styles/common.styl')
      ]
    }
  }
}
