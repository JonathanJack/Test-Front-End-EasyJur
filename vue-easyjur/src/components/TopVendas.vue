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
    <div v-for="item in maisVendidos" :key="item.name" class="d-flex justify-space-between">
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
import _ from 'lodash';

export default {
    props:{
      compProdutos: []
    },
    data(){
        return{
            maisVendidos: [],
            produtos: this.compProdutos,
        }
    },
    methods: {
        calculaVendas(array){            
           let max = _
                .chain(array)
                .groupBy('categoria')
                .sortBy('vendas')
                .map(o => _(o).reverse().first())
                .flatten()
                .value();

            this.maisVendidos = max;
        }
    },
    mounted(){
        this.calculaVendas(this.produtos)
    }
}

</script>

<style></style>