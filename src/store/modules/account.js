const state = {
  userId: null,
  key: null,
  authentication: {
    token: "",
    authenticated: -1
  }
};

const mutations = {
  logout(state) {
    state.userId = null;
    state.key = null;
  },
  login(state, userId) {
    state.userId = userId;
  },
  setKey(state, value) {
    state.key = value;
  }
};

const getters = {
  isAuthenticated: state => state.key
  // isAuthenticated: state => state.authentication.authenticated
};

export default {
  state,
  mutations,
  getters
};
