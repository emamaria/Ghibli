<template>
<div class="main_container">
<div class="title_container">
 <h2>Films</h2>
 
 </div>
 <router-view></router-view>
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>



.main_container{
    
    width: 90%;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    background-color: white;
     margin-bottom: 100px;
}

.title_container{
  display: flex;
  justify-content: flex-start;
   width: 100%;
}

h2{
    color:#109ceb;
    margin: 30px 0 0 30px;
   font-size: 2rem;
}

</style>