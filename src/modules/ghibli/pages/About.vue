<template>
<div class="main_container">
     <h3>About</h3>

  <div class="about_container">
  <p><span>Name:</span> 	株式会社スタジオジブリ(Kabushiki-gaisha Sutajio Jiburi)</p>
  <p><span>Founded:</span> June 15, 1985 in Tokyo, Japan</p>
  <ul>
    <h4>Founders:</h4>
    <li>Hayao Miyazaki</li>
    <li>Toshio Suzuki</li>
    <li>Isao Takahata</li>
  </ul>
  </div>
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>

.about_container{
  margin-top: 60px;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  color: #2c786c; 
  padding: 10px;
}

ul{
  margin-top: 20px;
  margin-bottom: 20px;
}
p, li, h4{
  margin-bottom: 20px;
}

span{
  font-weight: bold;
}

li{
  list-style: none;
}


h3{
    margin-top: 60px;
    color: #2c786c; 
    margin-bottom: 40px;
    font-size: 2rem;
}
  .main_container{
    background-image: none;
    background-color: white;
    width: 85%;
   
  }

  @media screen and (max-width:600px){
 
  .about_container{
    font-size: 1.5rem;
  }
}
</style>