/*
 * @Author: lihaitao 
 * @Date: 2018-12-31 13:02:28 
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-31 19:37:23
 */
const path = require('path')
module.exports = api => {
  api.render('../templates/default',{},{
    // 修改ejs模板变量分隔符，避免与vue项目的模板冲突
    delimiter: '$'
  })
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0',
      'echarts': '^4.2.0-rc.2',
      'element-ui': '^2.4.5',
      'lodash.clonedeep': '^4.5.0',
      'normalize.css': '^8.0.1',
      'qs': '^6.6.0',
      'v-charts': '^1.19.0',
      'vue': '^2.5.17',
      'vue-router': '^3.0.1',
      'vuex': '^3.0.1'
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^3.2.0",
      '@vue/cli-service': '^3.2.0',
      'babel-eslint': '^10.0.1',
      'babel-plugin-component': '^1.1.1',
      'element-theme-chalk': '^2.4.11',
      'eslint': '^5.8.0',
      'eslint-plugin-vue': '^5.0.0-0',
      'mockjs': '^1.0.1-beta3',
      'style-resources-loader': '^1.2.1',
      'stylus': '^0.54.5',
      'stylus-loader': '^3.0.2',
      'vue-cli-plugin-element': '^1.0.0',
      'vue-cli-plugin-style-resources-loader': '^0.1.3',
      'vue-template-compiler': '^2.5.17',
      'vuepress': '^0.14.8'
    }
  })
}