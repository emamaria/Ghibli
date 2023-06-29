<template>
<div class="main_container">
   
       <input type="text" v-model="searchFilm" placeholder="search the film">
       <p v-for="film in computedFilms" :key="film">
        {{film.title}}
       </p>
</div>

</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            searchFilm: "",
            films: []
        }
    },

    async created(){
     let url =  "https://ghibliapi.vercel.app/films"

    this.films = await axios.get(url).then(films =>{
         let filmsData = films.data
        
         return filmsData
       } ).catch( err => console.log(err))
  
     console.log(this.films)
  },
   computed: {
    computedFilms(){
        if(this.searchFilm.trim().length === 0){
            return this.films
        }
       return this.films.filter(film => film.title.toLowerCase().includes(this.searchFilm.toLowerCase()))
        
    }
   }
}
</script>

<style scoped>
p{
    color: white;
}
input{
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
    color: black;
}
.main_container{

    background-color:lightblue;
     /* width: 80%;
    height: 80vh; */
    border-radius: 10px;
   
}
</style>