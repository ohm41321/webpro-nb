<script setup>

import { RouterLink } from 'vue-router';
import { dataStore } from '../stores/data';

import preview from '../components/previewCourse.vue'


const course_store = dataStore()
const data_course = course_store.courseList


</script>
<template>
<preview/>
<div id="card-course">
<h1 align="center" style="text-transform: uppercase; margin-bottom: 1rem;">about course</h1> <hr class="line"> <br>
<div class="grid-card-course" style="text-transform:unset; margin-left: 10px;">
  <div class="course-card" v-for="(course, index) in data_course" :key="index">
    <img class="card__image" :src="course.img">
      <div class="card__content">
      <span class="title">{{ course.name }}</span>
    <p>{{ course.wht_earn }}</p>
      </div>
        <div class="flex-bt">
        <RouterLink :to="{name:'course', params:{id: course.id}}">
         <button class="course-card-bt course-card-bt--gooey" > Detail
          <div class="course-card-bt__blobs">
          <div></div>
          <div></div>
         <div></div>
          </div>
        </button>
        </RouterLink> 
        <RouterLink to="/purchase">
    <button class="course-card-bt course-card-bt--gooey" > Buy now
      <div class="course-card-bt__blobs">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </button>
      </RouterLink> 
  </div>
  </div>
</div>
</div> <br> <br>
</template>

<style>

/* bt-bt */
.course-card-bt {
  background-color: #ffd166;
  margin: 10px ;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  padding: 0.5em 1em;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

.course-card-bt--gooey {
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 0px solid #ffffff;
  border-radius: 0px;
  position: relative;
  transition: all 500ms ease;
}

.course-card-bt--gooey .course-card-bt__blobs {
  height: 100%;
  filter: url(#goo);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: -3px;
  right: -1px;
  z-index: -1;
}

.course-card-bt--gooey .course-card-bt__blobs div {
  background-color: #ffd166;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  transform: scale(1.4) translateY(125%) translateZ(0);
  transition: all 600ms ease;
}

.course-card-bt--gooey .course-card-bt__blobs div:nth-child(1) {
  left: -5%;
}

.course-card-bt--gooey .course-card-bt__blobs div:nth-child(2) {
  left: 30%;
  transition-delay: 60ms;
}

.course-card-bt--gooey .course-card-bt__blobs div:nth-child(3) {
  left: 66%;
  transition-delay: 20ms;
}

.course-card-bt--gooey:hover {
  color: #ffffff;
}

.course-card-bt--gooey:hover .course-card-bt__blobs div {
  transform: scale(1.4) translateY(0) translateZ(0);
}
/* flex */
.flex-bt{
  justify-content: center;
  display:flex;
}
/* card-css-UIverse */
.course-card {
  width: 350px;
  height: 450px;
  background: #ffd166;
  color: #073b4c;
  font-weight: 600;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
  transition: all .5s ease;
  margin: 0 auto;
}

.course-card::before {
  content: "ON SALE!";
  position: absolute;
  width: 70px;
  height: 70px;
  top: 35%;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ef476f;
  color: aliceblue;
  font-weight: 600;
  font-size: 13px;
  transition: all .5s ease;
}

.card__image {
  width: initial;
  height: 200px;
  background: rgb(6,214,160);
  background: linear-gradient(163deg, #06d6a0 18%, rgba(17,138,178,1) 79%);
  transition: all .5s ease;
  object-fit: cover;
}

.title {
  color: #000000;
  margin: 15px 10px;
  font-weight: 800;
  font-size: 1.4em;
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 10px;
}

.course-card:hover {
  border-top-left-radius: 35px;
  box-shadow: 5px 5px 0px 0px #ffee00, 10px 10px 0px 0px #ff7b00, 15px 15px 0px 0px #ffee00, 5px 5px 15px 5px rgba(0,0,0,0);
}

.course-card:hover .card__image {
  border-top-left-radius: 25px;
}

.course-card:hover::before {
  transform: scale(1.3) rotate(-30deg);
}

/* grid-card */
.grid-card-course{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px ;
  justify-content: center;
}

@media screen and (max-width: 1450px) {
  .grid-card-course{
    grid-template-columns: repeat(2, 1fr);
  }

}
@media screen and (max-width: 1200px) {
  .grid-card-course{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 800px) {
  .grid-card-course{
    grid-template-columns: repeat(1, 1fr);
  }
  .course-card {
  font-size: 0.86rem;
  font-weight: 600;
  padding: 15px;
  align-items: left;
}
}
</style>