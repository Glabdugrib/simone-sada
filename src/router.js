import Vue from 'vue'
import VueRouter from 'vue-router';
import i18n from './i18n'

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
import HelloWorld from './components/HelloWorld.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
   {
      path: '/',
      redirect: `${i18n.locale}`
   },
   {
      path: '/:lang',
      component: {
         render (c) { return c('router-view') }  // cosa fa?
      },
      children: [
         {
            path: 'foo',
            // name: 'posts.index',
            component: HelloWorld
         },
         // {
         //    path: 'bar',
         //    name: 'posts.index',
         //    component: Bar
         // }
      ]
   }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
   mode: 'history',
   routes // short for `routes: routes`
})

export default router