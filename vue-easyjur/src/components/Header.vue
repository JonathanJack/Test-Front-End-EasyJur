<template>
<v-app-bar app color="#356097" dark clipped-left>
      <div class="d-flex align-center">
        <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/logo.png')"
        transition="scale-transition"
        width="40"
        />
        <span class="tittle">Don Varejo</span>
      </div>

      <v-spacer></v-spacer>

      
      <v-avatar alt="Foto do Usuário" class="mr-3" color="teal" size="36">{{letter}}</v-avatar>        
                                                    
      <span class="mr-2 ">{{user}}</span>
      <v-btn
      href="https://github.com/JonathanJack/Test-Front-End-EasyJur"
      target="_blank"
      text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>
export default{
    data(){
        return{
            user: 'Jonathan Jackson',
            letter: ''
        }
    },
    methods: {
        firstLetter(word){
            const firstLetter = word.split('')
            this.letter = firstLetter[0]            
        }
    },
    mounted(){
        this.firstLetter(this.user)
    }
}
</script>

<style>
.tittle{
  font-size: calc(2vw + 1vh + 1vmin);
  font-weight: 500;  
}
</style>