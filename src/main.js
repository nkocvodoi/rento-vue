import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Install BootstrapVue
Vue.use(BootstrapVue).use(IconsPlugin).use(Vuex).use(VueRouter)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
// Vue.use(Vuex)
// Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
