<template>
  <div class="mx-5">
    <h1>Reportes</h1>
    <div
      class="row d-flex flex-row"
      v-for="report in reports"
      :key="report.title"
    >
      <div class="reportes d-flex border col-10 border-dark p-3 mb-3">
        <div class="col-2 p-3">{{ report.title }}</div>
        <div class="col-3 d-flex flex-column p-2">
          <div class="">{{ report.last }}</div>
          <div class="mt-2">{{ report.variability }}</div>
        </div>
        <div class="col-2">Recomendación: {{ report.recomended }}</div>
        <div class="col-2">Vigente: {{ report.recomended }}</div>
        <div class="col-2">Pronóstico: {{ report.probability }}%</div>
        <div class="col-1">Botones</div>
      </div>
      <div class="col-1">
        {{ report.timestamp }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reportes",
  data: function() {
    return {
      reports: [
        {
          title: "AAPL:NASDAQ",
          description: "Último operado 555, <br>variación diaria",
          last: "Último operado $100",
          variability: "variación diaria: 5 (5%)",
          recomended: "NO",
          probability: 65,
          timestamp: 1596575331
        },
        {
          title: "MSFT:NASDAQ",
          description: "Último operado",
          recomended: "NO",
          probability: 65,
          timestamp: 1596575353
        }
      ]
    };
  }
};
</script>
<style lang="css" scoped>
.reporte {
  text-align: left;
}
</style>
