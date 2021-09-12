<template>
  <div class="app-root">
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
};
</script>
