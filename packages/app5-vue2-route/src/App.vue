<template>
  <div class="app-root">
    {{ title }}
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: "app",
  components: {
    Navigation,
  },
  data() {
    return {
      title: "app4 title",
    };
  },
};
</script>
