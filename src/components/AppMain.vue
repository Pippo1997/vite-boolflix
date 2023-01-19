<script>
import AppTopFilm from './AppTopFilm.vue';
import AppCardMovie from './AppCardMovie.vue'
import AppCardSerie from './AppCardSerie.vue';
import { store } from '../store.js';

export default {
    components: {
        AppTopFilm,
        AppCardMovie,
        AppCardSerie,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <div class="container mt-5">
        <h4>ORIGINALI NETFLIX</h4>
        <div class="row-top">
            <AppTopFilm v-for="(item, index) in store.TopFilm" :key="index" :Toprated="item"/>
        </div>
        <div class="row">
            <div class="col-12 m-5">
                <h5>Ho trovato {{ store.MovieList.length}} Film</h5>
            </div>
        </div>
        <div class="row">
            <AppCardMovie v-for="(item, index) in store.MovieList" :key="index" :movie="item" />
        </div>
        <div class="row">
            <div class="col-12 m-5">
                 <h5>Ho trovato {{store.SerieList.length}} Serie TV</h5> 
            </div>
        </div>
        <div class="row">
            <AppCardSerie v-for="(item, index) in store.SerieList" :key="index" :serie="item" />
        </div>
    </div>
</template>

<style lang="scss">
    .row-top{
        padding: 1em;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        margin-bottom: 2em;
    }
</style>