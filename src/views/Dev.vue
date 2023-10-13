<script setup>
import { RouterLink } from 'vue-router';
import { dataStore } from '../stores/data';

const openLink = (url) => {
  window.open(url, '_blank');
};

const data_store = dataStore()
const dev_data = data_store.data_dev

</script>
<template>
  <div style="margin-top: 0px; margin-bottom: -40px; color:#ffa601; display: flex; justify-content: space-between;">
    <RouterLink to="/">
      <button class="ui-btn" style="margin-right: -7rem;">
  <span style="text-decoration: none;">
    Back
  </span>
  </button>
    </RouterLink>
    <h1 class="whodev">WHO IS DEV</h1>
  </div>
<div class="grid-container">
    <div class="" v-for="(dev, index) in dev_data" :key="index">
      <div class="col">
        <img :src="dev.img"  class="bd-placeholder-img rounded-circle" width="140" height="140" >
        <h2 class="fw-normal">{{ dev.name }}</h2>
        <p>{{ dev.text }}</p>
        <button class="bt-contact" @click="openLink(dev.url)">
            <span>Contact &raquo;</span>
        </button>
      </div>   
    </div>
    <h4 style="margin: auto 0px;">Thank for your Support 🙏 </h4>
</div>
</template>
<style>

img{
  object-fit: cover;
}

/* grid-card-dev */
.grid-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;

  justify-content: center; /* Center the grid horizontally */
  margin: 0 auto;
  text-align: center;
  padding: 90px;
}
.whodev{
  text-align: center;
  font-weight:bold ; 
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
  text-decoration: underline;
  margin: 0 auto;
}
.fw-normal{
    margin-top: 20px;
}

.col{
  text-align: center;
  margin: 20px ; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 20px;
}
/* grid-responsive-device */
@media screen and (max-width: 1300px) {
  .grid-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr) ;
  }
}
@media screen and (max-width: 900px) {
  .grid-container{
  display: grid;
  grid-template-columns: repeat(1, 1fr) ;
  }
  .fw-normal{
    text-align: center;
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 500px) {
  .whodev{
    margin-left: 9rem ;
  }
}


/* Back-Bt */
.ui-btn {
  --btn-default-bg: rgb(41, 41, 41);
  --btn-padding: 15px 20px;
  --btn-hover-bg: rgb(51, 51, 51);
  --btn-transition: .3s;
  --btn-letter-spacing: .1rem;
  --btn-animation-duration: 1.2s;
  --btn-shadow-color: rgba(0, 0, 0, 0.137);
  --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
  --hover-btn-color: #FAC921;
  --default-btn-color: #fff;
  --font-size: 16px;
  margin-left: 40px;
  --font-weight: 600;
  --font-family: Menlo,Roboto Mono,monospace;
  border-radius: 1.25rem;
}

.ui-btn {
  box-sizing: border-box;
  padding: var(--btn-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--default-btn-color);
  font: var(--font-weight) var(--font-size) var(--font-family);
  background: var(--btn-default-bg);
  border: none;
  cursor: pointer;
  transition: var(--btn-transition);
  overflow: hidden;
  box-shadow: var(--btn-shadow);
}

.ui-btn span {
  letter-spacing: var(--btn-letter-spacing);
  transition: var(--btn-transition);
  box-sizing: border-box;
  position: relative;
  background: inherit;
}

.ui-btn span::before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  background: inherit;
  text-decoration: none;
}

.ui-btn:hover, .ui-btn:focus {
  background: var(--btn-hover-bg);
}

.ui-btn:hover span, .ui-btn:focus span {
  color: var(--hover-btn-color);
}

.ui-btn:hover span::before, .ui-btn:focus span::before {
  animation: chitchat linear both var(--btn-animation-duration);
}
@keyframes chitchat {
  0% {
    content: "#ba";
  }
  50% {
    content: "?cc";
  }
  60% {
    content: "kk:%";
    right: 0;
  }

  75% {
    content: "";
    right: 0;
  }
}

/*  */

/* */
.bt-contact {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 5px;
 background: #183153;
 font-family: "Montserrat", sans-serif;
 box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
 overflow: hidden;
 border: none;
 margin: auto;
}

.bt-contact:after {
 content: " ";
 width: 0%;
 height: 100%;
 background: #ffa601;
 position: absolute;
 transition: all 0.4s ease-in-out;
 right: 0;
}

.bt-contact:hover::after {
 right: auto;
 left: 0;
 width: 100%;
}

.bt-contact span {
 text-align: center;
 text-decoration: none;
 width: 100%;
 padding: 7px 15px;
 color: #fff;
 font-size: 1.125em;
 font-weight: 700;
 letter-spacing: 0.3em;
 z-index: 20;
 transition: all 0.3s ease-in-out;
}

.bt-contact:hover span {
 color: #183153;
 animation: scaleUp 0.3s ease-in-out;
}

@keyframes scaleUp {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.95);
 }

 100% {
  transform: scale(1);
 }
}

</style>