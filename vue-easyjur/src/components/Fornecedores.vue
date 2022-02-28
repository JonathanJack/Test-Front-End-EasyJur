<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>

          <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
          Top
                    </v-btn>
                  </template>
      <span>{{ item.fat }}</span>
    </v-tooltip>

          
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        expanded: [],
        singleExpand: false,
        dessertHeaders: [
          {
            text: 'Nome',            
            sortable: false,
            value: 'name',
          },          
          { text: 'Telefone Fixo', value: 'fat' },
          { text: 'Whataspp', value: 'carbs' },
          
          
          
        ],
        desserts: [
          {
            name: 'Frozean Yogurt',            
            fat: 'X',
            carbs: 'Y',           
          },
          {
            name: 'Frozsen Yogurt',            
            fat: 6.0,
            carbs: 24,           
          },
          {
            name: 'Frozsen Yogurt',            
            fat: 6.0,
            carbs: 24,           
          },
          {
            name: 'Frozsen Yogurt',            
            fat: 6.0,
            carbs: 24,           
          },
          {
            name: 'Frozsen Yogurt',            
            fat: 6.0,
            carbs: 24,           
          },    
        ],
      }
    },
  }
</script>

<style></style>