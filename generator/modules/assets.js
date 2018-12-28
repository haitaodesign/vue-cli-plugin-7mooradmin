module.exports = (api) => {
  api.render({
    './src/assets/logo.png': './templates/default/src/assets/img/logo.png',
    './src/assets/styles/common.styl': './src/assets/styles/common.styl',
    './src/assets/styles/variables.styl': './src/assets/styles/variables.styl'
  })
}