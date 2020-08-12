<template>
  <div>
    <Login v-on:setKey="onSetKey"></Login>
  </div>
</template>
<script>
import Login from "@/components/Login.vue";

export default {
  components: { Login },
  methods: {
    onSetKey(value) {
      console.log("onSetKey: " + value);

      //this.$router.push("/tableros");

      //this.$store.commit("login", value);

      this.$store.commit("setKey", value);
      //this.$router.push("/");
      //this.$router.replace("/");
      //this.$router.replace("/");

      window.location.href = "/";

      //this.$parent.isOpen = true;

      //this.$parent.$forceUpdate();
      //setTimeout(() => {
      //this.$parent.isOpen = true;
      //   //this.$forceUpdate();
      //}, 1500);
    }
  }
};
</script>
