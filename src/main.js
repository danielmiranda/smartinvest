import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import store from "@/store";

import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faCamera,
  faChartBar,
  faChartLine,
  faFlask,
  faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import VueMomment {} from "vue-momment";
import VueMoment from "vue-moment";

library.add(
  faUserSecret,
  faCamera,
  faChartBar,
  faChartLine,
  faFlask,
  faLayerGroup
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

//Vue.use(require("vue-moment"));
Vue.use(VueMoment);

Vue.config.productionTip = false;

// Declaro un avariable global para guardar el KEY de identificacion
Vue.prototype.$APIKEY = null; // this.$APIKEY to access

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
