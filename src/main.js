import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import {
//   Button,
//   Select,
//   Notification
// } from 'element-ui'

import App from './App.vue'

Vue.use(ElementUI)
// Vue.use(Button)
// Vue.use(Select)
// Vue.use(Notification)

new Vue({
  el: '#app',
  render: h => h(App)
})
