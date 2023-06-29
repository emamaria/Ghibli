<template>
<div class="main_container">
 <h2>ghibli films</h2>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    background-color: black;
    
}


</style>