import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";

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

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
