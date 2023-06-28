<template>
<div class="main_container">
<div class="title_nav_container">
  <nav>
    <router-link class="link" :to="{name: 'director'}" v-slot="{isActive}">
    <a :class="isActive?'is-active':'not-active'">Director</a>
   </router-link>
    <router-link  class="link" :to="{name: 'films'}" v-slot="{isActive}">
    <a :class="isActive?'is-active':'not-active'">Films</a>
   </router-link>
  </nav>
 </div>
 <router-view></router-view>
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>

.title_nav_container{
    display: flex;
    width: 100%;
    justify-content: end;
  
}

nav{
   margin-top: 20px;
   padding: 12px;
   display: flex;
   margin-right: 20px;
 
   }

.link{
    background-color: #109ceb;
    padding: 10px;
    margin: 3px;
    text-decoration: none;
}



.main_container{
    
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    background-image: url("../../../assets/nature.jpg");
    
}

.is-active{
  color:  brown;
}

.not-active{
  color: white;
}
</style>