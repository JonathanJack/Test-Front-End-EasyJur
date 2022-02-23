<template>
<v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/logo.png')"
          transition="scale-transition"
          width="40"
        />

        <h1>Don Varejo</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
      <v-avatar
        alt="Foto do Usuário"
        class="mr-3"
        color="teal"
        size="36"        
      >
        {{letter}}
      </v-avatar>

        <span class="mr-2">{{user}}</span>
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