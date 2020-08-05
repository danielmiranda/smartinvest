<template>
  <div id="app">
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
              <b-dropdown-item @click="logoutClick">Exit</b-dropdown-item>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
      no-close-on-route-change="True"
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
</template>

<script>
//datafeedUrl="http://localhost:8080/GUIA/stock2020"
//<TVChartContainer datafeedUrl="http://sany.life/stock-invest" />
//<TVChartContainer datafeedUrl="http://localhost:8080/GUIA/stock-invest" />
//
import Burger from "@/components/Burger.vue";
export default {
  components: { Burger },
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
