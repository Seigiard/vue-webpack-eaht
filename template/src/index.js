{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
{{#vuex}}
import { sync } from 'vuex-router-sync';
{{/vuex}}
import App from './App';
{{#router}}
import router from './router';
{{/router}}
{{#vuex}}
import store from './store';
{{/vuex}}

Vue.config.productionTip = false;

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  el: '#app',
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
});
