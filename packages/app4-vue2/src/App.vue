<template>
  <div class="app-root">
    sdfdsfds
    {{ title }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "app4 title",
    };
  },
  mounted() {
    console.log('mounted');
  }
};
</script>
