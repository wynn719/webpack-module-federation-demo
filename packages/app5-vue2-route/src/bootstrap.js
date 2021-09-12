import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from 'app4/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app4-root',
  render: h => h(App),
  router
});