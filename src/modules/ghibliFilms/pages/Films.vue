<template>
<div class="main_container">
      <h1>all films</h1>

       <input type="text" v-model="searchFilm" placeholder="search the film">
       <p v-for="film in computedFilms" :key="film">
        {{film}}
       </p>
</div>

</template>

<script>
export default {
    data(){
        return {
            searchFilm: "",
            films: ["Laputa", "totoro", "nausica", "kurenai"]
        }
    },
  
   computed: {
    computedFilms(){
        if(this.searchFilm.trim().length === 0){
            return this.films
        }
       return this.films.filter(film => film.toLowerCase().includes(this.searchFilm.toLowerCase()))
        
    }
   }
}
</script>

<style scoped>
p{
    color: white;
}
input{
    background-color: yellow;
    padding: 2rem;
    width: 100%;
}
.main_container{

    background-color: blue;
     /* width: 80%;
    height: 80vh; */
    border-radius: 10px;
   
}
</style>