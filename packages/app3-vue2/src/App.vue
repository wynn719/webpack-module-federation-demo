<template>
  <div class="app-root">{{ title }}
    <button @click="isShowShared = !isShowShared">懒加载app4的模块</button>
    <shared v-if="isShowShared"></shared>
  </div>
</template>

<script>
import Loading from './Loading.vue';

const Shared = () => ({
  component: import('app4/Shared'),
  loading: Loading,
  error: 'error',
  delay: 2000,
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