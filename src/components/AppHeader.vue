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
    <nav class="d-flex">
        <ul class="d-flex align-items-center gap-3">
          <li>
            <img class="logo" src="../assets/WRC_1.png" alt="">
          </li>
            <li>
              <a class="link" aria-current="page" href="#"><router-link :to="{ name: 'home' }"
                  aria-current="page">RACING CALENDAR</router-link></a>
            </li>
            <li>
              <a class="link" href="#"><router-link :to="{ name: 'create' }" aria-current="page">CREATE EVENT</router-link></a>
            </li>
          </ul>
    </nav>
  </header>
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;
header{
  background-color: #202A44;
  color: white;
  font-size: 1.5rem;
  nav{
    height: 120px;
  }
  .logo{
    width: 100px;
  }
}

li{
  padding: 1rem;
  list-style: none;
  &:hover{
    background-color: #FC4C02;
  }
}
a{
  text-decoration: none;
  color: inherit;
}

</style>