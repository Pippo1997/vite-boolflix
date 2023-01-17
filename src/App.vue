<script>
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
  components: {
    AppMain,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template lang="">
  <div>
    <AppMain />
  </div>
</template>

<style lang="scss">
    @use './styles/generals.scss' as *;
</style>
