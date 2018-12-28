/*
 * @Author: lihaitao 
 * @Date: 2018-12-28 11:55:26 
 * @Last Modified by:   lihaitao 
 * @Last Modified time: 2018-12-28 11:55:26 
 */
const  { Assets } = require('./modules/index.js')
module.exports = (api, opts, rootOptions) => {
  if (opts.replace) {
    Assets(api)
  } else {
    console.log('没有任何更改！')
  }
}