<script>
import { store } from '../../store';
export default {
  name: "postCard",
  props: {
    post: Object,
  },

  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="card mb-5" style="height: 10rem;">
    <div class="card-body d-flex flex-column justify-content-center">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.content }}</p>
      <p class="card-text">{{ post.category.name }}</p>
      <div class="">
        <span v-for="(element, index) in post.tags" :key="index" class="card-text">{{ element.name }}{{ index
          !==
          post.tags.length - 1 ? ', ' : '' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>