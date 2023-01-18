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
    <div class="container">
        <div class="row">
            <div class="col-6">
                logo
            </div>
            <div class="col-6">
                <div class="input-group m-3">
                    <input type="text" class="form-control" placeholder="Cerca" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="TextInput" @keyup.enter="Search(TextInput)">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"  @click="Search(TextInput)"> 
                        Cerca Film o Serie Tv
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>