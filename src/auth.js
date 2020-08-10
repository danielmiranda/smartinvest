import axios from "axios";

const ENDPOINT_PATH = "https://smartinvest.com.ar/auth/";
// const ENDPOINT_PATH = "http://localhost:8080/GUIA/auth/";
//http://localhost:8080/GUIA/auth/

export default {
  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH, user, {
      headers: {
        CLIENTID: "1",
        SECRETKEY: "SECRETKEY"
      }
    });
  }
};

// $clientId = $_SERVER['HTTP_X_CLIENT_ID'];
// $secret = $_SERVER['HTTP_X_SECRET'];
