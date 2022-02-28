<template>
<div class="px-2">  
  
  <v-row>  
    <v-col cols="12" md="8">
      <v-text-field
    v-model="search"
    label="Buscar por nome ou status"
    single-line
    hide-details
   
  />

      <v-data-table
        
        :headers="headers"
        :items="produtos"
        :search="search"
        :custom-filter="filter"
        item-key="name"
        sort-by="name"  
        group-by="categoria"            
        mobile
        style="background-color: #f2f8ff"  
                                           
      >

        <template v-slot:group.header="{items,isOpen,toggle}">
          <th colspan="5">
            <v-icon @click="toggle">{{isOpen ? 'mdi-minus' : 'mdi-plus'}}</v-icon>
            {{ items[0].categoria }}
          </th>
        </template>
        <template v-slot:item="{ item }">
         <tr>
          <td>{{item.name}}</td>
          <td>{{item.quantidade}}</td>
          <td>{{item.preco}}</td>
          <td>{{item.vendas}}</td>
          <td>{{item.estoque}}</td>
         </tr>
        </template>

      </v-data-table>
    </v-col>  
    <v-col cols="12" md="4" class="mt-5">
      <TopVendas  class="mt-5" :compProdutos="produtos"/>
      <Fornecedores  class="mt-5" :compProdutos="produtos"/>
    </v-col>
  </v-row>
</div>
</template>

<script>
  import TopVendas from './TopVendas'
  import Fornecedores from './Fornecedores'

  export default {
    components: {
      TopVendas,
      Fornecedores
    },
    props: {
      compProdutos: []
    },
    data () {
      return {
        search: '',
        headers: [
          { text: 'Produto',value: 'name'},
          { text: 'Quantidade', value: 'quantidade'},
          { text: 'Preço', value: 'preco'},
          { text: 'Vendas', value: 'vendas'},
          { text: 'Existe em estoque?', value: 'estoque'},
          
        ],
        produtos: this.compProdutos,
      }
    },
    methods: {      
      filter(value,search,item){
        let inName = RegExp(search,'i').test(item.name)
        let inStatus = RegExp(search,'i').test(item.estoque)

        return inName | inStatus
      }
    },
    
  }
</script>

<style>
.teste{
  overflow-wrap: anywhere;
}
</style>

