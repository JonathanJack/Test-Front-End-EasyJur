<template>
<v-card
 class="mx-auto"
 max-width="344"
 outlined
 >
 <v-list-item three-line>
  <v-list-item-content>
    <div class="text-h5 mb-4">
        Mais vendidos
    </div>
    <div class="d-flex justify-space-between">
    <h6>categoria</h6>
    <h6>Produto</h6>
    <h6>Quantidade</h6>
    <h6>Lucro</h6>
    </div>
    <div v-for="item in produtos" :key="item.name" class="d-flex justify-space-between">
        <div>{{item.categoria}}</div>
        <div>{{item.name}}</div>
        <div>{{item.vendas}}</div>
        <div>{{item.cash}}</div>
    </div>
  </v-list-item-content>
 </v-list-item>  
      
</v-card>
</template>

<script>
export default {
    data(){
        return{
            maisVendidos: [],
            produtos: [
          {
            name: 'Yogurt',
            quantidade: 100,
            preco: 35.00,
            vendas: 10,
            cash: 175,
            categoria: 'Organico',
            status: 'Em estoque'
          },
          {
            name: 'casa Yogurt',
            quantidade: 300,
            preco: 15.00,
            vendas: 5,
            cash: 75,
            categoria: 'Comum',
            status: 'Em estoque'
          }, 
          {
            name: 'frango',
            quantidade: 100,
            preco: 35.00,
            vendas: 4,
            cash: 175,
            categoria: 'Organico',
            status: 'Em estoque'
          },
          {
            name: 'peixe',
            quantidade: 300,
            preco: 15.00,
            vendas: 1,
            cash: 75,
            categoria: 'Comum',
            status: 'Em estoque'
          },                              
        ],
        }
    },
    methods: {
        calculaVendas(array){            
           var arr = array;

            var obj = arr.reduce((r, o) => (o.value < (r[o.name] || {}).value || (r[o.name] = o), r), {});

            console.log( Object.values(obj) );
        }
    },
    mounted(){
        this.calculaVendas(this.produtos)
    }
}

</script>

<style></style>