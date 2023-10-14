<template>
<div>
    <div class="grid-preview">
        <div class="text-preview-left">
            <h1 class="title-name-preview">Music Class</h1>
            <h4 class="detail-text-preview">"Unlock your musical potential with our Music Courses!"</h4>
        </div>
        <div class="pic-preview-right">
            <img class="pic-res-right" src="https://www.absoluteanime.com/k-on/yui.gif" width="500" height="620" style="object-fit: cover;" >
        </div>
    </div> <br>
    <hr class="line">
    <div class="grid-preview">
        <div class="pic-preview">
            <img class="pic-res-left"  src="https://media.discordapp.net/attachments/1003582679465345034/1162055256750956654/da7ogam-f1defc35-83db-4319-9d8b-15117bcc3c94.png?ex=653a8b4b&is=6528164b&hm=f8f6a29ea649e507ff2abdb72f9d56cf5d4dd22db2edaaf5da7b5129b15fd266&=" width="500" height="620" style="object-fit: cover;">
        </div>
        <div class="text-preview-right">
            <h1 class="title-name-preview">Cooking Class</h1>
            <h4 class="detail-text-preview">"Discover the art of culinary delights with our Cooking Courses!"</h4>
        </div>
    </div> <br>
    <hr class="line">
    <div class="grid-preview">
        <div class="text-preview-left">
            <h1 class="title-name-preview">Drawing Class</h1>
            <h4 class="detail-text-preview">"Unleash your creativity with our Drawing Courses!"</h4>
        </div>
        <div class="pic-preview">
            <img class="pic-res-right"  src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/387563060_194669096981130_9094201529893012578_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF92bj0h4eTb4crD4xh6WZtF2Z-bTJlmugXZn5tMmWa6Bf-LSpsgzr1PTAL9AU_M8aYpO1Ekt8IbB5RjjO72_X4&_nc_ohc=b_h7Q2lXYJ0AX-46YUJ&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=s&oh=03_AdRUavb7mbaeIu81fjL-kzHAItMjD4yJnZ9gajP330xxMQ&oe=65490996" width="450" height="620" style="object-fit: cover;">
        </div>
    </div> <br> <!-- https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4832572f-99af-4762-8892-010000fd8707/de1v51g-2ebeb7e7-0055-4972-9c31-c071d768b520.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ4MzI1NzJmLTk5YWYtNDc2Mi04ODkyLTAxMDAwMGZkODcwN1wvZGUxdjUxZy0yZWJlYjdlNy0wMDU1LTQ5NzItOWMzMS1jMDcxZDc2OGI1MjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IzPCeRvKlcxfHpizYEvkOyUZaZuygjYILizCm-9mLAw -->
    <hr class="line">
    <div class="grid-preview">
        <div class="pic-preview">
            <img class="pic-res-left" src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/387329606_708111248009036_3920970528619625927_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeElvxbui2J3fkzMKhDC6J1FWX-brOYqPuFZf5us5io-4ch2Z12atigcwUUSstWDVeL0LMBEAcMD1UrjUwKJiqZc&_nc_ohc=qjzi4IaH1GYAX8c5-wc&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=s&oh=03_AdQRUDfAXK0RQ_MSSaUDRyOhgy1KBbYryxqvvPPW6zyheg&oe=654914EE" width="500" height="550" style="object-fit: cover;">
        </div>
        <div class="text-preview-right">
            <h1 class="title-name-preview">Exercise Class</h1>
            <h4 class="detail-text-preview">"Get active and stay healthy with our Exercise Courses!"</h4>
        </div>
    </div> <br>
</div> <br> 
</template>
<script setup>

</script>
<style>
.title-name-preview{
    color: #ffa601;
}
.detail-text-preview{
    color: rgb(222, 222, 222);
}
.pic-res-left{
    transition: 1s;
    margin-right: -5rem;

}
.pic-res-right{
    transition: 1s;
    margin-left: -5rem;
}
.grid-preview{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items:  center;
    transition: 1.6s;
    margin: 2rem -10rem;
}
.grid-preview:hover{
    transform: scale(1.175);
}
.text-preview-left{
    text-align: center;
    margin: auto 0;
    margin-right: -15rem;
}
.text-preview-right{
    text-align: center;
    margin: auto 0;
    margin-left: -15rem;
}

@media screen and (max-width: 1690px) {
    .pic-res-left{
    transition: 1s;
    margin: 0 2rem;
}

.pic-res-right{
    transition: 1s;
    margin: 0 1.5rem;
}
.grid-preview{
    margin: 2rem -3rem;
}
.grid-preview:hover{
    transform: scale(1.125);
}
.text-preview-left{
    text-align: center;
    margin: auto 0;
    margin-right: -10rem;
}
.text-preview-right{
    text-align: center;
    margin: auto 0;
    margin-left: -10rem;
}
}
@media screen and (max-width: 1100px) {
    .grid-preview{
    margin: 2rem auto;
}
  .grid-preview:hover{
    transform: scale(1.1);
    }
    .pic-res-left{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .pic-res-right{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .text-preview-left{
    text-align: center;
    margin: auto 0;
    margin-right: auto;
}
.text-preview-right{
    text-align: center;
    margin: auto 0;
    margin-left: auto;
}
}
@media screen and (max-width: 1300px) {
.column{
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-preview:hover{
    transform: scale(1.1);
    }
    .datail-text-preview{
        font-size: 1.3rem;
    }
}
@media screen and (max-width: 1000px) {
    .pic-res-left{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .pic-res-right{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .title-name-preview{
    font-size: 1.5rem;
    }
    .datail-text-preview{
    font-size: 1rem;
    }
    .grid-preview:hover{
    transform: scale(1.05);
    }
}

@keyframes grid-anime{
    0%{
        transform: scale(1);
        animation: ease-out;
    }
    50%{
        transform: scale(1.15);
        animation: ease-in;
    }
    100%{
        transform: scale(1);
    }
}
</style>