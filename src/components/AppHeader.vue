<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            TextInput: '',
        }
    },
    methods: {
        Search(input) {
            let MovieCall = store.ApiMovie + input;
            let SerieCall = store.ApiSerie + input;

            axios.get(MovieCall).then((response) => {
                store.MovieList = response.data.results
            })

            axios.get(SerieCall).then((response) => {
                store.SerieList = response.data.results
            })
        }
    }
}
</script>

<template lang="">
    <div class="container d-flex mt-3 justify-content-between align-items-center">
        <div class="col-sx d-flex align-items-center">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/720px-Netflix_2015_logo.svg.png" alt="netflix_logo">
            </div>
            <nav class="text-align-center">
                <ul class="d-flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Serie Tv</a></li>
                    <li><a href="/">Film</a></li>
                    <li><a href="/">Originali</a></li>
                    <li><a href="/">Aggiunti di recente</a></li>
                    <li><a href="/">La mia lista</a></li>
                </ul>
            </nav>
        </div>
        <div class="col-dx d-flex align-items-center">
            <div class="margin">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Brooklin 99" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="TextInput" @keyup.enter="Search(TextInput)">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"  @click="Search(TextInput)"> 
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div>
                <a href="/">BAMBINI <i class="fa-solid fa-sort-down"></i></a>
                <a href="/"><i class="fa-solid fa-bell"></i></a> 
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    img{
        width: 100px;
    }

    ul{
        list-style-type: none;
    }

    .margin{
        margin-right: 2rem;
    }
</style>