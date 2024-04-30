<template>
    <nav class="navbar">
      <ul class="list-unstyled">
        <li><router-link to="/home">Accueil</router-link></li>
        <li><router-link to="/apropos">A propos</router-link></li>
        <li><router-link to="/competences">Compétences</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {

  };
  </script>
  
  <style scoped>
  
  .navbar{
    display: flex;
    justify-content:center;
    align-items:center;
    font-family:'Poppins';
    font-size:1.5rem;
    
}



a{
    text-decoration: none;
    color: #EEE;
}

li {
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
}


li:last-child {
    margin-right: 0;
}
  </style>
  