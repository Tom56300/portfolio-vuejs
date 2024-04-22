<template>
    <div>
      <h1>404 Not Found</h1>
      <p>Страница не найдена. Пожалуйста, вернитесь на главную.</p>
      <router-link to="/home">Go to Home Page</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>