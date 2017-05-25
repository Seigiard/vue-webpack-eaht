import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const state = {
  doSomething: false
};

const getters = {};

const mutations = {
  DO_SOMETHING(state) {
    state.doSomething = !state.doSomething;
  }
};

const actions = {
  doSomething({ commit }) {
    commit('DO_SOMETHING');
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: true, // process.env.NODE_ENV === 'production',
  plugins: [
    createPersistedState({
      key: '{{name}}-storage'
      // paths: [] // If you want to save special paths in storage
    })
  ]
});

export default store;
