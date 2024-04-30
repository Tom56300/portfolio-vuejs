<template>
  <section class="competences">
    <div class="container-competences">
      <div class="header-competences">
        <h2 class="title-competences">Mes Compétences</h2>
      </div>

      <div class="grid">
        <div class="grid-items-two">
          <h3 class="title-dev-comp">Competences en développement</h3>
          <div class="progressbar">
            <div class="progress-container progress-bar bar1" data-width="100">HTML</div>
            <div class="progress-container progress-bar bar2" data-width="85">CSS</div>
            <div class="progress-container progress-bar bar3" data-width="50">JAVASCRIPT</div>
            <div class="progress-container progress-bar bar4" data-width="40">NODE.JS</div>
            <div class="progress-container progress-bar bar5" data-width="35">VUE.JS</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Competences',
  mounted() {
    // Ajout d'un écouteur d'événements de défilement de la page lors du montage du composant
    window.addEventListener('scroll', this.checkAndFillProgressBar);
    // Déclenchement de la vérification et du remplissage des barres de progression lors du chargement de la page
    this.checkAndFillProgressBar(); 
  },
  // Suppression de l'écouteur d'événements de défilement lors de la destruction du composant
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkAndFillProgressBar);
  },
  methods: {
    checkAndFillProgressBar() {
       // Recherche de toutes les barres de progression sur la page
      const bars = document.querySelectorAll('.progress-container.progress-bar');
      console.log(bars);
      bars.forEach(bar => {
        // Obtention des coordonnées et dimensions de la barre de progression par rapport à la fenêtre du navigateur
        const rect = bar.getBoundingClientRect();
        // Vérification si la barre de progression est visible sur la page
        const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
        console.log('isVisible:', isVisible);
        if (isVisible) {
          // Obtention de la largeur de la barre de progression depuis l'attribut de données
          const width = parseInt(bar.dataset.width);
          console.log('width:', width);
          // Remplissage de la barre de progression avec une animation
          this.fillProgressBar(bar, width);
        }
      });
    },
    fillProgressBar(bar, width) {
      let start = null; // Déclaration d'une variable pour suivre le début de l'animation
      const duration = 2000; // Durée de l'animation en millisecondes
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;// Calcul du temps écoulé depuis le début de l'animation
        // Calcul de la nouvelle largeur de la barre de progression en fonction du temps
        console.log('Progress:', progress);
        bar.style.width = Math.min((progress / duration) * width, width) + '%';
        console.log('Nouvelle largeur:', bar.style.width);
        if (progress < duration) {
          // Si l'animation n'est pas encore terminée, poursuite de l'exécution de l'animation
          window.requestAnimationFrame(step);
        }
      }
      // Démarrage de l'animation de la barre de progression
      window.requestAnimationFrame(step);
    }
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.competences {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 180px;
  margin-top: 0px;
  border-bottom: 2px solid #EEE;
}

.container-competences {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.header-competences {
  padding-bottom: 30px;
}

.title-competences {
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #FFF;
}

.progressbar {
  width: 100%; /* Ширина прогресс-бара занимает всю доступную ширину */
  height: 30px; /* Высота прогресс-бара */
}

.progress-container{
    width: 100%;
    background-color: transparent;
    margin-bottom: 5px;
    height: 30px;
    overflow: hidden;
    border-left: #555 solid 5px;
  }

  .progress-bar{
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 0%;
    height: 100%;
    background-color: #9CAFAA;
  }
</style>
