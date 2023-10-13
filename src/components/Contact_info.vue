<template>
    <h1 align="center" style="text-transform: uppercase;">contact us</h1> <hr class="line">

    
<div class="container my-5">

<footer class="text-white text-center text-lg-start bg-dark">

  <div class="container p-4">

    <div class="row mt-4">

      <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
       <h5 class="text-uppercase mb-4" align="center" >About Company</h5>

        <p>
            บริษัท "Many Course" เป็น บริษัท ที่เชี่ยวชาญในการบริการทางการศึกษาและการพัฒนาทักษะทางวิชาชีพที่หลากหลายในรูปแบบการออนไลน์และเหมาะสำหรับกลุ่มผู้เรียนทุกช่วงวัยและระดับการศึกษา
    
        </p>

        <p>
            บริษัทนี้มีประสบการณ์ที่ยาวนานในวงการการศึกษาและมุ่งมั่นที่จะสร้างสรรค์ประสบการณ์การเรียนรู้ที่ทันสมัยและน่าทึ่งสำหรับผู้เรียนทุกคน.
        </p>
      </div>
  
      <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-4 pb-1" align="center" >Location And CONTACT</h5>
        <ul class="fa-ul" style="margin-left: 1.65em;">
          <li class="mb-3">
            <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">เลขที่ 63 หมู่ 4 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290</span>
          </li>
          <li class="mb-3">
            <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">ManyCourse@gmail.com</span>
          </li>
          <li class="mb-3">
            <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">056 123456</span>
          </li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6 mb-4 mb-md-0" style=" text-align: center;">
        <div class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style="width: 150px; height: 150px;">
            <img src="https://media.discordapp.net/attachments/1003582679465345034/1162016667786825758/384199760_1015394396518496_1693242854705544577_n1.png?ex=653a675a&is=6527f25a&hm=d91a736a9ec17734ed45325bb707c8e21c08e40340cb33a0ef097a23b61e9694&=&width=625&height=625"
             height="125" width="125" alt=""
                 loading="lazy" />
          </div>
        <p class="text-center">Many Course</p> <br>

        <RouterLink to="/dev">
    <button class="c-button c-button--gooey" style="margin: 0 auto;" > WHO IS DEV
      <div class="c-button__blobs">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </button>
</RouterLink> 

      </div>

    </div>

  </div>



</footer>

</div>

        


</template>
<script setup>
import '../assets/font.css'
</script>
<style>
.field{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    justify-content: space-between;
}
.left-side{
    text-align: center;
    max-width: 20rem;
    margin-top: -10px ;
}
.right-side{
    text-align: center;
    margin-left: -10rem; 
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>