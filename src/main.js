import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify, VueAxios, axios)

const opts = {}

export default new Vuetify(opts)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
