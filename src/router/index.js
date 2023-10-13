import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Dev from '../views/Dev.vue'
import MainPage from '../views/MainPage.vue'
import priceView from '../views/priceView.vue'
import course from '../views/courseView.vue'
import assessPage from '../views/AssessKey.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/dev',
      name: 'dev',
      component: Dev
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: priceView
    },
    {
      path: '/assess',
      name: 'assess',
      component: assessPage
    },
    {
      path: '/course/:id',
      name: 'course',
      component: course
    },
   


  ]
})


export default router
