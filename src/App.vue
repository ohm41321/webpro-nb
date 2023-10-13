<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import HeaderWeb from '@/components/HeaderWeb.vue'
import FooterPage from '@/components/FooterPage.vue'


</script>

<template>
<HeaderWeb/>
  <!--<RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>-->
<RouterView /> 
<FooterPage/>
</template>

<style>

</style>
