import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js';
import './assets/css/global.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/';
axios.interceptors.request.use((config) => {
  config.headers.Authorization = sessionStorage.getItem('token');
  return config;
});
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
