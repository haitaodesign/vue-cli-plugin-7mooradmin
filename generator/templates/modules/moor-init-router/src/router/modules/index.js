
const modules = require.context('.', true, /\.js$/)
let moduleRoutes = []
modules.keys().forEach(key => {
  if (key !== './index.js') {
    moduleRoutes = moduleRoutes.concat(modules(key).default)
  }
})
export default moduleRoutes
