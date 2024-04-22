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
    // Добавляем слушателя события прокрутки страницы при монтировании компонента
    window.addEventListener('scroll', this.checkAndFillProgressBar);
    // Запускаем проверку заполнения прогресс-баров при загрузке страницы
    this.checkAndFillProgressBar(); 
  },
   // Удаляем слушателя события прокрутки при уничтожении компонента
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkAndFillProgressBar);
  },
  methods: {
    checkAndFillProgressBar() {
       // Находим все прогресс-бары на странице
  const bars = document.querySelectorAll('.progress-container.progress-bar');
  console.log(bars);
  bars.forEach(bar => {
    // Получаем координаты и размеры прогресс-бара относительно окна браузера
  const rect = bar.getBoundingClientRect();
  // Проверяем, виден ли прогресс-бар на странице
  const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
  console.log('isVisible:', isVisible);
  if (isVisible) {
    // Получаем ширину прогресс-бара из атрибута данных
    const width = parseInt(bar.dataset.width);
    console.log('width:', width);
    // Заполняем прогресс-бар с анимацией
    this.fillProgressBar(bar, width);
  }
});
},
fillProgressBar(bar, width) {
  let start = null; // Объявляем переменную для отслеживания времени начала анимации
  const duration = 2000; // Продолжительность анимации в миллисекундах
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;// Вычисляем прошедшее время анимации
        // Вычисляем новую ширину прогресс-бара в зависимости от времени
    console.log('Progress:', progress);
    bar.style.width = Math.min((progress / duration) * width, width) + '%';
    console.log('New width:', bar.style.width);
    if (progress < duration) {
      // Если анимация еще не завершена, продолжаем выполнение анимации
      window.requestAnimationFrame(step);
    }
  }
  // Запускаем анимацию прогресс-бара
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
