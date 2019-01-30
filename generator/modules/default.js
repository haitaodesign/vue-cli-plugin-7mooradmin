/*
 * @Author: lihaitao 
 * @Date: 2018-12-31 13:02:28 
 * @Last Modified by: lihaitao
 * @Last Modified time: 2019-01-29 14:46:41
 */

const modules = require('../templates/modules/index.js')
module.exports = api => {
  Object.keys(modules).forEach(item => {
    api.render('../templates/modules/' + modules[item], {}, {
      // 修改ejs模板变量分隔符，避免与vue项目的模板冲突
      delimiter: '$'
    })
  })
  // 新增依赖
  api.extendPackage({
    dependencies: {
      'vue': '^2.5.17',
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^3.3.0",
      '@vue/cli-service': '^3.3.0',
      '@vue/cli-plugin-eslint': '^3.3.0',
      '@vue/eslint-config-standard': '^4.0.0',
      'babel-eslint': '^10.0.1',
      'eslint': '^5.8.0',
      'eslint-plugin-vue': '^5.0.0',
      'vue-template-compiler': '^2.5.21',
    },
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    }
  })
}