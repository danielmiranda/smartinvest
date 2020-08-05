import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Reportes from "@/views/Reportes.vue";
import Tableros from "@/views/Tableros.vue";
import Alertas from "@/views/Alertas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Tableros",
    component: Tableros
  },
  {
    path: "/reportes",
    name: "Reportes",
    component: Reportes
  },
  {
    path: "/tableros",
    name: "Tableros",
    component: Tableros
  },
  {
    path: "/alertas",
    name: "Alertas",
    component: Alertas
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
