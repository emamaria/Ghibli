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

.titles_container{
  display: flex;
  justify-content: start;
  padding: 3rem 0 0 3rem;
  width: 100%;
}

.title_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
</style>
