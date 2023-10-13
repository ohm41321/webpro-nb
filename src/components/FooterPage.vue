<script setup>


</script>
<template>
  <div class="ft"><hr>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
    <div class="col-md-4 d-flex align-items-center"> 
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <!-- logo brand footer
      
      
      -->
      </a>
      <span class="mb-3 mb-md-0">Many Course Education Thailand &copy; 2023 copyright</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="bt-footer-top-page" href="#">top of page</a></li>
    </ul>
  </footer>
  </div>
</template>
<style>

.ft{
  margin: auto 30px;
  margin-bottom: -3rem;
}
/* bt-footer */
.bt-footer-top-page {
  align-items: center;
  appearance: none;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 2px;
  border-color: #ffa601;
  box-shadow: rgba(255, 123, 0, 0.2) 0 2px 4px, rgba(255, 174, 0, 0.15) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 40px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

.bt-footer-top-page:focus {
  outline: none;
  box-shadow: #ffa601 0 0 0 1.5px inset, rgba(83, 109, 254, 0.4) 0 2px 4px, rgba(83, 109, 254, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.bt-footer-top-page:hover {
  box-shadow: #fff12f 0 4px 8px, #ffd166 0 7px 13px -3px, #ffffff 0 -3px 0 inset;
  transform: translateY(-2px);
}

.bt-footer-top-page:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>