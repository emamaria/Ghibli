<template>
<div class="main_container">
     <div class="film_img_info">
       <div class="title_img">
        <main>

        </main>
        <h4></h4>
       </div>
       <div class="film_info">

       </div>

     </div>
</div>
 
</template>

<script>

import axios from 'axios'
export default {
 
   props: {
    id:{
        required: true,
        type: String
    }
   },
   data(){
     return{
        filmData: {}
     }
   },
   async created(){
     let url =  "https://ghibliapi.vercel.app/films"

    this.filmData = await axios.get(url).then(films =>{
         let filmsData = films.data
        
        return filmsData.filter( data => data.id === this.id)[0]
        
       } ).catch( err => console.log(err))
  
     console.log(this.filmData)
  }

}
</script>

<style scoped>

.film_img_info{
    background-color:#109ceb;
}

.main_container{
    background-color: yellow;
     width: 90%;
    height: 40vh;
    background-image: none;
}
</style>