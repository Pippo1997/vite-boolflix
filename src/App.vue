<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  created(){
    this.TopRated();
  },
  methods:{
    TopRated(){
      axios.get(store.ApiTopFilm).then((response) => {
        store.ApiTopFilm = response.data.results
      })
    }
  }
}
</script>

<template lang="">
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
    @use './styles/generals.scss' as *;
</style>
