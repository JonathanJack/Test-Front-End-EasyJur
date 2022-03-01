<template>
<v-card class="pa-2 mx-1"  rounded hover>

    <div class="text-h5 mb-4">
        Mais vendidos
    </div>

    <v-simple-table dense class="">
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
              v-for="item in topSales"
              :key="item.name"
            >
              <td>{{ item.categoria }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.vendas }}</td>
              
            </tr>
          </tbody>
        </template>
      </v-simple-table>          
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
            topSales: [],
            Products: this.compProdutos,
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

            this.topSales = max;
        }
    },
    created(){
        this.calculaVendas(this.Products)
    }
}

</script>

<style></style>