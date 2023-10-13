<template>
  <div style="margin-top: 0px; margin-bottom: -40px; color:#ffa601; display: flex; justify-content: space-between;">
    <RouterLink to="/">
      <button class="ui-btn" style="margin-right: -10rem;">
  <span style="text-decoration: none;">
    Back
  </span>
  </button>
    </RouterLink>
    <div class="title-price-view">
    <h1 class="whodev">Verify Keys</h1> <br>
    <h6 class="sub-title-price-view">please Buy Keys before Verify</h6>
    
    </div>
  </div> <br> <br>

  <div class="content-items" v-for="(keyss, index) in keys_data" :key="index">
    <div class="box-keys">
      <h4 style="margin-top: 10px;">Expire in {{ keyss.name.day }} Days </h4><p style="font-size: 1.5rem; color: rgb(245, 0, 0); margin-bottom: 0px;"><h3 style="display: inline; color: black;">Key is - </h3>{{ keyss.name.keys_code }}</p>
    </div>
     
    
  </div> <br>
  <div class="ccenter">
    <h1>
        Assess The Keys <br> <br>
        <input v-model="keyInput" class="asd" style="text-align: center;" placeholder="Enter your key" required /> <br>
        <Button class="button2" @click="submitKeys">Submit</Button>
    </h1> 
  </div> 
</template>
<script setup>
import '../assets/font.css'
import { alertStore } from '../stores/alert';
import { ref } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const alert_store = alertStore()
const keys_data = alert_store.keys_pages

const keyInput = ref('');

const submitKeys = () => {
  if (keyInput.value.trim() === '') {
    // Show an error message or handle the case where the input is empty
     Swal.fire({
     icon: 'error',
     title: 'Please enter your key!',
     showConfirmButton: false,
     timer: 2000
    });
  } else if (keyInput.value.trim().length > 9) {
    alert_store.submit_alert(keyInput.value);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'incorrect key :(',
      showConfirmButton: false,
      timer: 2000
    });
  }
};
</script>

<style>
body{

}
.box-keys{
  text-align: center;
  margin: 1rem auto;
  padding: 20px;
  justify-content: center;
  background-image: linear-gradient(to right, #FFC69E, #ffa601b6);
  border-radius: 0;
}
  .asd{
  color: #ffa601;
    margin: 0 auto;
}
.ccenter{
    justify-content:center ;
    text-align: center;
    margin: 0 auto;
    padding: 3rem;
}
*{
  font-family: 'IBM Plex Sans Thai', sans-serif;
}
.contain-keys{
    margin: 0 15rem;
    justify-content: center;
}
.content-items{
  justify-content: center;
    text-align: left;
}
:root {
  --char-w: 1ch;
  --gap: calc(0 * var(--char-w));
  --n-char: 14;
  --in-w: calc(var(--n-char) * (var(--char-w) + var(--gap)));
}
input {
  
  display: block;
  margin: 2em auto;
  border: none;
  padding: 0;
  width: var(--in-w);
  background: repeating-linear-gradient(
    90deg,
    #ffa601 0,
    #ffa601 var(--char-w),
    transparent 0,
    transparent calc(var(--char-w) + var(--gap))
  ) 0 100% / calc(var(--in-w) - var(--gap)) 2px no-repeat;
  font: 5ch droid sans mono, consolas, monospace;
  letter-spacing: var(--gap);

  &:focus {
    outline: none;
    color: #ffa601;
  }
}

.button2 {
 padding: 20px 40px;
 border-radius: 10px;
 border: 0;
 background-color: white;
 box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 font-size: 15px;
 transition: all .5s ease;

 
}

.button2:hover {
 letter-spacing: 3px;
 background-color: hsl(35, 100%, 50%);
 color: hsl(0, 0%, 100%);
 box-shadow: rgb(220, 145, 24) 0px 7px 29px 0px;
}

.button2:active {
 letter-spacing: 3px;
 background-color: hsl(35, 100%, 50%);
 color: hsl(0, 0%, 100%);
 box-shadow: rgb(220, 145, 24) 0px 7px 29px 0px;
 transform: translateY(10px);
 transition: 100ms;
}
.title-price-view{
  text-align: center;
  margin: 0 auto;
}
@media screen and (max-width: 499px) {
  .title-price-view{
  text-align: center;
  margin-right: 4.7rem;
}
.sub-title-price-view{
  margin-left: 7rem;
  font-size: 14.1px;
}
}
</style>