<script>
import { store } from '../store';


export default {
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>