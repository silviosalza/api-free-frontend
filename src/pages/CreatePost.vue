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
            selectedTags: []
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
        },
        handleCheckboxChange(tag) {
      console.log('Tag selezionato:', tag);
      console.log('Tags selezionati:', this.selectedTags);
    },
    isSelected(tag) {
      return this.selectedTags.includes(tag);
    }
    },
    mounted() {
        this.getCategories();
        this.getTags();
    }
}
</script>

<template>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="My Title">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Content</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <select class="form-select" aria-label="Default select example">
        <option selected>Category</option>
        <option value="1">One</option>
    </select>
    <div>
    <label v-for="(tag, index) in store.tags" :key="index" :class="{'btn': true, 'btn-primary': isSelected(tag)}">
      <input type="checkbox" class="btn-check" :id="'btn-check-' + index" v-model="selectedTags" :value="tag" @change="handleCheckboxChange(tag)">
      {{ tag.name }}
    </label>
  </div>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
</style>