import { Assets } from './modules/index.js'
module.exports = (api, opts, rootOptions) => {
  if (opts.replace) {
    Assets(api)
  } else {
    console.log('没有任何更改！')
  }
}