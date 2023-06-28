<script setup>


</script>

<template>
<div class="home_container">

<div class="title_container">
  <h1>Home</h1>
</div>


 <router-view></router-view>
 </div>
</template>

<style scoped>
.home_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
