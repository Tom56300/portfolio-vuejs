<template>
    <section class="form-container">
      
                        <div class="main-header">
                            <h1 id="title" class="text-center">Formulaire de contact</h1>
                        </div>
                <form id="survey-form" class="form">
                  <div class="form-group">
                    <label id="name-label" for="name" class="label">Nom</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Votre nom">
                  </div>
                  <div class="form-group">
                    <label id="email-label" for="email" class="label">Email</label>
                    <input type="email" name="email" id="email" pattern="thomascarbonel56@gmail.com" class="form-control" placeholder="Votre email" required="">
                  </div>
                  <div class="form-group">
                    <label id="number-label" for="number" class="label">Numéro de téléphone<span class="clue"></span></label>
                    <input type="number" name="number-phone" id="number" class="form-control" placeholder="Votre numéro de téléphone">
                  </div>
                  <div class="form-group">
                    <p class="label">Votre question</p>
                    <textarea id="comments" class="input-textarea" name="comment" placeholder="Ecrire votre commentaire ici"></textarea>
                  </div>
                  <div class="form-group">
                    <div>
                      <CustomButton>Envoyer</CustomButton>
                  </div>
                  </div>
                </form>
      
    </section>
  </template>
  
  <script>
  import CustomButton from './Button.vue';
  export default {
    name: 'FormSection', // Имя компонента FormSection
    components: {
      CustomButton // Регистрация компонента CustomButton внутри компонента FormSection
    }
  }
  </script>
  
  <style scoped>
  
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.form {
  width: 600px; 
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


.main-header {
  text-align: center;
  margin-bottom: 30px;
}

#title {
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  font-size: 18px;
  color: #555;
}

.form-control,
.input-textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.form-control:focus,
.input-textarea:focus {
  outline: none;
  border-color: #66afe9;
}


  </style>