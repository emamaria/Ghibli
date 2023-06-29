<template>
<div class="main_container">
<div class="title_nav_container">
    <h2>Director</h2>
  <nav>
    <router-link class="link" :to="{name: 'director'}" v-slot="{isExactActive}">
    <a :class="isExactActive?'is-active':'not-active'">About</a>
   </router-link>
    <router-link  class="link" :to="{name: 'awards'}" v-slot="{isExactActive}">
    <a :class="isExactActive?'is-active':'not-active'">awards</a>
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

h2{
    margin: 30px 0 0 30px;
   color: #004445;
   font-size: 2rem;
}

.title_nav_container{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
   
  
}

nav{
   margin-top: 20px;
   padding: 12px;
   display: flex;
   margin-right: 20px;
 
   }

.link{
    background-color: #2c786c;
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
    margin-bottom: 100px;
}

.is-active{
  color:  brown;
}

.not-active{
  color: white;
}
</style>