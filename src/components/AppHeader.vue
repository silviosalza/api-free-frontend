<script>
import { RouterLink } from 'vue-router';
import { store } from '../../store';


export default {
  components: {
    RouterLink,
  },

  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><router-link :to="{ name: 'home' }"
                  aria-current="page">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link :to="{ name: 'create' }" aria-current="page">Crea Post</router-link></a>
            </li>
          </ul>
    </nav>
  </header>
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>