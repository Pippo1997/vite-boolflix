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
        }
    }
}
</script>

<template lang="">
    <div>
        <AppCard />
    </div>
</template>

<style lang="scss">
    
</style>