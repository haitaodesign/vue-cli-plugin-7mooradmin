import RouterModules from './modules'
import Layout from '@/layouts/base-layout.vue'
const commonRoute = [{
  path: '/',
  hidden: true,
  name: '_home',
  redirect: '/home',
  component: Layout,
  children: RouterModules
}]
export default commonRoute
