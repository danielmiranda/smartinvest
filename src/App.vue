<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="faded">
        <burger v-b-toggle.sidebar-1 class="mr-1"></burger>
        <b-navbar-brand href="#">
          <img src="@/assets/logo-smartinvest.png" alt="Smart Invest" />
        </b-navbar-brand>
        <div>
          <span class="h4 ml-5">AAPL:NASDAQ</span>
          <span class="h6 ml-5">Cierre: 425.04</span>
        </div>

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

    <b-sidebar id="sidebar-1" title="" shadow bg-variant="dark">
      <div class="px-3 py-2">
        <img
          src="@/assets/iso-smartinvest.png"
          alt="Smart Invest"
          class="m-5"
        />
        <b-list-group>
          <b-list-group-item v-for="item in items" :key="item.message">
            {{ item.message }}
            <b-badge>3</b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>

    <div class="main-content row col-12">
      <div class="col-10">
        <TVChartContainer
          datafeedUrl="http://localhost:8080/GUIA/stock-invest"
        />
      </div>

      <div class="col-2">
        <div class="bs-example">
          <div class="list-group">
            <!-- <a href="#" class="list-group-item list-group-item-action">
              <i class="fa fa-camera"></i> Graficar
              <span class="badge badge-pill badge-primary pull-right">145</span>
            </a> -->
            <a href="#" class="list-group-item list-group-item-action">
              <font-awesome-icon icon="chart-bar" class="mr-2" />Graficar
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <font-awesome-icon icon="flask" class="mr-2" /> Analizar
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <font-awesome-icon icon="chart-line" class="mr-2" />
              Estadísticas
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <font-awesome-icon icon="layer-group" class="mr-2" /> Fundamental
            </a>
          </div>
        </div>
      </div>
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
import TVChartContainer from "@/components/TVChartContainer.vue";
export default {
  components: { Burger, TVChartContainer },
  data: function() {
    return {
      items: [
        { message: "Tableros" },
        { message: "Reportes" },
        { message: "Alertas" }
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
  margin-left: 235px;
}

.main-content {
  top: 10px;
  margin-left: 20px;
}
#sidebar-1 .close {
  color: aliceblue !important;
}
</style>
