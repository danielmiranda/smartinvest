import Vue from "vue";
import Vuex from "vuex";
import account from "./modules/account";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 1 }),
        //Cookies.set(key, value, { expires: 1, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});

export default store;
