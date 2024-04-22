<template>
  
<header className="container-header">
  <Logo />
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

</template>
<script>
import Logo from '../components/Logo.vue';
import Navbar from '../components/NavBar.vue';
import SocialIcons from '../components/SocialIcons.vue';
import Apropos from '../components/Apropos.vue';
import HeroSection from '../components/HeroSection.vue';
import Competences from '../components/Competences.vue';
import Portfolio from '../components/Portfolio.vue';
import FormSection from '../components/FormSection.vue';
import FooterSection from '../components/FooterSection.vue';


export default {
components: {
  Logo,
  Navbar,
  SocialIcons,
  Apropos,
  HeroSection,
  Competences,
  Portfolio,
  FormSection,
  FooterSection
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