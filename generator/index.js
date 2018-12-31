/*
 * @Author: lihaitao 
 * @Date: 2018-12-28 11:55:26 
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-31 13:03:30
 */
const  { Default } = require('./modules/index.js')
module.exports = (api, opts, rootOptions) => {
  if (opts.replace) {
    Default(api)
  } else {
    console.log('没有任何更改！')
  }
}