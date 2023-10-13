<script setup>
import cardCourse from '@/views/cardCourse.vue'
import ShowCase from '@/components/ShowCase.vue'
import Carousel from '@/components/Carousel.vue'
import contact_info from '@/components/Contact_info.vue'

import('../assets/font.css')

</script>
<template>
    <Carousel/>
    <div class="intro">
      <h1 align="center">เรียนรู้และเติมเต็มตัวตนกับ "Many Course" วันนี้!</h1> <br>
      <h4>คุณอาจจะกำลังมองหาโอกาสในการเรียนรู้สิ่งใหม่ ๆ และพัฒนาทักษะของคุณในด้านต่าง ๆ ใช่ไหม? เราขอแนะนำ "Many Course" 
       แพลตฟอร์มการเรียนออนไลน์ที่จะช่วยคุณเปิดประสบการณ์ใหม่ๆ ในการเรียนรู้ทุกวัน!</h4>
      <br>
      <h2>ทำไมคุณควรเข้าร่วม "Many Course"?</h2><br>
      <h4>- เรามีคอร์สเรียนเเละงานอดิเรกให้คุณเลือกเช่น กิจกรรมทางด้านดนตรี, การทำอาหาร, งานศิลปะ, กีฬา และอื่นๆ อีกมากมาย!</h4><br>
      <h4>- คุณจะได้เรียนรู้จากผู้สอนที่มีประสบการณ์และความเชี่ยวชาญในสาขาต่างๆ</h4><br>
      <h4>- การเรียนแบบออนไลน์ที่สะดวก เรียนได้ทุกที่ทุกเวลา ด้วยอุปกรณ์ใดก็ได้ที่คุณมี</h4><br><br>
      <h2 align="center">เริ่มต้นการเรียนรู้วันนี้โดยการสมัครสมาชิกกับ "Many Course" และพบกับโลกของการเรียนรู้ที่ไม่มีข้อจำกัด!</h2>
    </div>
    <div class="container">
      <ShowCase/>
      <div class="box-card-course">
      <cardCourse/> <br>
      </div>
      <!--<RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>-->
      <contact_info/>
    </div>
    </template>
<style>
.box-card-course{
  
}
.line{
  border: 1px solid #000000;
}
*{
  font-family: 'IBM Plex Sans Thai', sans-serif;
}
.intro{
  background-color: 0;
  margin: auto 10rem;
  padding: 1rem;
}
@media screen and (max-width: 1290px) {
.intro{
   margin: auto 3rem;
  }
}
@media screen and (max-width: 900px) {
.intro{
   margin: auto 2rem;
  }
}
@media screen and (max-width: 650px) {
.intro{
   margin: auto 1rem;
  }
}

</style>