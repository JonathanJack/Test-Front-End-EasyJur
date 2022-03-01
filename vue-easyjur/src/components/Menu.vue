<template>
  <div >
    <v-navigation-drawer 
    app  
    clipped  
    :v-model="null" 
    class="rounded-border"     
    color="#356097"    
    expand-on-hover            
    >
      <v-list>
        
         <div class="item-list ">
          <v-img class="item-img" :src="require('../assets/home.png')" ></v-img>         
          <span class="tittle-menu">Home</span>
         </div>
          <div class="item-list">
            <v-img class="item-img" :src="require('../assets/client.png')"></v-img>         
            <span class="tittle-menu">Clientes</span>
         </div>
          <div class=" item-list ">
            <v-img class="item-img" :src="require('../assets/supplier.png')"></v-img>         
            <span class="tittle-menu">Fornecedores</span>
         </div>
          <div class="item-list">
            <v-img class="item-img" :src="require('../assets/product.png')"></v-img>         
            <span class="tittle-menu">Produtos</span>
         </div>
          <div class="item-list">
            <v-img class="item-img" :src="require('../assets/dashboard.png')"></v-img>         
            <span class="tittle-menu">Dashboard</span>
         </div>
         
        
        
      </v-list>
    </v-navigation-drawer>
  </div>
</template>



<style>
.tittle-menu{
  font-size: 15px

 
}

.item-list{
  display: flex;
  
  align-items: center;
  padding: 10px 5px 10px 0px;
  margin: 20px 0px;
  color: white;
  cursor: pointer;

}
 .item-list:hover{
    background-color: #456b9a
  }
.item-img{
  color: red;
  max-width: 40px;
  margin: 0 10px;
  
}


</style>