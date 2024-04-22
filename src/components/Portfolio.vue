<template>
    <section class="portfolio">
    <div class="container-portfolio">
        <div class="header-portfolio">
            <h2 class="title-portfolio">Mon Portfolio</h2>
            
        </div>

        <ul class="list-grid-portfolio">
            <li><a class="a-tlp" href="#">Tous les projets</a></li>
        </ul>
            <div class="grid-portfolio">
                <div class="grid-items-portfolio-one">
                    <div class="card-portfolio">
                        <a href="https://crystalline-plain-shad.glitch.me" target="blank"><img src="/public/IMG/2238503-icone-de-vecteur-de-commentaire-vectoriel.jpg" width="534" height="355" class="imgportfolio-one" alt="the project"></a>
                            <div class="card-inner">
                            <h3 class="card-title">Dynamiser un commentaire</h3>
                            </div>
                    </div>
                </div>
                <div class="grid-items-portfolio-two">
                    <div class="card-portfolio">
                        <a href="https://cdn.glitch.global/667ceeb5-f974-4b40-a394-b3e10d493a2b/cahierdeschargeslasocketterie.pdf?v=1711903394126" target="blank"><img  src="/public/IMG/cahier-des-charges.png" width="534" height="355" class="imgportfolio-two" alt="the project"></a>
                        <div class="card-inner">
                            <h3 class="card-title">Cahier des charges</h3>
                            </div>
                        
                    </div>
                    <div class="grid-items-portfolio-three">
                        <div class="card-portfolio">
                            <a href="https://dull-colorful-yarrow.glitch.me" target="blank"><img src="/public/IMG/cv.png" width="534" height="355" class="imgportfolio-three" alt="the project"></a>
                            <div class="card-inner">
                                <h3 class="card-title">curriculum vitae</h3>
                           </div>
                                
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
  </template>
  
  <script>
  export default {
    name: 'Portfolio'
  }
  </script>
  
  <style scoped>
  .list-grid-portfolio{
    list-style: none;
    margin: 0;
    padding: 0;
}

.portfolio{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 2px solid #EEE;
}

.header-portfolio{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.list-grid-portfolio{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    text-decoration: underline;
    text-decoration: #EADFB4;
}

.title-portfolio{
    font-size: 25px;
    color: #FFF;
}

.a-tlp{
    display: flex;
    justify-content: center;
    width: 300px;
    color: #EADFB4;
    padding-bottom: 20px;
    
}




  </style>