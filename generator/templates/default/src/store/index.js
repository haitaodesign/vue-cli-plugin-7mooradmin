import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'
import Root from './root/index.js'
import modules from './modules/index'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  ...Root,
  modules,
  strict: debug,
  plugins: debug ? [CreateLogger()] : []
})
