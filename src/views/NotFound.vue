<template>
    <div class="end">
      <h1>404 Not Found</h1>
      <p>Page non trouvée. Veuillez retourner à la page Home</p>
      <CustomButton buttonClass="enter-button">
      <router-link to="/home">Go to Home Page</router-link>
    </CustomButton>
    </div>
    <router-view/>
  </template>
  
  <script>
  import CustomButton from '../components/Button.vue';
  export default {
    name: 'NotFound', // Имя компонента FormSection
    components: {
      CustomButton // Регистрация компонента CustomButton внутри компонента FormSection
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
  color: inherit; /* Наследует цвет текста от родительского элемента */
  text-decoration: none; /* Убирает подчеркивание ссылки */
}

.enter-button a:hover {
  color: inherit; /* При наведении цвет ссылки остается прежним */
  text-decoration: none; /* При наведении также убирает подчеркивание */
}

  </style>