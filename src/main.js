import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import  './firebase'
import {fA} from './firebase'
import { BootstrapVue, IconsPlugin,BootstrapVueIcons} from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import jQuery from 'jquery';
import Carousel3d from 'vue-carousel-3d';
import Aos from 'aos';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.use(Carousel3d);

window.$ = window.jQuery = jQuery;

import 'popper.js';
import './assets/app.scss';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

import 'firebaseui/dist/firebaseui.css';
import Swal from 'sweetalert2';

window.Swal = Swal;

Vue.config.productionTip = false
let app;

fA().onAuthStateChanged(function(user) {
 if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
    created(){
      Aos.init();
  },
  render: h => h(App),
 router,
 user,
 }).$mount('#app')
 }
});