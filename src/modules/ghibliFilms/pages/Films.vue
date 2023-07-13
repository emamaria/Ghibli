<template>
<p class="loading" v-if="films.length === 0">Loading</p>
<div v-else class="main_container">
      <input type="text" v-model="searchFilm" placeholder="search the film"> 
       <div class="film_container">
       <Film  class="film" v-for="film in computedFilms"  @click="goToFilm(film.id)" :key="film.id" :title="film.title" :img="film.image"/>
       </div>
</div>

</template>

<script>
import axios from 'axios'
import { defineAsyncComponent } from 'vue'

export default {
    components:{
      Film: defineAsyncComponent(() => import('../components/Film.vue')),
    },
    data(){
        return {
            searchFilm: "",
            films: []
        }
    },

    async created(){
     let url =  "https://ghibli.rest/films"

    this.films = await axios.get(url).then(films =>{
         let filmsData = films.data
        
         return filmsData
       } ).catch( err => console.log(err))
  
     console.log(this.films)
  },
  methods: {
     goToFilm(id){
        this.$router.push(`/ghibli-films/${id}`)
     }
  },

   computed: {
    computedFilms(){
        if(this.searchFilm.trim().length === 0){
            return this.films
        }
       return this.films.filter(film => film.title.toLowerCase().includes(this.searchFilm.trim().toLowerCase()))
        
    }
   }
}
</script>

<style scoped>

.film:hover{
    opacity: 0.7;
    cursor: pointer;
}

.loading{
    margin-top: 200px;
    color:#109ceb;
    font-size: 2rem;
   
}

.film_container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
p{
    color: white;
}
input{
    margin-bottom: 60px;
    margin-top: 5rem;
    background-color: #109ceb;
    padding: 1rem;
    width: 400px;
    border: none;

}


input:focus{
    outline: none;
}

::placeholder{
    color: white;
}
.main_container{
     display: flex;
     flex-direction: column;
    /* background-color:lightblue; */
    height: 100%;
    border-radius: 10px;
   
}

@media screen and (max-width:600px){
  input{
     width: 230px;
  }

  
}

</style>