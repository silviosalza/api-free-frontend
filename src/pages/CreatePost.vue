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
            selectedCategory: null,
            selectedTags: [],
            formData: {
                title: '',
                imageURL: '',
                content: ''
            }
        }
    },
    methods: {
        getCategories() {
            axios.get(this.store.myUrlCat)
                .then(response => {
                    this.store.categories = response.data;
                    console.log(this.store.categories);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getTags() {
            axios.get(this.store.myUrlTag)
                .then(response => {
                    this.store.tags = response.data;
                    console.log(this.store.tags);
                })
                .catch(error => {
                    console.error(error);
                });
        },

        isSelected(tag) {
            return this.selectedTags.includes(tag);
        },
        submitForm() {
            const selectedTagIds = this.selectedTags.map(tag => tag.id);
            const payload = {
                title: this.formData.title,
                image: this.formData.imageURL,
                content: this.formData.content,
                category: this.selectedCategory,
                tags: selectedTagIds
            };
            axios.post('http://localhost:3000/posts', payload)
                .then(response => {
                    console.log('Dati inviati con successo:', response.data);
                })
                .catch(error => {
                    console.error('Errore durante l\'invio dei dati:', error);
                });
        },
    },
    mounted() {
        this.getCategories();
        this.getTags();
    }
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="My Title" v-model="formData.title">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Image URL</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Https://" v-model="formData.imageURL">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Content</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="formData.content"></textarea>
        </div>
        <label for="" class="form-label">Location</label>
        <select class="form-select" aria-label="Default select example" v-model="selectedCategory">
            <option v-for="(category, index) in store.categories" :key="index" :value="category.id">
                {{ category.name }}
            </option>
        </select>
        <label for="" class="form-label">Fondo</label>
        <div>
            <label v-for="(tag, index) in store.tags" :key="index" :class="{ 'btn': true, 'btn-primary': isSelected(tag) }">
                <input type="checkbox" class="btn-check" :id="'btn-check-' + index" v-model="selectedTags" :value="tag">
                {{ tag.name }}
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Invia</button>
    </form>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
</style>