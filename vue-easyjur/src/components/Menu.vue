<template>
  <div >
    <v-navigation-drawer 
    app  
    clipped  
    dark 
    color="#356097"
    permanent
        expand-on-hover
    
    
    
    >
      <v-list>
        <v-list-item class="pr-0 " v-for="(aba,index) in abas" :key="index">
          <v-list-item-icon>
            <v-icon class="">XC</v-icon></v-list-item-icon>
          <v-list-item-title class="tittle-menu">{{aba.nome}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>


export default{
data(){
  return{
    abas: [
        {
          nome: "Home",          
          // icone: "mdi-home-variant-outline",
        },
        {
          nome: "Dashboard",          
          // icone: "mdi-home-variant-outline",
        },
        {
          nome: "Clientes",          
          // icone: "mdi-home-variant-outline",
        },
        {
          nome: "Fornecedores",          
          // icone: "mdi-home-variant-outline",
        },
    ]
  }
}
}
</script>

<style>
.tittle-menu{
  cursor: pointer;

 
}
 .item-list:hover{
    display: none;
  }

</style>