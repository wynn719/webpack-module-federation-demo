import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'hash'
})

new Vue({
  el: '#app4-root',
  render: h => h(App),
  router
});