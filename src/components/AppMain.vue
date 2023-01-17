<script>
import AppCard from './AppCard.vue'
import { store } from '../store.js';
import axios from 'axios';

export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store,
            TextInput: '',
        }
    },
    methods: {
        search(input) {
            let ApiCall = store.ApiMovie + input;

            axios.get(ApiCall).then((response) => {
                store.MovieList = response.data.results
                console.log(store.MovieList);
            })
        }
    },
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="input-group m-3">
                    <input type="text" class="form-control" placeholder="Cerca" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="TextInput" @keyup.enter="search(TextInput)">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"  @click="search(TextInput)"> 
                        Cerca 
                    </button>
                </div>
            </div>
        </div>
        <div class="m-5">
            Ho trovato {{ store.MovieList.length}} film!
        </div>
        <div class="row">
            <div class="col-12">
                <AppCard v-for="(item, index) in store.MovieList" :key="index" :movie="item" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>