<template>
<div class="film_container">
  <header>
    <h3>{{title}}</h3>
  </header>
  <main>
    <img v-if="img" :src="img" :alt="title">
  </main>
</div>
</template>

<script>
export default {
       props: {
        title: {
          type: String,
          required: true
        },
        img: {
          type: String,
          required: true
        }
       }
}
</script>

<style scoped>

h3{
  color: white;
}

.film_container{
  background-color: #109ceb;
  width: 270px;
  margin: 10px;
}

img{
  width: 100%;
}

header{
  padding: 10px;
}

@media screen and (max-width:600px){
  input{
     width: 250px;
  }

  .film_container{
    width: 250px;
  }
  
}
</style>