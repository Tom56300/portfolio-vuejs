<template>
    <div class="end">
      <h1>404 Not Found</h1>
      <p>Page non trouvée. Veuillez retourner à la page d'accueil</p>
      <CustomButton buttonClass="enter-button">
      <router-link to="/home">Aller à la page d'accueil</router-link>
    </CustomButton>
    </div>
    <router-view/>
  </template>
  
  <script>
  import CustomButton from '../components/Button.vue';
  export default {
    name: 'NotFound',
    components: {
      CustomButton 
    }
  }
  </script>
  <style scoped>
  
  .end {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

  
  
  .enter-button {
  width: 400px;
  padding: 12px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 600ms ease;
  cursor: pointer;
}

.enter-button:hover {
  background-color: #0056b3;
  transform: scale(1.1) translateY(-5px);
}

.enter-button a {
  color: inherit;
  text-decoration: none;
}

.enter-button a:hover {
  color: inherit;
  text-decoration: none;
}
  </style>