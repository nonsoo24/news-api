import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const apiKey = '9ea7329bd4964071a04d0f095746f02b'
axios.defaults.baseURL = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}&sortBy=publishedAt&`
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
