import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Reportes from "@/views/Reportes.vue";
import Tableros from "@/views/Tableros.vue";
import Home from "@/views/Home.vue";
import Alertas from "@/views/Alertas.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  console.log("ifNotAuthenticated: " + Vue.$APIKEY);
  if (!Vue.$APIKEY) {
    next();
    return;
  }

  next("/");
};

const ifAuthenticated = (to, from, next) => {
  console.log("ifAuthenticated: " + Vue.$APIKEY);
  if (Vue.$APIKEY) {
    next();
    return;
  }

  next("/login");
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/reportes",
    name: "Reportes",
    component: Reportes,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/tableros",
    name: "Tableros",
    component: Tableros,
    beforeEnter: ifAuthenticated,
    props: () => ({ Auth: Vue.$APIKEY })
  },
  {
    path: "/alertas",
    name: "Alertas",
    component: Alertas,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/about",
    name: "About",
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
