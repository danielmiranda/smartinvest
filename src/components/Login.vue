<template>
  <div class="login">
    <h1 class="title">Ingresar</h1>
    <form action class="form" @submit.prevent="login" autocomplete="on">
      <label class="form-label" for="#email"
        >Email: (ingresar "prueba@smartinvest.com.ar")</label
      >
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Ingrese su email"
      />
      <label class="form-label" for="#password"
        >Password: (ingresar "prueba")</label
      >
      <input
        v-model="dataclave"
        class="form-input"
        type="password"
        id="dataclave"
        placeholder="Ingrese su clave"
      />
      <input class="form-submit" type="submit" value="Login" />
    </form>
    <router-link to="Reportes">Reportes</router-link>
  </div>
</template>
<script>
import auth from "@/auth";
import Cookies from "js-cookie";

export default {
  name: "Login",
  data: () => ({
    email: "",
    dataclave: "",
    error: false
  }),
  methods: {
    async login() {
      try {
        await auth
          .login(this.email, this.dataclave)
          .then(response => this.setKey(response.data));
      } catch (error) {
        this.error = true;
      }
    },
    setKey(val) {
      console.log("RESPOSE: " + val);
      this.email = null;
      this.dataclave = null;
      //this.$emit("setKey", val);
      this.$store.commit("setKey", val);
      Cookies.set("prueba", "DANI");
      window.location.href = "/";
      //this.$parent.isOpen = true;
      //this.$router.replace("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>
