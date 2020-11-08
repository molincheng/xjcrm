import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

// http://119.3.104.39:2302/swagger/index.html   api文档
axios.defaults.baseURL = 'http://119.3.104.39:2302/api/'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')