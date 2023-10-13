<script setup>
import { RouterLink } from 'vue-router';
import { dataStore } from '../stores/data';
import { alertStore } from '../stores/alert';

import '../assets/font.css'

const alert_store = alertStore()
const alert_fn = alert_store.alert_buy

const data_store = dataStore()
const data_package = data_store.packageList

</script>

<template>

  <div style="display: flex;">
  <RouterLink to="/">
      <button class="ui-btn" style="margin-right: -5rem;">
  <span>
    Back
  </span>
  </button>
    </RouterLink>
    <h1 class="text-pack" align="center" style="font-family: monospace; text-transform: uppercase;">Package</h1>
  </div>
<div class="grid-price">
  <div class="card-price" v-for="(price, index) in data_package" :key="index">
  <p class="price-price">
    ฿ {{price.price}}
  </p>
  <ul class="lists">
    <li class="list">
      <svg  fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
      <span>Key can use any Course </span>
    </li>
    <li class="list">
      <svg  fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
        <span> {{ price.day }} Day Before Expire</span>
    </li>
    <li class="list">
      <svg  fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
      <span> {{ price.description1 }} </span>
    </li>
  </ul>
  <button @click="alert_fn(price.id,price.price,price.day, price.keys_code)" class="action" style="text-decoration: none;">
    Get Keys
  </button>
</div>
</div>

</template>

<style>
.grid-price{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color:0;
  justify-content: space-between;
  grid-gap: 5rem;
  padding: 5rem;
}

.card-price {
  max-width: 320px;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  background-color: rgb(36, 36, 36);
  padding: 1.5rem;
  transition: 1s;
}

.card-price:hover{
  transform: scale(1.03);
}

.price-price {
  font-size: 3rem;
  line-height: 1;
  font-weight: 300;
  letter-spacing: -0.025em;
  color: #ffa601;
}

.lists {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  grid-row-gap: 0.75rem;
  row-gap: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(255, 255, 255, 1);
}

.list {
  display: flex;
  align-items: center;
}

.list svg {
  height: 1rem;
  width: 1rem;
}

.list span {
  margin-left: 1rem;
}

.action {
  margin-top: 2rem;
  width: 100%;
  border: 2px solid  rgba(255, 255, 255, 1);
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.625rem 1.5rem;
  text-align: center;
  font-size: 0.975rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  outline: none;
  transition: all .2s ease;
}

.action:hover {
  color: #ffa601;
  background-color: transparent;
}

/** */
.text-pack{
  color: #ffa601;
  text-align: center;
  font-weight: bold ; 
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
  text-decoration: underline;
  margin: 0 auto;
}
*{
 font-family: 'IBM Plex Sans Thai', sans-serif;  
}
@media screen and (max-width: 1400px) {
 .grid-price{
  grid-template-columns: repeat(3, 1fr);
  } 
}
@media screen and (max-width: 1100px) {
 .grid-price{
  grid-template-columns: repeat(2, 1fr);
  } 
}
@media screen and (max-width: 750px) {
 .grid-price{
  grid-template-columns: repeat(1, 1fr);
  } 
}
@media screen and (max-width: 550px) {
 .price-price{
  font-size: 2rem;
  } 
}
</style>



