<template>
<div class="main_container">
 <h1>Ghibli about</h1>  

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
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
}
</style>