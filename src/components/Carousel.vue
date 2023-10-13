<script setup>

</script>
<template>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://media.discordapp.net/attachments/1003582679465345034/1159912510548357280/slide_PJ_.jpg?ex=6532bfb4&is=65204ab4&hm=0e92c179527a2465d19ebe007d29adb5c02eebc24210003f8aa72a95dc78c9ce&=&width=1175&height=661" style="width: 100%; height: auto; object-fit: fill; object-position: center;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Welcome to Many Course</h1>
            <p class="opacity-75">Discover the most interesting courses for you.</p>   
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://media.discordapp.net/attachments/1003582679465345034/1159913417210085478/slide_PJ_.jpg?ex=6532c08c&is=65204b8c&hm=10bfd4fed8e7b9a47fb6391457201f93b9cd5d73d8b4f1bdd518e03f74a3c0b8&=&width=1175&height=661" style="width: 100%; height:auto; object-fit: fill; object-position: center">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>Let us take care of your future.</h1>
            <p>Develop your skills and create a better future.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://media.discordapp.net/attachments/1003582679465345034/1159104418030026852/image.png?ex=652fcf1c&is=651d5a1c&hm=85e60c9659b4c788482b79fc0a7b75dab4f3106da7053d23b7c4f240a9f3be17&=&width=1183&height=661" style="width: 100%; height: auto;  object-fit: fill; object-position: center;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>Awaken your knowledge.</h1>
            <p>Open up a limitless learning experience.</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style>

@media screen and (max-width: 550px) {

}


/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {

  padding-top: 0rem;
  padding-bottom: 3rem;
  color: rgb(var(--bs-tertiary-color-rgb));
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-top: -25px;
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 30rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

</style>