/*
 * @Author: lihaitao 
 * @Date: 2018-12-31 13:02:28 
 * @Last Modified by: lihaitao
 * @Last Modified time: 2019-02-15 10:36:50
 */

const modules = require('../templates/modules/index.js')
module.exports = api => {
  Object.keys(modules).forEach(item => {
    api.render('../templates/modules/' + modules[item], {}, {
      // 修改ejs模板变量分隔符，避免与vue项目的模板冲突
      delimiter: '$'
    })
  })

  api.injectImports(api.entryFile,  `import '@/plugins/element.js'`)
  // 新增依赖
  api.extendPackage({
    dependencies: {
      'vue': '^2.5.17',
      "element-ui": "^2.4.5",
      "vue-router": "^3.0.1",
      "vuex": "^3.0.1",
      "normalize.css": "^8.0.1",
      "qs": "^6.6.0",
      "axios": "^0.18.0"
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
      "style-resources-loader": "^1.2.1",
      "stylus": "^0.54.5",
      "stylus-loader": "^3.0.2",
      "vue-cli-plugin-style-resources-loader": "^0.1.3",
      "element-theme": "^2.0.1",
      "element-theme-chalk": "^2.4.11",
      "mockjs": "^1.0.1-beta3"
    },
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    }
  })
}