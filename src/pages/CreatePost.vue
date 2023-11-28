<script>
import axios from 'axios';
import { store } from '../../store';
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCategories() {
            axios.get(this.store.myUrlCat)
                .then(response => {
                    this.store.categories = response.data;
                    console.log(this.store.posts);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getTags() {
            axios.get(this.store.myUrlTag)
                .then(response => {
                    this.store.tags = response.data;
                    console.log(this.store.posts);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        this.getCategories();
        this.getTags();
    }
}
</script>

<template>
    <h1>creo post</h1>
        
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
</style>