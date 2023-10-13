<script setup>
//import { dataStore } from '../stores/data';

//const course_store = dataStore()
// const data_course = course_store.courseList


</script>
<template>
<div class="container px-1 py-4" id="icon-grid">
    <h2 class="pb-1" style="text-align: center; text-transform: uppercase; ">Course Categories</h2>
    <hr class="line">
    <!-- <div class="display-grid">
    <div class="row row-cols-1 row-cols-sm-1" style="margin-top: 50px; margin: 10px 10px;" v-for="(course, index) in data_course" :key="index">
      <div class="col d-flex">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
          <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis" style="text-align: left; margin-top: -10px;">{{ course.name }}</h3>
          <p style="margin-top: 20px; text-align: left;">{{ course.who_study }}</p>
          </div>
        </div>
      </div> 
  </div>-->
</div>
</template>
<style>
.display-grid{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
}


@media screen and (max-width: 1000px) {
.display-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  }
}

@media screen and (max-width: 550px) {
  .display-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr) ;
  }
}
</style>