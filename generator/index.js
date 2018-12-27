module.exports = (api, opts, rootOptions) => {
  if (opts.replace) {
    api.render({
      './src/assets/logo.png': './templates/default/src/assets/img/logo.png',
      './src/App.vue': './templates/default/src/App.vue'
    })
  } else {
    console.log('没有任何更改！')
  }
}