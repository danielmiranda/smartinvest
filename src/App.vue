<template>
  <div id="app">
    <div v-if="getApiKey()">
      <div>
        <b-navbar toggleable="lg" type="light" variant="faded">
          <burger v-b-toggle.sidebar-1 class="mr-1"></burger>
          <b-navbar-brand href="#">
            <img src="@/assets/logo-smartinvest.png" alt="Smart Invest" />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-input-group size="sm" class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon icon="search"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    type="search"
                    placeholder="Buscar Análisis"
                  ></b-form-input>
                </b-input-group>
              </b-nav-form>

              <b-nav-item-dropdown v-if="username" :text="username" right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content">
                  <b-icon-person-fill variant="primary"
                    >Usuario</b-icon-person-fill
                  >
                </template>
                <b-dropdown-item href="#">Datos Personales</b-dropdown-item>
                <b-dropdown-item @click="onClickSalir">Salir</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <b-sidebar
        id="sidebar-1"
        title="Menu"
        width="210px"
        shadow
        close-label="Cerrar"
        bg-variant="dark"
        sidebar-class="minishow border-right"
      >
        <div class="px-3 py-0 center">
          <div class="align-content-center mx-auto">
            <img
              src="@/assets/iso-smartinvest.png"
              alt="Smart Invest"
              class="mb-3 mx-auto d-block"
            />
          </div>

          <b-list-group>
            <b-list-group-item v-for="item in items" :key="item.name">
              <router-link :to="item.link">{{ item.name }}</router-link>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-sidebar>
      <div class="mx-3">
        <router-view />
      </div>
    </div>

    <div v-else>
      <!-- <router-view /> -->
      <Login v-on:setKey="onSetKey"></Login>
    </div>
  </div>
</template>

<script>
//datafeedUrl="http://localhost:8080/GUIA/stock2020"
//<TVChartContainer datafeedUrl="http://sany.life/stock-invest" />
//<TVChartContainer datafeedUrl="http://localhost:8080/GUIA/stock-invest" />
//
import Burger from "@/components/Burger.vue";
import Login from "@/components/Login.vue";
//import { mapState } from "vuex";
import store from "@/store";

export default {
  components: { Burger, Login },
  props: ["Auth"],
  data: function() {
    return {
      items: [
        { name: "Tableros", link: "/tableros" },
        { name: "Reportes", link: "/reportes" },
        { name: "Alertas", link: "/alertas" }
      ],
      isOpen: false,
      username: "Usuario1"
    };
  },
  mounted() {
    console.log("mounted: " + store.getters.isAuthenticated);
    if (store.getters.isAuthenticated) {
      this.isOpen = true;
    }
  },
  //computed: mapState({
  //userId: state => state.account.userId,
  //key: state => state.account.key
  //}),
  methods: {
    logout() {
      console.log("logout: " + this.key);
      this.$store.commit("logout");
      this.isOpen = false;
      //this.$router.push("/logout");
      this.$forceUpdate();
    },
    getApiKey: function() {
      return this.isOpen;
    },
    onSetKey(value) {
      console.log("onSetKey App: " + value);
      //this.$store.commit("login", value);
      //this.$router.push("/");
      //this.$forceUpdate();
      //setTimeout(() => {
      //this.$forceUpdate();
      //}, 1500);
    },
    setKey2(val) {
      console.log("RESPOSE: " + val);
      //this.$emit("setKey", val);
      this.$store.commit("setKey", val);
      //Cookies.set("prueba", "DANI");
      window.location.href = "/";
      //this.$parent.isOpen = true;
      //this.$router.replace("/");
    },
    onClickSalir() {
      this.logout();
      console.log("onClickSalir");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.collapse.show ~ .main-content {
  margin-left: 205px;
}

.main-content {
  top: 10px;
  margin-left: 20px;
}
#sidebar-1 .close {
  color: aliceblue !important;
}
.minioshow {
  left: 100px;
}
</style>
