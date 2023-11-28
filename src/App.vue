<script>
import { store } from '../store';
import AppHeader from './components/AppHeader.vue';


export default {
  components: { AppHeader},
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <div class="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>