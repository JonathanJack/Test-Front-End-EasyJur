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
    :items="desserts"
    :search="search"
    :custom-filter="filter"
    item-key="name"
    sort-by="name"  
    group-by="categoria"
      
    
  >
    <template v-slot:group.header="{items,isOpen,toggle}">
      <th colspan="4">
        <v-icon @click="toggle">{{isOpen ? 'mdi-minus' : 'mdi-plus'}}</v-icon>
        {{ items[0].categoria }}
      </th>
    </template>
    <template v-slot:item="{ item }">
     <tr>
      <td>{{item.name}}</td>
      <td>{{item.quantidade}}</td>
      <td>{{item.preco}}</td>
      <td>{{item.status}}</td>
     </tr>
    </template>
  
  </v-data-table>
</div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'Produto',value: 'name'},
          { text: 'Quantidade', value: 'quantidade'},
          { text: 'Preço', value: 'preco'},
          { text: 'Existe em estoque?', value: 'status'},
          
        ],
        desserts: [
          {
            name: 'Maça',
            quantidade: 50,
            preco: 100,
            status: 'Sim',
            categoria: 'Comum'
          },
          {
            name: 'banana',
            quantidade: 23,
            preco: 15.00,
            status: 'Sim',
            categoria: 'Comum'
          },   
            {
            name: 'boja',
            quantidade: 50,
            preco: 30,
            status: 'Não',
            categoria: 'Orgânico'
          },
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },   
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },  
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },  
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },  
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },        
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },  
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },  
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },  
          {
            name: 'carro',
            quantidade: 23,
            preco: 4,
            status: 'Não',
            categoria: 'Orgânico'
          },  
          
        ],
      }
    },
    methods: {
      filter(value,search,item){
        let inName = RegExp(search,'i').test(item.name)
        let inStatus = RegExp(search,'i').test(item.status)

        return inName | inStatus
      }
    }
  }
</script>
