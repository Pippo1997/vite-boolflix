<script>
import AppCardMovie from './AppCardMovie.vue'
import AppCardSerie from './AppCardSerie.vue';
import AppTopFilm from './AppTopFilm.vue';
import { store } from '../store.js';

export default {
    components: {
        AppCardMovie,
        AppCardSerie,
        AppTopFilm,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 m-5">
                 Ho trovato {{ store.MovieList.length}} film e {{store.SerieList.length}} serie
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <AppTopFilm v-for="(item, index) in store.TopFilm" :key="index" :TopRated="item"/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <AppCardMovie v-for="(item, index) in store.MovieList" :key="index" :movie="item" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <AppCardSerie v-for="(item, index) in store.SerieList" :key="index" :serie="item" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>