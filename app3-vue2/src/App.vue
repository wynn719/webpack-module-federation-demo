<template>
  <div class="app-root">{{ title }}
    <button @click="isShowShared = !isShowShared">lazy load Shared component</button>
    <shared v-if="isShowShared"></shared>
  </div>
</template>

<script>
const Shared = () => ({
  component: import('app4/Shared'),
  loading: 'loading...',
  error: 'error',
  delay: 1000,
  timeout: 3000,
});

export default {
  name: 'app',
  components: {
    Shared
  },
  data() {
    return {
      title: 'app3 title',
      isShowShared: false,
    }
  },
}
</script>