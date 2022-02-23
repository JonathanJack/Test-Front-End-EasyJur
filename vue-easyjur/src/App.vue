<template>
  <v-app>
    

    <v-main class="d-flex">
    <Header/>
    <div class="d-flex">
    <div class="w-75">
    <Produtos2/>
    </div>
    <div class="w-25">
    <TopVendas/>
    </div>
    </div>
    
    </v-main>
  </v-app>
</template>

<script>
// import Produtos from './components/Produtos';
import Produtos2 from './components/Produtos2';
import TopVendas from './components/TopVendas'
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    // Produtos,
    Header,
    Produtos2,
    TopVendas
  },

 
};
</script>
