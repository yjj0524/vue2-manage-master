import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;

//全局注册axios
Vue.prototype.axios = axios;

Vue.use(ElementUI);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
