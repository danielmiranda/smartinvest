<template>
  <div>
    <Login v-on:setKey="onSetKey"></Login>
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Vue from "vue";

export default {
  components: { Login },
  methods: {
    onSetKey(value) {
      // console.log("onSetKey: " + value);
      Vue.$APIKEY = value;
      this.$router.push("/");
      //this.$parent.isOpen = true;
      //this.$parent.$forceUpdate();
      // setTimeout(() => {
      //   //this.$forceUpdate();
      // }, 1500);
    }
  }
};
</script>
