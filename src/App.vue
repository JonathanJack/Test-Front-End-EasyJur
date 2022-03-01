<template>
 <v-app>
    
    
  <div class="adjust-align backgroung-color">
    <Header/>     
    <Menu v-if="calcScreenWidth"/>    
    <v-row >          
        <Grafico 
        class="col-12 col-md-6" 
        compTittle="Vendas totais | últimos 3 meses"          
        compColor="#5a8929"   
        :totalQuarterSales="totalQuarterSales"
        />
        <Grafico   
        class="col-12 col-md-6"
        compTittle="Vendas totais por produto"
        :totalQuarterSales="this.compProdutos[0].vendaTri"
        />                            
    </v-row>    
    <Produtos :compProdutos="compProdutos" />        
                             
  </div>
</v-app>
</template>

<script>
import Produtos from './components/Produtos';
import Header from './components/Header'
import Grafico from './components/Grafico'
import Menu from './components/Menu'


export default {
  name: 'App',

  components: {
    Header,
    Produtos,    
    Grafico,
    Menu,
  },
  data(){
    return{
      compProdutosTotal: [],
      totalQuarterSales: [],      
    }
  },
   created(){
    this.obtemProdutos()
    this.calcTotalQuarterSales()

    
  },
  mounted(){
    this.calcScreenWidth()
  },

  methods: {


      calcTotalQuarterSales(){
        let v1 = 0;
        let v2 = 0;
        let v3 = 0;

        for(var i = 0; i<this.compProdutos.length;i++){
         
          v1 += this.compProdutos[i].vendaTri[0] ;
          v2 += this.compProdutos[i].vendaTri[1] ;
          v3 += this.compProdutos[i].vendaTri[2] ;
        }
        this.totalQuarterSales = [v1,v2,v3];                 
      },
      calcScreenWidth(){
        console.log(window.innerWidth)
        return window.innerWidth >= 576;
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
              vendaTri: [3,15,60]
            },
            {
              name: 'Arroz',
              categoria: 'Organico',
              quantidade: 15,
              preco: 5.00,
              vendas: 3,
              estoque: 'sim',
              vendaTri: [3,15,60]
            },
            {
              name: 'pera',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 2,
              estoque: 'nao',
              vendaTri: [3,15,60]
            },
            {
              name: 'couve',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 10,
              estoque: 'sim',
              vendaTri: [10,10,10]
            },
            {
              name: 'Shitake',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 2,
              estoque: 'sim',
              vendaTri: [10,10,10]
            },
            {
              name: 'Arroz',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 10,
              estoque: 'sim',
              vendaTri: [10,10,10]
            },
            {
              name: 'Feijão',
              categoria: 'Comum',
              quantidade: 15,
              preco: 25.00,
              vendas: 23,
              estoque: 'sim',
              vendaTri: [10,10,10]
            },
            {
              name: 'Maionese',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 6,
              estoque: 'sim',
              vendaTri: [10,10,10]
            },
            {
              name: 'Shoyu',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 5,
              estoque: 'sim',
              vendaTri: [10,10,10]
            },
            {
              name: 'Miojo',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 3,
              estoque: 'sim',
              vendaTri: [10,10,10]
            },
            {
              name: 'Lasanha',
              categoria: 'Industrial',
              quantidade: 15,
              preco: 25.00,
              vendas: 25,
              estoque: 'sim',
              vendaTri: [10,10,10]
            },
            
          ]
        }
  },  
};
</script>

<style>

@media(min-width:992px){
  .adjust-align{
    padding: 5% 0px 0px 5%
  }
}


.backgroung-color{
  background-color: #f2f8ff;      
}
</style>
