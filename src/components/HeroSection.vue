<template>
    <section class="hero">
    <div class="container-hero">
        <div class="grid">
            <div class="hero-item-left">
                <h3 class="title-developpeur-item">Developpeur Web Junior</h3>
                <h1 class="title-item">Hello, Je suis Thomas CARBONEL</h1>

            </div>

            <div class="hero-item-right">
                <div class="avatar">
                    <img class="avatar-img" width="560" height="453" src="/public/IMG/avatar.png" alt="photo de mon avatar">
                </div>

            </div>

        </div>
    </div>
</section>
    
  </template>
  
  <script>
  export default {
    name: 'Hero'
  }
  </script>
  
  <style scoped>
  .avatar-img{
    display: flex;
    width : 250px; height : 250px;
    border: none;
    -moz-border-radius : 100px;
    -webkit-border-radius : 100px;
    border-radius : 100px;
    box-shadow: 0px 0px 20px 20px;
    margin-left: 200px;
}

.grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.hero{
    display: flex;
    font-size: 20px;
    color: #FFF;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 40px;
    padding-top: 40px;
    border-bottom: 2px solid #EEE;
}
  </style>