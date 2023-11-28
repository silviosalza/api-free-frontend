<script>
import axios from 'axios';
import { store } from '../../store';
import { RouterLink } from 'vue-router';
import postCard from '../components/postCard.vue';

export default {
    components: {
        RouterLink,
        postCard
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getPosts() {
            axios.get(this.store.myUrlPost)
                .then(response => {
                    this.store.posts = response.data;
                    console.log(this.store.posts);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        this.getPosts();
    }
}
</script>

<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-3" v-for="(element, index) in store.posts" :key="index">
                <postCard :post="element" />
            </div>
        </div>

    </div>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
</style>