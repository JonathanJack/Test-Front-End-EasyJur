<template>
<div>  
  <v-text-field
    v-model="search"
    label="Buscar por nome ou status"
    single-line
    hide-details
    class="pl-2"
  />
  <v-data-table
    :headers="headers"
    :items="produtos"
    :search="search"
    :custom-filter="filter"
    item-key="name"
    sort-by="name"  
    group-by="categoria"
      
    
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
</div>
</template>

<script>
  export default {
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
          { text: 'Existe em estoque?', value: 'status'},
          
        ],
        produtos: this.compProdutos,
      }
    },
    methods: {      
      filter(value,search,item){
        let inName = RegExp(search,'i').test(item.name)
        // let inStatus = RegExp(search,'i').test(item.status)

        return inName
      }
    },
    mounted(){    
      console.log(this.compProdutos)  
    }
  }
</script>
