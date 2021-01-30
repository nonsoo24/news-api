import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org';
axios.interceptors.request.use((config) => config);
axios.interceptors.response.use((response) => response);

Vue.config.errorHandler = function (err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`)
}

Vue.config.productionTip = false;
Vue.use(axios)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
