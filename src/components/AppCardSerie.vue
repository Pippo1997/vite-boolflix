<script>
import { store } from '../store.js';

export default {
    data() {
        return{
             store,
        }
    },
    methods: {
        filledStars() {
            let starFull = Math.round(this.serie.vote_average / 2);
            let starsFilledArr = [];

            for (let i = 0; i < starFull; i++) {
                starsFilledArr.push('fa-solid fa-star');
            }

            let starEmpty = 5 - starFull;
            for (let i = 0; i < starEmpty; i++) {
                starsFilledArr.push('fa-regular fa-star');
            }
            return starsFilledArr
        },
    },
    props: {
        serie: Object,
    }
}
</script>

<template lang="">
    <div class="col-12 col-md-3 mt-3">
        <div class="cards">
            <img class="cards-img" :src="`https://image.tmdb.org/t/p/w342/${(serie.poster_path)}`" alt="poster">
            <div class="cards-list p-4">
                <h4>{{ serie.title }}</h4>
                <p>Titolo originale: {{ serie.original_name }}</p>
                <p>Lingua: {{ serie.original_language }}</p>
                <p>Voto: 
                    <i v-for="(value, index) in filledStars()" :key="index" :class="value"></i>
                </p>
                <img class="flag" :src="`https://unpkg.com/language-icons/icons/${(serie.original_language)}.svg`" alt="flag">
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
        width: 25%
    }

</style>