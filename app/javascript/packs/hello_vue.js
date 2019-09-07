/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import TurbolinksAdapter from 'vue-turbolinks'
// import camelcaseKeys from 'camelize2'
// import snakecaseKeys from 'snakecase-keys'
import humps from 'humps'

import "../assets/stylesheets/main.scss"

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

import router from '../routes.js'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  Vue.router = router;
  const app = new Vue({
    router: router,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})


// Add X-CSRF-token to header and header json
document.addEventListener('turbolinks:load', () => {
  // This code will setup headers of X-CSRF-Token that it grabs from rails generated token in meta tag.
  axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  new Vue({
      mixin: [TurbolinksAdapter],
  })
})


// Change snake style to camelcase, keys from application
axios.defaults.transformResponse = [
  ...axios.defaults.transformResponse,
  data => humps.camelizeKeys(data)
]

// Change camelcase to snake style from vue to application
axios.defaults.transformRequest = [
  data => humps.decamelizeKeys(data),
  ...axios.defaults.transformRequest
]

// Vue.axios.defaults.headers = {
//   'Content-Type': 'application/json;charset=UTF-8',
//     "Access-Control-Allow-Origin": "*",
// }



// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
