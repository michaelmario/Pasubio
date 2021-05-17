import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'w3-css/w3.css';
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
