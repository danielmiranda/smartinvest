<template>
  <div>
    <h1>LOGOUT</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("Logout");
    this.$store.commit("logout");
    this.$router.push("/");
  }
};
</script>
