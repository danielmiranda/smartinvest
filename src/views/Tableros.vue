<template>
  <div class="main-content row col-12">
    <div>
      <span class="h4 ml-5">AAPL:NASDAQ</span>
      <span class="h6 ml-5">Cierre: 425.04</span>
    </div>
    <div class="col-10">
      <TVChartContainer datafeedUrl="https://smartinvest.com.ar/stock-invest" />
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
</template>
<script>
//datafeedUrl="http://localhost:8080/GUIA/stock2020"
//<TVChartContainer datafeedUrl="http://sany.life/stock-invest" />
//<TVChartContainer datafeedUrl="http://localhost:8080/GUIA/stock-invest" />
//<TVChartContainer datafeedUrl="https://smartinvest/stock-invest" />

import TVChartContainer from "@/components/TVChartContainer.vue";
export default {
  name: "Tableros",
  components: { TVChartContainer },
  data: function() {
    return {
      items: [],
      isOpen: false
    };
  }
};
</script>

<style>
.main-content {
  top: 10px;
  margin-left: 20px;
}
</style>
