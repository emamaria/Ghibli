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
    <a :class="isActive?'is-active':'not-active'">Director</a>
   </router-link>
  </nav>
</div>

 <router-view></router-view>
 </div>
 <footer>
  <p>derechos reservados</p>
 </footer>
</template>

<style scoped>

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
   
}

.link a{
 color: #109ceb;
 font-weight: bold;
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
  min-width: 300px;
}
h1{
  color: white;
  margin: 0;
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
}

footer p{
 color:#109ceb;
}

.is-active{
  color:  brown;
}

.not-active{
  color: white;
}
</style>
