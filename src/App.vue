<script setup>


</script>

<template>
<div class="home_container">

<div class="title_container">
  <h1>Home</h1>
</div>


 <router-view></router-view>
 </div>
 <footer>
  <h1>derechos reservados</h1>
 </footer>
</template>

<style scoped>
.home_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

footer{
  margin-top: auto;
}
</style>
