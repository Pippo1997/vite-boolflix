<script>
import { store } from '../store.js';

export default {
    data() {
        return{
             store,
        }
    },
    props: {
        Toprated: Object,
    }
}
</script>

<template lang="">
    <div class="col-12 col-md-3 mt-3">
        <div class="cards">
            <img class="cards-img" :src="`https://image.tmdb.org/t/p/w342/${(Toprated.poster_path)}`" alt="">
            <div class="cards-list p-4">
                <h4>{{ Toprated.title }}</h4>
                <p>Titolo originale: {{ Toprated.original_title }}</p>
                <p>Lingua: {{ Toprated.original_language }}</p>
                <p>Voto: {{ Toprated.vote_average }}</p>
                <img class="flag" :src="`https://unpkg.com/language-icons/icons/${(Toprated.original_language)}.svg`" alt="flag">
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    .cards{
        position: relative;

        .cards-img {
            display: block;
            width: 100%;
            transition: .5s ease;
            backface-visibility: hidden;
        }
    
        .cards-list {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .5s ease;
        }

    }

    .cards:hover .cards-img {
        opacity: 0.2;
    }

    .cards:hover .cards-list {
        opacity: 1;
    }

    .flag{
        width: 25%;
    }
    
</style>