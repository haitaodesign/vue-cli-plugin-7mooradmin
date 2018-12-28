/*
 * @Author: lihaitao 
 * @Date: 2018-12-28 11:50:59 
 * @Last Modified by:   lihaitao 
 * @Last Modified time: 2018-12-28 11:50:59 
 */
module.exports = (api) => {
  api.render({
    './src/assets/images/logo.png': '../templates/default/src/assets/images/logo.png',
    './src/assets/styles/common.styl': '../templates/default/src/assets/styles/common.styl',
    './src/assets/styles/variables.styl': '../templates/default/src/assets/styles/variables.styl'
  })
}