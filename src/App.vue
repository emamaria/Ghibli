<script setup>


</script>

<template>
<div class="home_container">
<div class="titles_container">
  <div class="title_container">
  <h1>スタジオジブリ</h1>
  <hr class="line">
  <h1>STUDIO GHIBLI </h1>
  </div>
  <nav>
     <router-link class="link" :to="{name: 'ghibli-films'}" v-slot="{isActive}">
    <a :class="isActive?'is-active':'not-active'">Films</a>
   </router-link>
    <router-link  class="link" :to="{name: 'ghibli-about'}" v-slot="{isActive}">
    <a :class="isActive?'is-active':'not-active'">Ghibli</a>
   </router-link>
  </nav>
</div>

 <router-view></router-view>
 </div>
 <footer>
  <div class="copy">
     <p>&#169; 2023 all rights reserved</p>
    <p>Only for dev practicing purpose</p>
  </div>
 </footer>
</template>

<style scoped>

.copy{

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.copy p{
  margin: 10px;
  font-weight: bold;
}



.line{
  color: white;
  width: 100%;
  border-width: 0;
  background-color: white;
  height: 2px;
  margin: 0;
}

nav{
     margin: 30px;
 
   }

.link{
    
    padding: 0.7rem;
    margin: 3px;
    text-decoration: none;  
    background-color: white;
    border-radius: 4px;
}

 .link a{
 color: green;
 font-weight: bold;
}

.link:hover{
  opacity: 0.8;
}

.titles_container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.title_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  min-width: 270px;
}
h1{
  color: white;
  margin: 0;
  font-size: 2.3rem;
  font-family: 'Roboto', sans-serif;
}

.home_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

footer{
  margin-top: auto;
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
}

footer p{
 color:#109ceb;
}

.link .is-active{
  color: #0c005a;
}

.link .not-active{
  color: #109ceb;
}

@media screen and (max-width:600px){
 h1{
  font-size: 1.8rem;
 
}


}
</style>
