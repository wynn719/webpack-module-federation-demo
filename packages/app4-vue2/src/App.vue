<template>
  <div class="app-root">
    {{ title }}
    <shared></shared>
  </div>
</template>

<script>
import Shared from "./components/Shared.vue";

export default {
  name: "app",
  components: {
    Shared,
  },
  data() {
    return {
      title: "app4 title",
    };
  },
};
</script>
