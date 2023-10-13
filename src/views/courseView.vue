
<template>
 <div style="display: flex ; justify-content: space-between;">
      <RouterLink to="/">
      <button class="ui-btn" href="card-course">
  <span>
    Back
  </span>
  </button>
    </RouterLink>
    <h1 class="anima-title" style="text-align:right; text-transform: uppercase; margin: 10px auto;">about course</h1>
  </div> <hr style=" border: 0.5px  #000000; border-style: solid;">
<div class="setup">
    <div class="pic-course-view">
      <img class="pic-res-course-view" :src="course.img" height="500" width="750" style="border-radius: 50px;">
    </div>  
    <div class="contain-course-view">
      <h2 class="title-name-courseview">{{ course.name }} Class</h2>
      <h5 class="title-of-detail">รายละเอียด:</h5>
      <h5>{{ course.detail }}</h5> <br>
      <h5 class="title-of-detail">ประโยชน์ที่ผู้เรียนจะได้รับ:</h5>
      <h5>{{ course.wht_earn }}</h5> <br>
      <h5 class="title-of-detail">ใครควรเรียนคอร์สออนไลน์นี้:</h5>
      <h5>{{ course.who_study }}</h5> <br>
      <h5 class="title-of-detail">ผู้เรียนต้องมีความรู้อะไรมาก่อน:</h5>
      <h5>{{ course.knowledge }}</h5>
    </div>
</div>   

</template>

<script setup>
import { RouterLink } from "vue-router";

import { computed } from "vue";

import { useRoute } from "vue-router";
import { dataStore } from '../stores/data.js'

const route = useRoute();
const id = parseInt(route.params.id);

const course_store = dataStore()
const course_list = computed(() => course_store.courseList)

const course = computed(() => {
  return course_list.value.find(course_store => course_store.id === id);
});

import '../assets/font.css'

</script>

<style>
.title-of-detail{
  font-weight: 600;
}
*{
  font-family: 'IBM Plex Sans Thai', sans-serif;
}
.pic-course-view{
  text-align: center;
  animation-name: moving-text 1s 1s;
}
.setup{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  justify-content: space-between;
  margin: auto 0;
}
.contain-course-view{
  padding: 20px;
  margin: auto 0;
}
.title-name-courseview{
  text-align: left;
  margin-bottom: 30px;
}



@media screen and (max-width: 1400px) {
  .setup{
    grid-template-columns: repeat(1, 1fr);
  }
  .pic-res-course-view{
    width: 80%;
    height: 80%;
  }
  .contain-course-view{
    margin-top: 0rem;
  }
}
@media screen and (max-width: 1000px) {
  .contain-course-view{
    margin-top: 0rem;
  }
  .pic-res-course-view{
    width: 90%;
    height: 90%;
  }
}
@media screen and (max-width: 700px) {
  .contain-course-view{
    margin-top: 0rem;
  }
  .pic-res-course-view{
    width: 100%;
    height: 90%;
  }
  .ui-btn {
  --btn-padding: 10px 15px;
  margin-bottom: 10px;  
  }
}


.anima-title{
  animation-name: moving-text 1s 1s;
}

@keyframes moving-text {
  0%{
    transform: translateX(-100%);
    animation: ease-out;
  }
  50%{
    transform: translateX(-25%);
    animation: ease-in;
  }
  100%{
    transform: translateX(0%);
  }
}
</style>