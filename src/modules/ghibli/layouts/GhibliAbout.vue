<template>
<div class="main_container">
<div class="title_nav_container">
    <h2>Ghibli</h2>
  <nav>
    <router-link class="link" :to="{name: 'about'}" v-slot="{isExactActive}">
    <a :class="isExactActive?'is-active':'not-active'">About</a>
   </router-link>
    <router-link  class="link" :to="{name: 'awards'}" v-slot="{isExactActive}">
    <a :class="isExactActive?'is-active':'not-active'">Awards</a>
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
   color: white;
   font-size: 2.2rem;
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
    background-color: white;
    color: #2c786c;
    padding: 10px;
    margin: 3px;
    text-decoration: none;
    font-weight: bold;
}



.main_container{
    border: 5px solid white;
    width: 90%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    background-image: url("../../../assets/nature.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 100px;
}

.is-active{
  color: #0c005a;
}

.not-active{
  color: #2c786c;
}

 @media screen and (max-width:600px){
 
  .link{
    padding: 5px;
  }

  .link a{
    font-size: 5px;
  }

  h2{
    
   color: white;
   font-size: 1.5rem;
}
}
</style>