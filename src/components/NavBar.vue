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
    // Можно добавить логику компонента здесь
  };
  </script>
  
  <style scoped>
  /* Стили для компонента Navbar */
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
    margin-right: 20px; /* Расстояние между элементами, замените на ваше значение */
}

/* Последний элемент списка не должен иметь правого отступа */
li:last-child {
    margin-right: 0;
}
  </style>
  