<template>
  <v-app>
    

    <v-main class="d-flex">
    <Header/>
    <Grafico :totalQuarterSales="totalQuarterSales"/>
   <div class="d-flex ">
      <div>
        <Produtos2 :compProdutos="compProdutos" disabled/>
      </div>
      <div class="w-25">
        <TopVendas :compProdutos="compProdutos"/>
      </div>
    </div> 
    
    </v-main>
  </v-app>
</template>

<script>
import Produtos2 from './components/Produtos2';
import TopVendas from './components/TopVendas'
import Header from './components/Header'
import Grafico from './components/Grafico'

export default {
  name: 'App',

  components: {
    Header,
    Produtos2,
    TopVendas,
    Grafico,
  },
  data(){
    return{
      compProdutos: [],
      totalQuarterSales: []
    }
  },
  methods: {


      calcTotalQuarterSales(){
        let v1;
        let v2;
        let v3;

        for(var i = 0; i<this.compProdutos.length;i++){
         
          v1 = parseInt(v1) + parseInt(v2) ;
          v2 = this.compProdutos[i].vendaTri[1] ;
          v3 = this.compProdutos[i].vendaTri[2] ;
        }
        this.totalQuarterSales = [v1,v2,v3];                 
      },

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
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'Arroz',
              categoria: 'Organico',
              quantidade: 15,
              preco: 5.00,
              vendas: 3,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'pera',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 2,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'couve',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 10,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'Shitake',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 2,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'Arroz',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 10,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'Feijão',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 23,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'Maionese',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 6,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'Shoyu',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 5,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'Miojo',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 3,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            {
              name: 'Lasanha',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 25,
              estoque: 'sim',
              vendaTri: [15,20,1]
            },
            
          ]
        }
  },
  created(){
    this.obtemProdutos()
    this.calcTotalQuarterSales()
  }

 
};
</script>
