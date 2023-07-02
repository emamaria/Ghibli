<template>
<div class="main_container">
      <h3>Awards</h3>
      <div class="awards_container">
        <p class="start_text"><span>Outstanding awards:</span></p>
         <h4>Spirited Away(2001):</h4>
            <p>Academy Award for Best Animated Feature(2003)</p>
            <p>Golden Bear(2002):</p>
          <h4>Ponyo(2008):</h4>
            <p>Japan Academy Film Prize(2009)</p>
          <h4>Howl's Moving Castle(2004):</h4>
            <p>Award for Best Technical Contribution(2004)</p>
            <p>Nebula Award for best script(2007)</p>
           <h4>The wind Rises(2013)</h4>
            <p>Annie Award for Outstanding Writing(2014)</p>   
      </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>

span{
    font-weight: bold;
  
}

.start_text{
    margin-bottom: 30px;
}
.awards_container{
    margin-top: 60px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  color: #2c786c; 
  padding: 10px;
  margin-bottom: 40px;
}

 p{
     margin-bottom: 25px;
}

h4{
  margin-bottom: 30px;
}

h3{
     margin-top: 60px;
    color: #2c786c; 
    margin-bottom: 10px;
    font-size: 2rem;
}
.main_container{
    background-color: white;
    background-image: none;
    width:75%;
   
}

 @media screen and (max-width:600px){
 
  .awards_container{
    font-size: 1.5rem;
  }

  h3{
    font-size: 1.8rem;
  }
}
</style>