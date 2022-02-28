<template>
<v-card class="pa-2 mx-1" 

rounded
hover
 
 >
 
    <div class="text-h5 mb-4">
        Mais vendidos
    </div>

    <v-simple-table dense class="text-center">
        <template v-slot:default>
          <thead>
            <tr>
              <th>categoria</th>
                <th>Produto</th>
                <th>Quantidade</th>
                
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in maisVendidos"
              :key="item.name"
            >
              <td>{{ item.categoria }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.vendas }}</td>
              
            </tr>
          </tbody>
        </template>
      </v-simple-table>

    <!--<table>
        <thead class="d-flex justify-space-between">
            <tr>
                <th>categoria</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Lucro</th>
            </tr>
        </thead>
        <tbody v-for="item in maisVendidos" :key="item.name" class="d-flex justify-space-between">
            <tr>
                <td>{{item.categoria}}</td>
                <td>{{item.name}}</td>
                <td>{{item.vendas}}</td>
                <td>{{item.cash}}</td>
                <td>adsads</td>
            </tr>    
        </tbody>
    </table> -->
 
      
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
    created(){
        this.calculaVendas(this.produtos)
    }
}

</script>

<style></style>