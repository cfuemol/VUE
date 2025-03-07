<template>
  <div id="app">    
      <router-view />   
  </div>
</template>

<script>
import Planner from '@/views/planner.vue';
import Landing from '@/views/landing.vue';
import ahorcado2 from '@/views/ahorcado2.vue';
export default {
  name: 'App',
  components:{
    Planner,
    Landing,
    ahorcado2,
  }
  
}

</script>

<style scoped>

*{
  background-color: rgb(47, 87, 133);
  width:100%;
}

@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }  

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
