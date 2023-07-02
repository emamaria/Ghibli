<template>
 <p class="loading" v-if="!filmData.id">Loading</p>
<div v-else class="main_container">
   <div  class="film_img_info">
       <div class="title_img">
        <header class="titles">
            <h4>{{filmData.title}}</h4>
            <h4>{{filmData.original_title}}({{filmData.original_title_romanised}})</h4>
            <p>{{filmData.release_date}}</p>
        </header>
        <main class="banner">
          <img v-if="filmData.movie_banner" :src="filmData.movie_banner" :alt="filmData.title">
        </main>
    
       </div>
       <div class="film_info">
         <p>{{filmData.description}}</p>
         <p>Director: {{filmData.director}}</p>
         <p>Producer: {{filmData.producer}}</p>
         <p>RT Score: {{filmData.rt_score}}</p>
         <p>{{filmData.running_time}}min</p>
       </div>
      
     </div>
      <div class="back_link"><router-link :to="{name: 'ghibli-films' }">Back</router-link></div> 
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
h4{
  margin-bottom: 10px;
}

.loading{
    margin-top: 200px;
    color:#109ceb;
    font-size: 2rem;
   
}

.film_info{
    border-top: 5px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 70vh;
    color: #2a2438; 
}

.film_info p{
    font-size: 1.5rem;
    padding: 10px;
}

.titles{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size: 2rem;
    padding: 20px;
}

.title_img{
   display: flex;
   flex-direction: row;
}

img{
    width: 100%;
   
}
.banner{
    width: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
}

.film_img_info{
    background-color:#109ceb;
}

.main_container{
   
     width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    background-image: none;
    
}

.back_link{
  background-color: #109ceb;
  text-align: center;
 
  margin-top: 20px;
  padding: 10px;
  
}

.back_link a{
  text-decoration: none;
   width: 100px;
  height: 20px; 
  color:white;
}

@media screen and (max-width:1500px){
  .titles{
     font-size: 1.5rem;
  }

  .film_info p{
    font-size: 1.2rem;
   
}
}

@media screen and (max-width:900px){
  .titles{
     font-size: 1rem;
  }

  .film_info p{
    font-size: 1rem;
   
}
}

@media screen and (max-width:600px){
  .title_img{
    flex-direction: column;
  }
  
  .titles{
    width: 100%;
    
  }

  .banner{
    width: 100%;
  }
}
</style>