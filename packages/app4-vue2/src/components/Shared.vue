<template>
  <div class="shared-component">{{title}}</div>
</template>

<script>
export default {
  name: 'shared',
  data() {
    return {
      title: 'app4 的 shared vue component'
    }
  }
}
</script>

<style>
.shared-component {
  display: block;
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
}
</style>