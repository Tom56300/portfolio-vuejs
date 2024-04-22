<template>
    <section class="apropos">
    <div class="container-apropos">
        <div class="grid">
            <div class="apropos-item-left">
                <img width="560" height="453" src="/public/IMG/metier-developpeur-web-ynov.webp" alt="photo code dev">
            </div>
        
            <div class="apropos-item-right">
                <h2 class="apropostitle">A Propos</h2>
                <h3 class="quisuisje">Qui suis-je?</h3>
                <p class="aboutp">Jeune diplomé en tant que developpeur web,</p>
                <p class="aboutp">je suis capable de créer vos sites internet</p>
                <p>en front end et back end.</p>
            </div>
        </div>
    </div>
</section>
  </template>
  
  <script>
  export default {
    name: 'Apropos'
  }
  </script>
  
  <style scoped>
  .apropos{
    display: flex;
    font-size: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #EEE;
    color: #EEE;
  }

  .grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.apropos-item-left{
    display: flex;
    margin-right: 50px;
}
  </style>