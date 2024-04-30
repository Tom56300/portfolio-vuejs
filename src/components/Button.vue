<template>
    <button :class="buttonClass" @click="handleClick">
      <slot>Default Text</slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'CustomButton',
    props: {
      buttonClass: {
        type: String,
        default: 'custom-button' // class par default pour button 
      }
    },
    methods: {
      handleClick() {
        console.log('Button clicked');
      }
    }
  }
  </script>
  
  
  <style scoped>
  .custom-button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 600ms ease;
  cursor: pointer;
  }

.custom-button:hover {
  background-color: #0056b3;
  transform: scale(1.1) translateY(-5px);
}
  </style>