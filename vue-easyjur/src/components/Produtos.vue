<template>
<div>
  <input
    type="text"
    placeholder="Buscar"
    v-model="search"
  >
  <v-simple-table
    fixed-header
    height="300px"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
          <th class="text-left">
            Preço
          </th>
          <th class="text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in produtos"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.quantidade }}</td>
          <td>{{ item.preco }}</td>
          <td>{{ item.status }}</td>
         
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
  
  // const performSearch = (rows,term) => {
  //   const results = rows.filter(      
  //     row => row.join(" ").includes(term)
  //   )

  //   return results;
  // }
  
  export default {
    name: 'HelloWorld',

    data: () => ({
      search: '',
      produtos: [
          {
            name: 'Yogurt',
            quantidade: 100,
            preco: 35.00,
            status: 'Em estoque'
          },
          {
            name: 'casa Yogurt',
            quantidade: 300,
            preco: 15.00,
            status: 'Em estoque'
          },                              
        ],
        rows: []
    }),
    methods: {
      // onSearch (e){
      //   const term = e.target.value;
      //   console.log(this.rows)
      //   this.rows = performSearch(this.rows, term); 
      // }
    },
    computed: {
      filtro: function(){        
        return this.produtos.filter((row) => {
            return row.match(this.search)
        });
      }
    },
    // mounted(){
    //   this.rows = this.produtos;
    // }
  }
</script>
