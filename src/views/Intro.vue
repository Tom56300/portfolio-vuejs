<template>
  
  <div class="intro-wrapper">
  <div class="intro">
    <div class="content">
      <h2>Je m'appelle Thomas Carbonel, je suis développeur web junior</h2>
<p>Bienvenue dans mon portfolio.</p>
    <CustomButton buttonClass="enter-button">
      <router-link to="/home">Aller à la page d'accueil</router-link>
    </CustomButton>

    </div>
  </div>
</div>
<router-view/>
</template>

<script>
import CustomButton from '../components/Button.vue';
  export default {
    name: 'Intro', 
    components: {
      CustomButton 
    }
  }

</script>

<style scoped>




.intro {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%; 
  overflow-x: hidden;
  background: linear-gradient(112deg, rgba(131,58,180,1) 0%, rgba(29,207,253,1) 0%, rgba(252,176,69,1) 100%);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 80% 30%;
  }
  100% {
    background-position: 0 50%;
  }
}

.content {
  text-align: center;
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