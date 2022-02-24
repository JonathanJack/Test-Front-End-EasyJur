<template>
  <v-app>
    

    <v-main class="d-flex">
    <Header/>
    <div class="d-flex ">
    <div>
    <Produtos2 :compProdutos="compProdutos"/>
    </div>
    <div class="w-25">
    <TopVendas :compProdutos="compProdutos"/>
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
  data(){
    return{
      compProdutos: []
    }
  },
  methods: {
    // obtemProdutos(){
    //        var url = 'https://6216e49871e7672e536dd831.mockapi.io/produtos'
            
    //        fetch(url)                        
    //        .then(res => res.json())
    //        .then(res =>{this.compProdutos = res})                        
    //        .catch(err => console.log(err))    
    //     },

        obtemProdutos(){
          this.compProdutos = [
            {
              name: 'Feijão',
              categoria: 'Organico',
              quantidade: 15,
              preco: 25.00,
              vendas: 5,
              estoque: 'sim'
            },
            {
              name: 'Arroz',
              categoria: 'Organico',
              quantidade: 15,
              preco: 5.00,
              vendas: 3,
              estoque: 'sim'
            },
            {
              name: 'pera',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 2,
              estoque: 'sim'
            },
            {
              name: 'couve',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 10,
              estoque: 'sim'
            },
            {
              name: 'Shitake',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 2,
              estoque: 'sim'
            },
            {
              name: 'Arroz',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 10,
              estoque: 'sim'
            },
            {
              name: 'Feijão',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 23,
              estoque: 'sim'
            },
            {
              name: 'Maionese',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 6,
              estoque: 'sim'
            },
            {
              name: 'Shoyu',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 5,
              estoque: 'sim'
            },
            {
              name: 'Miojo',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 3,
              estoque: 'sim'
            },
            {
              name: 'Lasanha',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 25,
              estoque: 'sim'
            },
            
          ]
        }
  },
  created(){
    this.obtemProdutos()
  }

 
};
</script>
