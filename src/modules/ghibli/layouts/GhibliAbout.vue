<template>
<div class="main_container">
<div class="title_nav_container">
 <h1>Ghibli about</h1>  
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
    background-color: red;
    width: 80%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
}
</style>