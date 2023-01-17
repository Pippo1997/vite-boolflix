<script>
import { store } from '../store.js';

export default {
    data() {
        return{
             store,
        }
    },
    props: {
        movie: Object,
    }
}
</script>

<template lang="">
    <div class="col-12 col-md-3 mt-3">
        <div class="card">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <h4>{{ movie.title }}</h4>
                <p>Titolo originale: {{ movie.original_title }}</p>
                <p>Lingua: {{ movie.original_language }}</p>
                <p>Voto: {{ movie.vote_average }}</p>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>