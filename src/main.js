import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

Vue.config.productionTip = false

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
import VueRouter from 'vue-router';
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
      path: '/foo',
      // name: 'posts.index',
      component: HelloWorld
   },
   // {
   //    path: '/bar',
   //    // name: 'posts.index',
   //    component: Bar
   // }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
   mode: 'history',
   routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
   router,
   i18n,
   render: h => h(App)
}).$mount('#app')

// Now the app has started!
