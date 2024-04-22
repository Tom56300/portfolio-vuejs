<template>
    <div class="right">
      <ul class="socials">
        <li>
          <a href="https://www.linkedin.com/in/thomas-carbonel-7b825a2b1/" target="_blank">
            <!-- Иконка LinkedIn -->
          </a>
        </li>
        <li>
          <a href="https://github.com/Tom56300" target="_blank">
            <!-- Иконка GitHub -->
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SocialIcons'
  };
  </script>
  
  <style scoped>
  /* Ваши стили для блока социальных сетей */
  .socials{
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0.5rem;
    text-decoration:none;
    

}

.icon-linkedin{
    display: flex;
}

.icon-github{
height: 18px;
}
  
  </style>
  