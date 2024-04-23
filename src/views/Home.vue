<template>
  
<header class="container-header">
  <logo />
  <Navbar />
  <SocialIcons />
  </header>
  <div class="wraper-hero">
    <HeroSection />
  </div>
    
    <Apropos />
    <Competences />
    <Portfolio />
    <FormSection />
    <FooterSection />
    <router-view/>
</template>
<script>

import Navbar from '../components/NavBar.vue';
import SocialIcons from '../components/SocialIcons.vue';
import Apropos from '../components/Apropos.vue';
import HeroSection from '../components/HeroSection.vue';
import Competences from '../components/Competences.vue';
import Portfolio from '../components/Portfolio.vue';
import FormSection from '../components/FormSection.vue';
import FooterSection from '../components/FooterSection.vue';
import Logo from '../components/Logo.vue';


export default {
components: {
  
  Navbar,
  SocialIcons,
  Apropos,
  HeroSection,
  Competences,
  Portfolio,
  FormSection,
  FooterSection,
Logo
},
};
</script>

<style scoped>
/* Ваши стили для компонента Home */


.container-header {
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-around;
    width: 100%;
}

.wraper-hero{
  display: flex;
  justify-content: center;
}




</style>